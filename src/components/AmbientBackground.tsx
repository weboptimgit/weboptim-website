import { motion } from "framer-motion";

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top right - subtle purple accent */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(270 50% 55% / 0.08) 0%, transparent 60%)",
          top: "-20%",
          right: "-10%",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center left - main cyan glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(193 88% 61% / 0.12) 0%, hsl(210 60% 55% / 0.08) 50%, transparent 70%)",
          top: "20%",
          left: "-20%",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Bottom right - blue glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(210 60% 55% / 0.1) 0%, hsl(193 88% 61% / 0.05) 50%, transparent 70%)",
          bottom: "10%",
          right: "10%",
          filter: "blur(90px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Bottom left - subtle purple accent */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(270 50% 55% / 0.06) 0%, transparent 60%)",
          bottom: "-10%",
          left: "20%",
          filter: "blur(120px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default AmbientBackground;