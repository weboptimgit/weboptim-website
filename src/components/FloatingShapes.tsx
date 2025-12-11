import { motion } from "framer-motion";

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

      {/* 3D Cube */}
      <motion.div
        className="absolute w-24 h-24"
        style={{
          top: "15%",
          right: "20%",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -30, 0],
        }}
        transition={{
          rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div
          className="absolute w-full h-full border-2 border-primary/40 rounded-lg"
          style={{
            transform: "translateZ(48px)",
            background: "linear-gradient(135deg, hsl(var(--cyan) / 0.1), transparent)",
          }}
        />
        <div
          className="absolute w-full h-full border-2 border-primary/30 rounded-lg"
          style={{
            transform: "rotateY(90deg) translateZ(48px)",
            background: "linear-gradient(135deg, hsl(var(--purple) / 0.1), transparent)",
          }}
        />
        <div
          className="absolute w-full h-full border-2 border-secondary/30 rounded-lg"
          style={{
            transform: "rotateX(90deg) translateZ(48px)",
            background: "linear-gradient(135deg, hsl(var(--cyan) / 0.05), transparent)",
          }}
        />
      </motion.div>

      {/* Floating Ring */}
      <motion.div
        className="absolute w-32 h-32 border-4 border-secondary/30 rounded-full"
        style={{
          top: "60%",
          right: "15%",
        }}
        animate={{
          rotateX: [0, 45, 0, -45, 0],
          rotateZ: [0, 180, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/60"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 8}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Triangle */}
      <motion.div
        className="absolute"
        style={{
          top: "30%",
          left: "8%",
          width: 0,
          height: 0,
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: "52px solid hsl(var(--purple) / 0.3)",
        }}
        animate={{
          rotate: [0, 360],
          y: [0, -25, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--cyan)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--cyan)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default FloatingShapes;