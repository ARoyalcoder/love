"use client";

import React from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function VillageScene() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-black">
      {/* Cinematic Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/village-friends.jpg"
          alt="Two young Indian girl best friends walking down a golden hour village path"
          fill
          priority
          className="object-cover object-center filter saturate-110 brightness-75 scale-105"
        />
        {/* Cinematic film grain & vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-[#0a0a14]" />
      </div>

      {/* Floating Golden Dust Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-amber-300 animate-pulse"
            style={{
              top: `${(i * 23) % 90}%`,
              left: `${(i * 31) % 95}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              boxShadow: "0 0 8px rgba(251,191,36,0.8)",
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Cinematic Text Overlay Centerpiece */}
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-200 text-xs sm:text-sm tracking-widest uppercase font-serif"
        >
          <Sparkles size={14} className="text-amber-300" />
          <span>The Golden Hour of Childhood</span>
          <Sparkles size={14} className="text-amber-300" />
        </motion.div>

        {/* First Quote Reveal */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-amber-100 tracking-wide leading-relaxed italic"
        >
          “{BIRTHDAY_CONFIG.villageScene.quote1}”
        </motion.h3>

        {/* Second Quote Reveal */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)] leading-tight"
        >
          “{BIRTHDAY_CONFIG.villageScene.quote2}”
        </motion.h2>

        {/* Bhojpuri Poetic Verse */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-6"
        >
          <p className="font-serif text-lg sm:text-2xl text-amber-200 italic max-w-2xl mx-auto border-t border-b border-amber-400/30 py-4 backdrop-blur-sm bg-black/40 rounded-2xl leading-relaxed">
            {BIRTHDAY_CONFIG.villageScene.bhojpuriLine}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex items-center justify-center gap-2 text-rose-300 font-handwriting text-2xl"
        >
          <span>From Sakshi to Arti</span>
          <Heart size={18} className="fill-rose-500 text-rose-500 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
