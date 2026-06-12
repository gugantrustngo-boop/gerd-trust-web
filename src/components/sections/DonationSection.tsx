"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, CreditCard, Heart, QrCode } from "lucide-react";
import Image from "next/image";

export function DonationSection() {
  return (
    <section className="py-24 bg-brand-primary text-white" id="donate">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Heart className="w-12 h-12 text-brand-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Support Our Mission</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg">
            Your generous contribution helps us create lasting impact in rural communities. Every rupee makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bank Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                <Landmark size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-brand-primary">Bank Transfer</h3>
                <p className="text-slate-500 font-medium text-sm">Direct deposit to our trust account</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Account Holder</p>
                <p className="font-semibold text-lg">Gugan Educational and Rural Development (GERD) Trust</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Bank Name</p>
                  <p className="font-semibold text-lg flex items-center gap-2">
                    <Building2 size={18} className="text-brand-accent" />
                    State Bank of India
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Account Number</p>
                  <p className="font-mono font-bold text-xl tracking-tight text-brand-primary">45262952173</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">IFSC Code</p>
                <p className="font-mono font-bold text-xl tracking-tight text-brand-primary">SBIN0005132</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-xl">
              <p className="text-sm font-semibold text-brand-primary text-center">
                All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
              </p>
            </div>
          </motion.div>

          {/* QR Code / Online Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent mb-6">
              <QrCode size={32} />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-2">Scan to Donate</h3>
            <p className="text-gray-300 text-sm mb-8">Support us instantly via UPI / GPay / PhonePe</p>
            
            <div className="w-64 h-64 bg-white rounded-2xl p-4 shadow-xl flex items-center justify-center relative overflow-hidden group">
              {/* Replace this div with an actual img tag for the QR code when available */}
              <div className="w-64 h-64 bg-white rounded-2xl p-4 shadow-xl flex items-center justify-center">
  <img
    src="/upi1.jpeg"
    alt="GERD Trust UPI QR Code"
    className="w-full h-full object-contain rounded-lg"
  />
</div>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-brand-accent font-medium text-sm">
              <CreditCard size={18} />
              <span>Secure & Encrypted Transfer</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
