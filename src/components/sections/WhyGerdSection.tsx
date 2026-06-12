"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  "Transparent Operations",
  "Community Driven",
  "Education Focused",
  "Sustainable Development",
  "Rural Empowerment",
  "Long-Term Impact",
];

export function WhyGerdSection() {
  return (
    <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">Why GERD Trust?</h2>
              <div className="w-20 h-1 bg-brand-accent rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe in creating sustainable change that lasts generations. Our approach is holistic, community-centric, and entirely focused on empowering those who need it most.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                  <CheckCircle2 className="text-brand-accent shrink-0" size={24} />
                  <span className="font-medium text-white">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl hidden lg:block"
          >
            <Image
              src="/logo1.png"
              alt="Community impact"
              fill
              className="object-contain p-6"
              sizes="70vw"
            />
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
