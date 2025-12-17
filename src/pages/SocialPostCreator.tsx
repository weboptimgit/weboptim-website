const SocialPostCreator = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
          Social Post Creator
        </h1>
        
        {/* Post Preview Container */}
        <div className="flex justify-center">
          <div 
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            style={{ width: '1080px', height: '1080px' }}
          >
            {/* Post Canvas - Dark background */}
            <div 
              id="social-post"
              className="w-full h-full flex flex-col items-center justify-center p-16 relative"
              style={{
                background: 'linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)'
              }}
            >
              {/* Colored gradient blurs */}
              <div 
                className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
                style={{ background: '#42c8f2' }}
              />
              <div 
                className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
                style={{ background: '#7287c3' }}
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
                style={{ background: '#42c8f2' }}
              />

              {/* Glass Card */}
              <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 max-w-3xl shadow-2xl">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                  <img 
                    src="/img/weboptim-profile-pic.png" 
                    alt="WebOptim Logo" 
                    className="w-32 h-32 rounded-full shadow-xl ring-4 ring-white/20"
                  />
                </div>
                
                {/* Heading */}
                <h2 
                  className="text-5xl font-display font-bold text-center mb-6 leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #42c8f2 0%, #7287c3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Váš web môže byť<br />rýchlejší a krajší
                </h2>
                
                {/* Subtext */}
                <p className="text-xl text-white/70 text-center leading-relaxed">
                  Profesionálny web development, SEO optimalizácia a digitálny marketing pre váš biznis.
                </p>
              </div>
              
              {/* Bottom Branding */}
              <div className="absolute bottom-12 left-0 right-0 flex justify-center z-10">
                <div 
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full"
                >
                  <span 
                    className="text-xl font-semibold"
                    style={{ color: '#42c8f2' }}
                  >
                    weboptim.eu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-muted-foreground mt-8 text-sm">
          Rozmer: 1080 × 1080 px • Použite screenshot pre zdieľanie
        </p>
      </div>
    </div>
  );
};

export default SocialPostCreator;
