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

  // Simplified static background on mobile for performance
  if (isMobile) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(270 50% 55% / 0.06) 0%, transparent 60%)",
            top: "-20%",
            right: "-10%",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(193 88% 61% / 0.08) 0%, transparent 70%)",
            top: "20%",
            left: "-20%",
            filter: "blur(60px)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute w-[700px] h-[700px] rounded-full animate-ambient-1"
        style={{
          background: "radial-gradient(circle, hsl(270 50% 55% / 0.08) 0%, transparent 60%)",
          top: "-20%",
          right: "-10%",
          filter: "blur(100px)",
        }}
      />

      <div
        className="absolute w-[800px] h-[800px] rounded-full animate-ambient-2"
        style={{
          background:
            "radial-gradient(circle, hsl(193 88% 61% / 0.12) 0%, hsl(210 60% 55% / 0.08) 50%, transparent 70%)",
          top: "20%",
          left: "-20%",
          filter: "blur(80px)",
        }}
      />

      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-ambient-3"
        style={{
          background:
            "radial-gradient(circle, hsl(210 60% 55% / 0.1) 0%, hsl(193 88% 61% / 0.05) 50%, transparent 70%)",
          bottom: "10%",
          right: "10%",
          filter: "blur(90px)",
        }}
      />

      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-ambient-4"
        style={{
          background: "radial-gradient(circle, hsl(270 50% 55% / 0.06) 0%, transparent 60%)",
          bottom: "-10%",
          left: "20%",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
};

export default AmbientBackground;