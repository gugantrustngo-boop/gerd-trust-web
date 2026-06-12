"use client";

import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";

const leaders = [
  {
    name: "Mr. S. Karthick",
    role: "Managing Trustee",
    description: "Dedicated to the holistic development of rural communities with a strong background in grassroots social work.",
  },
  {
    name: "Mrs. G. Thineka",
    role: "Financial Trustee",
    description: "Ensures complete financial transparency and resource optimization for maximum community impact.",
  },
  {
    name: "Mrs. S. Dhanaletchumi",
    role: "Trustee",
    description: "Committed to promoting transparency, accountability, and sustainable growth through effective governance and community-focused initiatives.",
  }
];

export function LeadershipSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-brand-primary">Our Leadership</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center flex flex-col items-center group hover:shadow-xl transition-all"
            >
              <div className="w-24 h-24 bg-brand-primary/5 rounded-full flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <UserCircle2 size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-800 mb-1">{leader.name}</h3>
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-4">{leader.role}</p>
              <p className="text-slate-600 leading-relaxed max-w-sm">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
