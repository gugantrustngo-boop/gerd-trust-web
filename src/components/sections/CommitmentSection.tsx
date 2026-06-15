"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, HeartHandshake, Leaf } from "lucide-react";

const commitments = [
  {
    title: "Transparency",
    description: "We maintain 100% financial and operational transparency with our donors and beneficiaries.",
    icon: ShieldCheck,
  },
  {
    title: "Accountability",
    description: "Every program is monitored, evaluated, and reported to ensure maximum impact and efficiency.",
    icon: Scale,
  },
  {
    title: "Community First",
    description: "Our initiatives are designed with and for the community, addressing their real, on-ground needs.",
    icon: HeartHandshake,
  },
  {
    title: "Sustainable Development",
    description: "We focus on long-term solutions that create lasting change, not just temporary relief.",
    icon: Leaf,
  },
];

export function CommitmentSection() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-brand-primary">Our Commitment</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg">
            we are committed to building trust through integrity, accountability, and community ownership in all our work across Tamil Nadu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 font-heading mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
