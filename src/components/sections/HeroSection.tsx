"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Rural Community"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#051733]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051733]/80 via-[#051733]/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent font-semibold tracking-wide text-sm mb-4 backdrop-blur-sm border border-brand-accent/30">
            Gugan Educational and Rural Development Trust
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-tight">
            Building Better <span className="text-brand-accent">Futures</span> Together
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Empowering rural communities through education, healthcare, livelihood support, environmental sustainability, and community development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="#donate">
              <Button size="lg" className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent/90 text-white font-bold text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all">
                Donate Now
              </Button>
            </Link>
            <Link href="#volunteer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold text-lg px-8 h-14 rounded-full backdrop-blur-sm transition-all">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
