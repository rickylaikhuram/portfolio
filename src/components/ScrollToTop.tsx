"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scrolltop"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-md hover:scale-105 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 mx-auto" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
