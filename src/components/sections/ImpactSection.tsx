"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, BookOpen, TreePine, Map, HeartPulse } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smoother counter
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(easeOutQuart * end));

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Students Supported", value: 1500, suffix: "+", icon: BookOpen },
  { label: "Families Empowered", value: 500, suffix: "+", icon: Users },
  { label: "Trees Planted", value: 5000, suffix: "+", icon: TreePine },
  { label: "Villages Reached", value: 25, suffix: "", icon: Map },
  { label: "Health Beneficiaries", value: 3000, suffix: "+", icon: HeartPulse },
];

export function ImpactSection() {
  return (
    <section className="py-20 bg-brand-primary text-white" id="impact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Our Impact</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                <div className="w-14 h-14 bg-brand-secondary/20 rounded-full flex items-center justify-center mb-4 text-brand-secondary">
                  <Icon size={28} />
                </div>
                <h3 className="text-4xl font-bold font-heading text-brand-accent mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-sm md:text-base font-medium text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
