import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedMascotProps {
  src: string;
  alt?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return isMobile;
};

const AnimatedMascot = ({
  src,
  alt = "Mascot",
  className = "",
  size = "md"
}: AnimatedMascotProps) => {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const disableMotion = isMobile || reducedMotion;

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-64 h-64"
  };

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect behind mascot - static on mobile */}
      {disableMotion ? (
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-40" />
      ) : (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-primary/20 rounded-full blur-3xl will-change-transform"
          style={{ transform: "translateZ(0)" }}
        />
      )}

      {/* Main mascot container with floating animation */}
      <motion.div
        animate={disableMotion ? undefined : { y: [-8, 8, -8] }}
        transition={disableMotion ? undefined : {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Shadow that moves with float - simplified */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-foreground/20 rounded-full blur-md opacity-25"
        />

        {/* Mascot image */}
        <img
          src={src}
          alt={alt}
          className={`${sizeClasses[size]} object-contain relative z-10`}
        />

        {/* Sparkle effects around mascot - only on desktop */}
        {!disableMotion && (
          <>
            <motion.div
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2 text-primary text-lg will-change-transform"
              style={{ transform: "translateZ(0)" }}
            >
              ✦
            </motion.div>

            <motion.div
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1.5,
                delay: 0.5,
                ease: "easeInOut"
              }}
              className="absolute top-4 -left-4 text-secondary text-sm will-change-transform"
              style={{ transform: "translateZ(0)" }}
            >
              ✦
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedMascot;