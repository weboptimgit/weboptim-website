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
    const MAKE_CONFIGURATOR_WEBHOOK_URL = Deno.env.get('MAKE_CONFIGURATOR_WEBHOOK_URL');

    if (!MAKE_CONFIGURATOR_WEBHOOK_URL) {
      console.error('Missing Make.com configurator webhook URL');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    console.log('Configurator form submission received:', { 
      contact: body.contact?.name,
      email: body.contact?.email,
      source: body.meta?.source 
    });

    // Forward to Make.com webhook
    const response = await fetch(MAKE_CONFIGURATOR_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error('Make.com configurator webhook failed:', response.status, await response.text());
      throw new Error('Webhook failed');
    }

    console.log('Configurator form forwarded successfully');

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error in configurator-form function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
