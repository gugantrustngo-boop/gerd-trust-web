"use client";

import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Briefcase, Trees } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const areas = [
  {
    title: "Education",
    description: "Free tuition programs, scholarships, digital learning opportunities, and computer training for underprivileged children.",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Health",
    description: "Medical camps, hygiene awareness, nutrition education, and healthcare support for rural families.",
    icon: HeartPulse,
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Livelihood",
    description: "Skill development, women empowerment initiatives, youth employment support, and sustainable farming practices.",
    icon: Briefcase,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Environment",
    description: "Tree plantation drives, water conservation initiatives, and environmental awareness programs.",
    icon: Trees,
    color: "bg-emerald-100 text-emerald-700",
  },
];

export function FocusAreasSection() {
  return (
    <section className="py-24 bg-white" id="focus-areas">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-brand-primary">Our Focus Areas</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg">
            We work across multiple domains to ensure comprehensive and holistic development of the communities we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${area.color}`}>
                      <Icon size={32} />
                    </div>
                    <CardTitle className="text-xl font-heading text-slate-800">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
