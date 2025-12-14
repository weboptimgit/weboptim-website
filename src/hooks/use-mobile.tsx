import * as React from "react";
import { useReducedMotion } from "framer-motion";

const MOBILE_BREAKPOINT = 768;

export function useDevice() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const disableHeavyMotion = !!isMobile || prefersReducedMotion;

  return {
    isMobile: !!isMobile,
    prefersReducedMotion,
    disableHeavyMotion,
  };
}
