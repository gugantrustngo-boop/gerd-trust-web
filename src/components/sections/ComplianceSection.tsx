"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const documents = [
  {
    title: "Trust Deed",
    description: "Official Trust Deed document.",
    url: "/gugan-trust-deed.pdf",
    available: true,
  },
  {
    title: "Trust Registration Certificate",
    description: "Registration No: 35/2025",
    url: "#",
    available: false,
  },
  {
    title: "DARPAN Registration",
    description: "NITI Aayog NGO DARPAN Registration.",
    url: "#",
    available: false,
  },
  {
    title: "12A Certificate",
    description: "Income Tax exemption registration.",
    url: "#",
    available: false,
  },
  {
    title: "80G Certificate",
    description: "Donation tax deduction eligibility.",
    url: "#",
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
                      <DialogTrigger 
                        render={
                          <Button variant="outline" className="flex-1 border-gray-200 hover:border-brand-primary hover:text-brand-primary transition-colors">
                            <Eye className="w-4 h-4 mr-2" /> View
                          </Button>
                        }
                      />
                      <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
                        <DialogHeader>
                          <DialogTitle>{doc.title}</DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 w-full mt-4 bg-gray-100 rounded-lg overflow-hidden">
                          <iframe src={doc.url} className="w-full h-full border-none" title={doc.title} />
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <a href={doc.url} download className="flex-1">
                      <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white">
                        <Download className="w-4 h-4 mr-2" /> Download
                      </Button>
                    </a>
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
