"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG, GalleryItem } from "@/config/birthday";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { sound } from "@/lib/sound";
import { Images, Sparkles, ZoomIn, Heart } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = [
  "All",
  "Childhood",
  "School",
  "Village",
  "Adventures",
  "Funny Moments",
  "Birthday",
  "Friendship",
] as const;

export function MemoryGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? BIRTHDAY_CONFIG.galleryItems
      : BIRTHDAY_CONFIG.galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const handleOpenItem = (item: GalleryItem) => {
    sound.playTwinkle();
    setSelectedItem(item);
  };

  return (
    <section id="gallery" className="relative py-24 px-4 bg-[#0c0d1a] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs tracking-widest uppercase font-serif">
            <Images size={14} className="text-amber-400" />
            <span>Visual Keepsakes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 gold-glow">
            Little Pieces of Us
          </h2>

          <p className="text-rose-200/80 text-lg font-serif italic">
            “Moments frozen in golden light, forever etched in the storybook of our lives.”
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playTwinkle();
                  setActiveCategory(cat);
                }}
                className={`px-4 py-2 rounded-full text-xs font-serif transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-amber-400 to-rose-400 text-zinc-950 font-bold shadow-lg shadow-rose-500/20 scale-105"
                    : "bg-[#18192f] text-zinc-300 border border-white/5 hover:border-rose-400/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleOpenItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#16172d] border border-rose-400/20 shadow-xl cursor-pointer hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16172d] via-transparent to-transparent opacity-80" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-amber-200 text-[11px] font-medium">
                  {item.category}
                </div>

                {/* Hover zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                  <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white shadow-xl">
                    <ZoomIn size={20} />
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 space-y-2">
                <h3 className="font-serif font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm font-serif italic line-clamp-2">
                  “{item.caption}”
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] text-rose-300/70 border-t border-white/10">
                  <span>{item.location}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
