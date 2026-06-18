"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const documents = [
  {
    title: "Trust Deed",
    description: "Official Trust Deed document.",
    available: true,
    images: Array.from(
      { length: 13 },
      (_, i) => `/compliance/trust-deed-page-${i + 1}.png`
    ),
  },
    {
      title: "DARPAN Registration",
      description: "NITI Aayog NGO DARPAN Registration.",
      available: true,
      images: ["/compliance/darpan-certificate.jpeg"],
    },
  {
    title: "Trust Registration Certificate",
    description: "Registration No: 35/2025",
    available: false,
  },
  {
    title: "12A Certificate",
    description: "Income Tax exemption registration.",
    available: false,
  },
  {
    title: "80G Certificate",
    description: "Donation tax deduction eligibility.",
    available: false,
  },
];

export function ComplianceSection() {
  return (
    <section className="py-20 bg-white" id="compliance">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-brand-primary">Transparency & Compliance</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We are committed to operating with complete transparency. Our official compliance documents are available for public viewing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/5 transition-colors">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 leading-tight">{doc.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{doc.description}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 flex items-center gap-3">
                {doc.available ? (
                  <>
                   <Dialog>
  <DialogTrigger className="w-full border border-gray-200 rounded-md h-10 flex items-center justify-center gap-2 hover:border-brand-primary hover:text-brand-primary transition-colors">
    <Eye className="w-4 h-4" />
    View Document
  </DialogTrigger>

  <DialogContent className="max-w-5xl h-[90vh]">
    <DialogHeader>
      <DialogTitle>{doc.title}</DialogTitle>
    </DialogHeader>

    <div className="mt-4 h-[75vh] overflow-y-auto space-y-4 pr-2">
      {doc.images?.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${doc.title} ${index + 1}`}
          width={1200}
          height={1600}
          className="w-full rounded-lg border border-gray-200"
        />
      ))}
    </div>
  </DialogContent>
</Dialog>
                  </>
                ) : (
                  <div className="w-full py-2 px-4 bg-gray-50 rounded-md border border-dashed border-gray-200 text-center text-sm text-slate-500 font-medium">
                    Document in process
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
