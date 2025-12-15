import { motion } from "framer-motion";
import { Code, Search, BarChart3, MousePointer2, Globe, Target, TrendingUp } from "lucide-react";

// Use GPU-accelerated animations with reduced complexity for mobile
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large glowing orb - simplified animation */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 will-change-transform"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan) / 0.4) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
          transform: "translateZ(0)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple orb - simplified */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 will-change-transform"
        style={{
          background: "radial-gradient(circle, hsl(var(--purple) / 0.5) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
          transform: "translateZ(0)",
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Code Brackets Icon - reduced animation complexity */}
      <motion.div
        className="absolute glass rounded-xl p-4 will-change-transform"
        style={{ top: "15%", right: "18%", transform: "translateZ(0)" }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code className="w-8 h-8 text-primary" />
      </motion.div>

      {/* Browser Window - simplified */}
      <motion.div
        className="absolute glass rounded-lg overflow-hidden will-change-transform"
        style={{ top: "25%", left: "8%", width: "120px", transform: "translateZ(0)" }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
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
      </motion.div>

      {/* Analytics Chart Icon - simplified */}
      <motion.div
        className="absolute glass rounded-xl p-4 will-change-transform"
        style={{ top: "55%", right: "12%", transform: "translateZ(0)" }}
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <BarChart3 className="w-8 h-8 text-secondary" />
      </motion.div>

      {/* Search/SEO Icon - simplified */}
      <motion.div
        className="absolute glass rounded-xl p-3 will-change-transform"
        style={{ top: "40%", left: "5%", transform: "translateZ(0)" }}
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Search className="w-6 h-6 text-primary" />
      </motion.div>

      {/* Target/Marketing Icon - simplified */}
      <motion.div
        className="absolute glass rounded-xl p-4 will-change-transform"
        style={{ bottom: "25%", right: "25%", transform: "translateZ(0)" }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <Target className="w-7 h-7 text-primary" />
      </motion.div>

      {/* Globe/Web Icon - simplified, removed rotation */}
      <motion.div
        className="absolute glass rounded-xl p-3 will-change-transform"
        style={{ top: "70%", left: "12%", transform: "translateZ(0)" }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Globe className="w-6 h-6 text-secondary" />
      </motion.div>

      {/* Cursor Icon - simplified */}
      <motion.div
        className="absolute will-change-transform"
        style={{ top: "35%", right: "30%", transform: "translateZ(0)" }}
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MousePointer2 className="w-6 h-6 text-primary/60 fill-primary/20" />
      </motion.div>

      {/* Trending Up Icon - simplified */}
      <motion.div
        className="absolute glass rounded-xl p-3 will-change-transform"
        style={{ bottom: "35%", left: "18%", transform: "translateZ(0)" }}
        animate={{
          y: [0, -22, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <TrendingUp className="w-6 h-6 text-green-400" />
      </motion.div>

      {/* Small floating dots - reduced count and simplified */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/40 will-change-transform"
          style={{
            top: `${25 + i * 20}%`,
            left: `${15 + i * 12}%`,
            transform: "translateZ(0)",
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Grid lines - static, no animation */}
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
};

export default FloatingShapes;