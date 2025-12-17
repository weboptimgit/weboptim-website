import { Rocket, Sparkles, Zap, Globe } from "lucide-react";

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
            {/* Post Canvas - Dark background like hero */}
            <div 
              id="social-post"
              className="w-full h-full flex flex-col items-center justify-center p-16 relative"
              style={{
                background: 'linear-gradient(180deg, #09090b 0%, #0c0c10 50%, #09090b 100%)'
              }}
            >
              {/* Gradient orbs like hero section */}
              <div 
                className="absolute -top-[150px] -left-[150px] w-[600px] h-[600px] rounded-full blur-[100px]"
                style={{ 
                  background: 'linear-gradient(to bottom right, rgba(66, 200, 242, 0.3), rgba(59, 130, 246, 0.2))'
                }}
              />
              <div 
                className="absolute -bottom-[150px] -right-[150px] w-[700px] h-[700px] rounded-full blur-[120px]"
                style={{ 
                  background: 'linear-gradient(to top left, rgba(59, 130, 246, 0.3), rgba(66, 200, 242, 0.15))'
                }}
              />
              <div 
                className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-60"
                style={{ background: 'rgba(147, 51, 234, 0.15)' }}
              />

              {/* Floating icons */}
              <div className="absolute top-24 left-24 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <Rocket className="w-10 h-10 text-[#42c8f2]" />
              </div>
              <div className="absolute top-32 right-32 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <Sparkles className="w-10 h-10 text-[#a855f7]" />
              </div>
              <div className="absolute bottom-40 left-32 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <Zap className="w-10 h-10 text-[#7b5fc7]" />
              </div>
              <div className="absolute bottom-32 right-24 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <Globe className="w-10 h-10 text-[#42c8f2]" />
              </div>

              {/* Main Content */}
              <div className="relative z-10 text-center max-w-3xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full mb-10">
                  <Sparkles className="w-5 h-5 text-[#a855f7]" />
                  <span className="text-white/80 font-medium">Novinka 2025</span>
                </div>

                {/* Logo */}
                <div className="flex justify-center mb-10">
                  <img 
                    src="/img/weboptim-profile-pic.png" 
                    alt="WebOptim Logo" 
                    className="w-28 h-28 rounded-full shadow-xl ring-4 ring-white/10"
                  />
                </div>
                
                {/* Heading */}
                <h2 
                  className="text-6xl font-display font-bold text-center mb-8 leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #42c8f2 0%, #a855f7 50%, #7b5fc7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Máme nový web!
                </h2>
                
                {/* Subtext */}
                <p className="text-2xl text-white/70 text-center leading-relaxed mb-4">
                  Nový kabát, rýchlejší načítanie<br />a moderný dizajn pre lepší zážitok.
                </p>

                <p className="text-lg text-white/50 text-center">
                  🚀 Rýchlosť • ✨ Dizajn • 💡 UX
                </p>
              </div>
              
              {/* Bottom Branding */}
              <div className="absolute bottom-12 left-0 right-0 flex justify-center z-10">
                <div 
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full"
                >
                  <span 
                    className="text-xl font-semibold"
                    style={{ 
                      background: 'linear-gradient(90deg, #42c8f2, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
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
