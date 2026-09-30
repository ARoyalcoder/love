"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { sound } from "@/lib/sound";
import { Heart, Sparkles, Camera, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RealMemoriesSpotlight() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const handlePhotoClick = (index: number) => {
    sound.playTwinkle();
    setSelectedPhoto(index === selectedPhoto ? null : index);
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#111226] via-[#1a1530] to-[#0f0e1f] overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-rose-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        {/* Section Header with Bhojpuri emphasis */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs tracking-widest uppercase font-serif">
            <Camera size={14} className="text-amber-300" />
            <span>Asli Yaari Moments</span>
            <Sparkles size={14} className="text-rose-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 gold-glow">
            {BIRTHDAY_CONFIG.realMemories.bhojpuriHeading}
          </h2>

          <p className="text-rose-200/90 text-lg font-serif italic">
            “{BIRTHDAY_CONFIG.realMemories.subheading}”
          </p>

          <p className="text-xs text-amber-300/80 font-handwriting text-xl">
            (क्लिक करके देखीं साक्षी के दिल के बात ❤️)
          </p>
        </div>

        {/* Real Photos Dual Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4">
          {BIRTHDAY_CONFIG.realMemories.photos.map((photo, idx) => {
            const isSelected = selectedPhoto === idx;

            return (
              <motion.div
                key={photo.id}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => handlePhotoClick(idx)}
                className="group relative cursor-pointer rounded-3xl bg-[#fdfaf5] text-zinc-900 p-4 sm:p-5 shadow-2xl border-4 border-amber-300/60 overflow-hidden flex flex-col justify-between"
              >
                {/* Vintage Tape Accent */}
                <div className="polaroid-tape z-20 flex items-center justify-center">
                  <span className="text-[10px] text-amber-900 font-mono font-bold tracking-widest">
                    ARTI &amp; SAKSHI
                  </span>
                </div>

                {/* Photo Display */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-inner border border-zinc-300 group-hover:shadow-rose-400/20 transition-all">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle golden corner badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-200 text-xs font-serif flex items-center gap-1.5">
                    <Heart size={12} className="fill-rose-500 text-rose-500" />
                    <span>Real Love</span>
                  </div>

                  {/* Tap hint overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-medium flex items-center gap-1.5">
                      <Eye size={14} className="text-amber-300" />
                      <span>भोजपुरी संदेश पढ़े खातिर क्लिक करीं</span>
                    </span>
                  </div>
                </div>

                {/* Caption and Bhojpuri Note */}
                <div className="pt-4 space-y-3">
                  <div className="border-b border-zinc-200 pb-2">
                    <h3 className="font-serif font-bold text-lg text-zinc-900 leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-sans mt-0.5">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Heartfelt Bhojpuri Love Note */}
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300/80">
                    <p className="font-handwriting text-2xl text-rose-900 leading-snug">
                      {photo.bhojpuriNote}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-rose-700 font-handwriting text-xl pt-1">
                    <span>— तोहार अपनी साक्षी</span>
                    <Heart size={16} className="fill-rose-500 text-rose-500 inline" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Celebratory Quote Banner in Bhojpuri */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-rose-500/15 to-amber-500/10 border border-amber-400/30 text-center space-y-2">
          <p className="font-serif text-xl sm:text-2xl text-amber-200 italic">
            “भगवान हमनी के सखी ना, बहिन बना के भेजले बाड़न। जनमदिन मुबारक हो आरती!”
          </p>
          <p className="text-xs text-rose-300 font-handwriting text-xl">
            — साक्षी सिंह के तरफ से ढेर सारा प्यार आ आशीर्वाद
          </p>
        </div>
      </div>
    </section>
  );
}
