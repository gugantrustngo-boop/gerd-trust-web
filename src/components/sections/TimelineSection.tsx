"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    date: "November 2025",
    title: "Trust Founded",
    description: "GERD Trust was established with the vision of empowering rural communities in Pudukkottai District.",
  },
  {
    date: "Late 2025",
    title: "Registration Completed",
    description: "Successfully registered as a Public Charitable Trust (35/2025) to ensure full legal compliance and transparency.",
  },
  {
    date: "Early 2026",
    title: "Community Programs Started",
    description: "Launched our first free tuition centers and health awareness camps across Ponnamaravathy Block.",
  },
  {
    date: "Future Vision",
    title: "Sustainable Development Goals",
    description: "Expanding our reach to more villages, establishing permanent vocational training centers, and driving large-scale environmental initiatives.",
  },
];

export function TimelineSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-brand-primary">Our Journey</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg">
            The milestones that shape our commitment to rural development.
          </p>
        </div>

        <div className="relative border-l-2 border-brand-primary/20 ml-3 md:mx-auto md:w-full md:border-none">
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-primary/20 -translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[29px] md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white rounded-full border-4 border-brand-accent shadow-md flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-brand-primary rounded-full" />
                  </div>

                  {/* Content Box */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-3">
                        {event.date}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
