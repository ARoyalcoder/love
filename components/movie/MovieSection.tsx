"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { sound } from "@/lib/sound";
import { Clapperboard, Film, Sparkles, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

export function MovieSection() {
  const [selectedActIndex, setSelectedActIndex] = useState<number>(0);
  const currentAct = BIRTHDAY_CONFIG.movieSection.chapters[selectedActIndex];

  const handleActChange = (index: number) => {
    sound.playTwinkle();
    setSelectedActIndex(index);
  };

  return (
    <section id="movie" className="relative py-24 px-4 bg-[#080812] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs tracking-widest uppercase font-serif">
            <Clapperboard size={14} className="text-amber-400" />
            <span>Cinematic Feature</span>
            <Film size={14} className="text-rose-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 gold-glow">
            {BIRTHDAY_CONFIG.movieSection.title}
          </h2>

          <p className="text-rose-200/80 text-lg font-serif italic">
            “{BIRTHDAY_CONFIG.movieSection.tagline}”
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-serif flex items-center gap-1.5">
              <Award size={13} />
              <span>{BIRTHDAY_CONFIG.movieSection.director}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-400/10 border border-rose-400/30 text-rose-300 text-xs font-serif flex items-center gap-1">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span>Rating: Infinite / 10</span>
            </span>
          </div>
        </div>

        {/* Feature Presentation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131424] p-6 sm:p-10 rounded-3xl border border-rose-500/20 shadow-2xl backdrop-blur-md">
          {/* Movie Poster Image Column */}
          <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="/images/movie-poster.jpg"
              alt="Movie poster for Arti and Sakshi"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-amber-200 font-serif font-bold text-lg drop-shadow-md">
                “Chapters of Us”
              </p>
              <p className="text-xs text-rose-200/80 uppercase tracking-widest font-mono">
                Now Playing in Arti&apos;s Heart
              </p>
            </div>
          </div>

          {/* Acts & Storyline Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 flex items-center gap-2">
              <Film size={20} className="text-amber-400" />
              <span>Scene Selection & Chapters</span>
            </h3>

            {/* Act Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {BIRTHDAY_CONFIG.movieSection.chapters.map((ch, idx) => {
                const isSelected = selectedActIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleActChange(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-serif transition-all cursor-pointer ${
                      isSelected
                        ? "bg-amber-400 text-black font-bold shadow-md scale-105"
                        : "bg-white/5 text-zinc-300 hover:bg-white/10"
                    }`}
                  >
                    Act {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Selected Act Narrative Box */}
            <motion.div
              key={selectedActIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-5 rounded-2xl bg-[#1a1b32] border border-amber-400/20 space-y-3"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-amber-300 font-serif font-bold text-base">
                  {currentAct.title}
                </span>
                <span className="text-xs text-rose-300 font-mono">
                  {currentAct.subtitle}
                </span>
              </div>

              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-light">
                {currentAct.desc}
              </p>
            </motion.div>

            {/* Director's Personal Note */}
            <div className="p-4 rounded-xl bg-rose-500/10 border-l-4 border-rose-400 space-y-1">
              <span className="text-xs text-rose-300 font-serif uppercase tracking-wider font-semibold">
                Director&apos;s Cut Note:
              </span>
              <p className="text-rose-100/90 font-handwriting text-xl">
                “No scriptwriter could write a plot as genuine as the years we spent together, Arti.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
