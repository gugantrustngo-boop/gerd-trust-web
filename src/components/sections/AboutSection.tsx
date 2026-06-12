"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-24 bg-gray-50" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/logo1.png"
                alt="About GERD Trust"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1020px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-secondary/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary leading-tight">
                Empowering Communities, Transforming Lives
              </h3>
            </div>
            
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                GERD Trust is a Public Charitable Trust working for rural children, women, and marginalized families in Ponnamaravathy Block and surrounding villages of Pudukkottai District. We work without discrimination of caste, religion, or gender.
              </p>
              <p>
                Founded on <span className="font-semibold text-brand-primary">20 November 2025</span>, GERD Trust focuses on empowering rural communities through education, healthcare, skill development, environmental sustainability, and livelihood support.
              </p>
            </div>
            
            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-gray-200">
              <div>
                <h4 className="text-4xl font-bold text-brand-accent font-heading mb-1">2025</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Year Founded</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-brand-accent font-heading mb-1">35/2025</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Registration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
