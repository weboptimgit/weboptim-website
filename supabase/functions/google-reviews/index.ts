const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const PLACE_ID = 'ChIJzcbs0zaVC0cRcanhELRst6E';
const PLACES_API_BASE = 'https://places.googleapis.com/v1';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'GOOGLE_PLACES_API_KEY not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Places API (New) - GET place details with reviews
    const url = `${PLACES_API_BASE}/places/${PLACE_ID}?fields=reviews,rating,userRatingCount&languageCode=cs`;

    const response = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Google Places API (New) error:', response.status, data);
      return new Response(
        JSON.stringify({ error: `Google API error: ${response.status}`, details: data }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const reviews = (data.reviews ?? [])
      .filter((r: any) => r.text?.text && r.text.text.trim().length > 30)
      .map((r: any) => ({
        name: r.authorAttribution?.displayName ?? 'Anonymous',
        role: '',
        image: r.authorAttribution?.photoUri ?? '',
        quote: r.text?.text ?? '',
        rating: r.rating ?? 5,
        time: r.relativePublishTimeDescription ?? '',
      }));

    return new Response(
      JSON.stringify({
        reviews,
        rating: data.rating,
        total: data.userRatingCount,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch reviews' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
