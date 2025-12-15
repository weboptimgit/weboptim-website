import { memo } from "react";
import { Code, Search, BarChart3, MousePointer2, Globe, Target, TrendingUp } from "lucide-react";

// Memoized and simplified FloatingShapes - uses CSS animations instead of framer-motion for performance
const FloatingShapes = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large glowing orb - CSS only */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 animate-pulse"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan) / 0.4) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
          animationDuration: "8s",
        }}
      />

      {/* Purple orb - CSS only */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 animate-pulse"
        style={{
          background: "radial-gradient(circle, hsl(var(--purple) / 0.5) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
          animationDuration: "10s",
          animationDelay: "2s",
        }}
      />

      {/* Static icons with CSS float animation - wrapper pattern for blur stability */}
      <div
        className="absolute floating-shape"
        style={{ top: "15%", right: "18%", transform: "translateZ(0)", willChange: "transform" }}
      >
        <div className="glass rounded-xl p-4">
          <Code className="w-8 h-8 text-primary" />
        </div>
      </div>

      <div
        className="absolute floating-shape-delayed"
        style={{ top: "25%", left: "8%", width: "120px", transform: "translateZ(0)", willChange: "transform" }}
      >
        <div className="glass rounded-lg overflow-hidden">
          <div className="flex gap-1 p-2 border-b border-border/50">
            <div className="w-2 h-2 rounded-full bg-red-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
          </div>
          <div className="p-3 space-y-1.5">
            <div className="h-1.5 bg-primary/30 rounded w-full" />
            <div className="h-1.5 bg-secondary/30 rounded w-3/4" />
            <div className="h-1.5 bg-primary/20 rounded w-1/2" />
          </div>
        </div>
      </div>

      <div
        className="absolute floating-shape-slow"
        style={{ top: "55%", right: "12%", transform: "translateZ(0)", willChange: "transform" }}
      >
        <div className="glass rounded-xl p-4">
          <BarChart3 className="w-8 h-8 text-secondary" />
        </div>
      </div>

      <div
        className="absolute floating-shape"
        style={{ top: "40%", left: "5%", transform: "translateZ(0)", willChange: "transform" }}
      >
        <div className="glass rounded-xl p-3">
          <Search className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div
        className="absolute floating-shape-delayed"
        style={{ bottom: "25%", right: "25%", transform: "translateZ(0)", willChange: "transform" }}
      >
        <div className="glass rounded-xl p-4">
          <Target className="w-7 h-7 text-primary" />
        </div>
      </div>

      <div
        className="absolute floating-shape-slow"
        style={{ top: "70%", left: "12%", transform: "translateZ(0)", willChange: "transform" }}
      >
        <div className="glass rounded-xl p-3">
          <Globe className="w-6 h-6 text-secondary" />
        </div>
      </div>

      <div
        className="absolute floating-shape"
        style={{ bottom: "35%", left: "18%", transform: "translateZ(0)", willChange: "transform" }}
      >
        <div className="glass rounded-xl p-3">
          <TrendingUp className="w-6 h-6 text-green-400" />
        </div>
      </div>

      {/* Grid lines - static */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--cyan)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--cyan)) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
});

FloatingShapes.displayName = "FloatingShapes";

export default FloatingShapes;