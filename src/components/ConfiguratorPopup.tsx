import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConfiguratorCtaBox from "@/components/ConfiguratorCtaBox";

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  storageKey?: string;
};

export default function ConfiguratorPopup({
  badge,
  title,
  subtitle,
  cta,
  href,
  storageKey = "wo-configurator-popup-hidden",
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hidden = localStorage.getItem(storageKey);
    if (!hidden) {
      const t = setTimeout(() => setOpen(true), 1200); // jemné oneskorenie
      return () => clearTimeout(t);
    }
  }, [storageKey]);

  const close = () => {
    localStorage.setItem(storageKey, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative max-w-xl w-full"
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-3 -right-3 bg-background border rounded-full p-2 shadow hover:bg-muted transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <ConfiguratorCtaBox
              badge={badge}
              title={title}
              subtitle={subtitle}
              cta={cta}
              href={href}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
