import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const MAKE_WEBHOOK_URL = Deno.env.get('MAKE_WEBHOOK_URL');
    const MAKE_API_KEY = Deno.env.get('MAKE_API_KEY');

    if (!MAKE_WEBHOOK_URL || !MAKE_API_KEY) {
      console.error('Missing Make.com credentials');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    console.log('Contact form submission received:', { 
      name: body.name, 
      email: body.email,
      source: body.source 
    });

    // Forward to Make.com webhook
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-make-apikey': MAKE_API_KEY,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error('Make.com webhook failed:', response.status, await response.text());
      throw new Error('Webhook failed');
    }

    console.log('Contact form forwarded successfully');

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error in contact-form function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
