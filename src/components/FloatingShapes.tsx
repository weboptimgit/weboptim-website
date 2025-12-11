import { motion } from "framer-motion";
import { Code, Search, BarChart3, MousePointer2, Globe, Megaphone, Target, TrendingUp } from "lucide-react";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large glowing orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan) / 0.4) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--purple) / 0.5) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Code Brackets Icon */}
      <motion.div
        className="absolute glass rounded-xl p-4"
        style={{ top: "15%", right: "18%" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code className="w-8 h-8 text-primary" />
      </motion.div>

      {/* Browser Window */}
      <motion.div
        className="absolute glass rounded-lg overflow-hidden"
        style={{ top: "25%", left: "8%", width: "120px" }}
        animate={{
          y: [0, -15, 0],
          rotate: [-3, 3, -3],
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

      {/* Analytics Chart Icon */}
      <motion.div
        className="absolute glass rounded-xl p-4"
        style={{ top: "55%", right: "12%" }}
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.05, 1],
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

      {/* Search/SEO Icon */}
      <motion.div
        className="absolute glass rounded-xl p-3"
        style={{ top: "40%", left: "5%" }}
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
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

      {/* Target/Marketing Icon */}
      <motion.div
        className="absolute glass rounded-xl p-4"
        style={{ bottom: "25%", right: "25%" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
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

      {/* Globe/Web Icon */}
      <motion.div
        className="absolute glass rounded-xl p-3"
        style={{ top: "70%", left: "12%" }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      >
        <Globe className="w-6 h-6 text-secondary" />
      </motion.div>

      {/* Cursor Icon */}
      <motion.div
        className="absolute"
        style={{ top: "35%", right: "30%" }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MousePointer2 className="w-6 h-6 text-primary/60 fill-primary/20" />
      </motion.div>

      {/* Trending Up Icon */}
      <motion.div
        className="absolute glass rounded-xl p-3"
        style={{ bottom: "35%", left: "18%" }}
        animate={{
          y: [0, -22, 0],
          scale: [1, 1.1, 1],
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

      {/* Small floating dots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/40"
          style={{
            top: `${25 + i * 15}%`,
            left: `${15 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Grid lines */}
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