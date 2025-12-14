import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

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

const AmbientBackground = () => {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const disableMotion = isMobile || reducedMotion;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(270 50% 55% / 0.08) 0%, transparent 60%)",
          top: "-20%",
          right: "-10%",
          filter: disableMotion ? "blur(70px)" : "blur(100px)",
        }}
        animate={disableMotion ? undefined : { scale: [1, 1.1, 1], x: [0, 30, 0] }}
        transition={disableMotion ? undefined : { duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(193 88% 61% / 0.12) 0%, hsl(210 60% 55% / 0.08) 50%, transparent 70%)",
          top: "20%",
          left: "-20%",
          filter: disableMotion ? "blur(60px)" : "blur(80px)",
        }}
        animate={disableMotion ? undefined : { scale: [1, 1.15, 1], y: [0, 50, 0] }}
        transition={disableMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(210 60% 55% / 0.1) 0%, hsl(193 88% 61% / 0.05) 50%, transparent 70%)",
          bottom: "10%",
          right: "10%",
          filter: disableMotion ? "blur(60px)" : "blur(90px)",
        }}
        animate={disableMotion ? undefined : { scale: [1, 1.2, 1], x: [0, -40, 0] }}
        transition={disableMotion ? undefined : { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(270 50% 55% / 0.06) 0%, transparent 60%)",
          bottom: "-10%",
          left: "20%",
          filter: disableMotion ? "blur(70px)" : "blur(120px)",
        }}
        animate={disableMotion ? undefined : { scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={disableMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};

export default AmbientBackground;
