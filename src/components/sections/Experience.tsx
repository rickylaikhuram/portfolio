"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Hands-on experience in full-stack development and innovative
            technology solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group max-w-4xl mx-auto"
        >
          <Card className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 group-hover:scale-[1.02] min-h-[280px] flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-6 w-6 text-foreground/70 group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                  Software Engineer – Internship
                </CardTitle>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-sm text-foreground/70 font-medium">
                  Lamzing Technologies Pvt. Ltd.
                </p>
                <span className="px-2 py-1 rounded-full text-xs sm:text-sm font-medium bg-muted/30 border border-border/30 text-foreground/70 w-fit">
                  Mar 2025 – Aug 2025
                </span>
              </div>
              <div className="h-px bg-gradient-to-r from-border via-border/50 to-transparent mt-3" />
            </CardHeader>

            <CardContent className="flex-1 pt-2">
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Convert satellite terrain data into 3D-printable models",
                  "Built scalable blogging platform using Strapi and React (25% faster development)",
                  "Developed responsive UI components and API integrations",
                  "Agile collaboration using Git and software design principles",
                ].map((achievement, idx) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                    className="flex items-start group/item"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-foreground/40 to-foreground/20 mr-3 mt-2 group-hover/item:from-foreground/60 group-hover/item:to-foreground/40 transition-all duration-200 flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground/80 group-hover/item:text-foreground transition-colors duration-200 leading-relaxed">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>

            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <div className="w-full h-full bg-gradient-to-bl from-foreground to-transparent rounded-full blur-2xl" />
            </div>
          </Card>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/30">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm text-foreground/60 font-medium">
              Open to new opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
