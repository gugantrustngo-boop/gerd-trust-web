"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const categories = ["All", "Education", "Health", "Environment", "Community Activities"];

// Dummy data prepared for future actual uploads
const initialImages = [
  {
    id: 1,
    category: "Education",
    src: "/student.jpeg",
    alt: "Students in classroom",
    caption:
      "Digital Learning Session | Govt School, Ponnamaravathy | 45 students participated",
  },
  {
    id: 2,
    category: "Community Activities",
    src: "/villag.jpeg",
    alt: "Women Self Help Group Training",
    caption:
      "Women Self-Help Group Training | Financial Literacy Program | Pudukkottai District",
  },
  {
    id: 3,
    category: "Environment",
    src: "/tree.jpeg",
    alt: "Sapling Plantation Drive",
    caption:
      "Green Future Drive | 200+ saplings planted by youth volunteers",
  },
  {
    id: 4,
    category: "Health",
    src: "/community.jpeg",
    alt: "Sanitation Workers Support",
    caption:
      "Clean Village Initiative | Equipping women sanitation workers with safety gear",
  },
  {
    id: 5,
    category: "Community Activities",
    src: "/medic.jpeg",
    alt: "Village Awareness Camp",
    caption:
      "Village Awareness Camp | Maternal & Child Health Discussion",
  },
  {
    id: 6,
    category: "Education",
    src: "/medica.jpeg",
    alt: "Educational Support Program",
    caption:
      "Educational Support Initiative | Empowering Rural Students Through Learning",
  },
];

export function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] =
  useState<(typeof initialImages)[0] | null>(null);

  const filteredImages = initialImages.filter(
    (img) => filter === "All" || img.category === filter
  );

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100" id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-brand-primary">Our Impact Gallery</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Glimpses of our work and the smiles we&apos;ve helped create across rural communities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-brand-primary text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="relative group rounded-2xl overflow-hidden bg-gray-200 aspect-square sm:aspect-auto sm:h-[300px] cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <Maximize2 className="text-white mb-2" size={32} />
                  <div className="px-4 text-center">
  <h4 className="text-white font-semibold text-base mb-2">
    {img.alt}
  </h4>

  <p className="text-white/90 text-sm leading-relaxed">
    {img.caption}
  </p>
</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
<Dialog
  open={!!selectedImage}
  onOpenChange={() => setSelectedImage(null)}
>
  <DialogContent className="max-w-5xl bg-black/95 border-none p-0 overflow-hidden">
    {selectedImage && (
      <div className="relative w-full h-[85vh]">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          className="object-contain"
        />

        {/* Caption Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
          <h3 className="text-white text-xl font-semibold mb-2">
            {selectedImage.alt}
          </h3>

          <p className="text-white/90 text-sm md:text-base">
            {selectedImage.caption}
          </p>
        </div>
      </div>
    )}
  </DialogContent>
</Dialog>
      </div>
    </section>
  );
}
