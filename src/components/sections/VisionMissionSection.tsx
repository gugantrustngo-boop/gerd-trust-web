"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-brand-primary/[0.02] blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-brand-secondary/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-brand-primary mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To build empowered rural communities in Tamil Nadu, starting from Ponnamaravathy Block, Pudukkottai District where every child has access to quality education and every family has sustainable livelihood opportunities.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-8 md:p-10 rounded-3xl bg-brand-primary border border-brand-primary shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full transition-transform duration-500 group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                <Target size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                GERD Trust empowers marginalized rural families in Tamil Nadu by providing quality education, healthcare support, skill development, environmental awareness, and sustainable livelihood programs - beginning our work in ponnamaravathy Block, Pudukkottai District.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
