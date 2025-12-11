import { motion } from "framer-motion";

interface AnimatedMascotProps {
  src: string;
  alt?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const AnimatedMascot = ({ 
  src, 
  alt = "Mascot", 
  className = "",
  size = "md" 
}: AnimatedMascotProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect behind mascot */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
      />

      {/* Main mascot container with floating animation */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Shadow that moves with float */}
        <motion.div
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-foreground/20 rounded-full blur-md"
        />

        {/* Mascot with subtle rotation/wave effect */}
        <motion.div
          animate={{
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={src}
            alt={alt}
            className={`${sizeClasses[size]} object-contain drop-shadow-2xl relative z-10`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Sparkle effects around mascot */}
        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
          className="absolute -top-2 -right-2 text-primary text-lg"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="absolute top-4 -left-4 text-secondary text-sm"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
            delay: 1,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1 right-4 text-primary text-xs"
        >
          ✦
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedMascot;
