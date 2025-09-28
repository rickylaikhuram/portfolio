"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Profile Image - Shows first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Profile photo of Ricky Laikhuram"
                width={250}
                height={250}
                className="w-32 h-32 md:w-64 md:h-64 rounded-full ring-2 ring-border object-cover shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                priority
                onClick={() => setIsModalOpen(true)}
              />
              {/* Optional: Add a subtle gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Content - Shows second on mobile, first on desktop */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              Ricky Laikhuram
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-3 text-lg md:text-xl text-foreground/80"
            >
              Full-Stack Developer & Software Engineer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-5 text-foreground/70"
            >
              Building scalable web applications with modern technologies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 20 }}
              className="relative max-w-2xl max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/profile.jpg"
                alt="Profile photo of Ricky Laikhuram"
                width={600}
                height={600}
                className="rounded-2xl object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;
