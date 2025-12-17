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
            {/* Post Canvas */}
            <div 
              id="social-post"
              className="w-full h-full flex flex-col items-center justify-center p-16 relative"
              style={{
                background: 'linear-gradient(135deg, hsl(190 85% 60% / 0.9) 0%, hsl(230 50% 55% / 0.9) 100%)'
              }}
            >
              {/* Glass Card */}
              <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-16 max-w-3xl shadow-2xl">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                  <img 
                    src="/img/weboptim-profile-pic.png" 
                    alt="WebOptim Logo" 
                    className="w-32 h-32 rounded-full shadow-xl ring-4 ring-white/30"
                  />
                </div>
                
                {/* Heading */}
                <h2 className="text-5xl font-display font-bold text-white text-center mb-6 leading-tight drop-shadow-lg">
                  Váš web môže byť<br />rýchlejší a krajší
                </h2>
                
                {/* Subtext */}
                <p className="text-xl text-white/90 text-center leading-relaxed">
                  Profesionálny web development, SEO optimalizácia a digitálny marketing pre váš biznis.
                </p>
              </div>
              
              {/* Bottom Branding */}
              <div className="absolute bottom-12 left-0 right-0 flex justify-center z-10">
                <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full">
                  <span className="text-xl font-semibold text-white">weboptim.eu</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-32 right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
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
