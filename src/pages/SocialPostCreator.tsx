import { useLanguage } from "@/contexts/LanguageContext";

const SocialPostCreator = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
          Social Post Creator
        </h1>
        
        {/* Post Preview Container */}
        <div className="flex justify-center">
          <div 
            className="relative overflow-hidden"
            style={{ width: '1080px', height: '1080px' }}
          >
            {/* Post Canvas */}
            <div 
              id="social-post"
              className="w-full h-full flex flex-col items-center justify-center p-16"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--brand-cyan)) 0%, hsl(var(--brand-purple)) 100%)'
              }}
            >
              {/* Logo */}
              <img 
                src="/img/weboptim-profile-pic.png" 
                alt="WebOptim Logo" 
                className="w-40 h-40 mb-12 rounded-full shadow-2xl"
              />
              
              {/* Heading */}
              <h2 className="text-6xl font-display font-bold text-white text-center mb-8 leading-tight drop-shadow-lg">
                Váš web môže byť<br />rýchlejší a krajší
              </h2>
              
              {/* Subtext */}
              <p className="text-2xl text-white/90 text-center max-w-2xl leading-relaxed">
                Profesionálny web development, SEO optimalizácia a digitálny marketing pre váš biznis.
              </p>
              
              {/* Bottom Branding */}
              <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full">
                  <span className="text-xl font-semibold text-white">weboptim.eu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-muted-foreground mt-8 text-sm">
          Rozmer: 1080 × 1080 px • Použite screenshot alebo export pre zdieľanie
        </p>
      </div>
    </div>
  );
};

export default SocialPostCreator;
