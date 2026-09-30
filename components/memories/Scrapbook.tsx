"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG, ScrapbookCard } from "@/config/birthday";
import { sound } from "@/lib/sound";
import { BookOpen, Sparkles, Heart, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Scrapbook() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    sound.playPaperRustle();
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="scrapbook" className="relative py-24 px-4 bg-[#0d0e1b] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs tracking-widest uppercase">
            <BookOpen size={14} />
            <span>Handmade Keepsake</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100">
            Our Memory Scrapbook
          </h2>

          <p className="text-rose-200/90 text-lg font-serif italic">
            “Polaroids of laughter, silly fights, and promises kept across the years.”
          </p>
          <p className="text-xs text-amber-200/60 font-sans tracking-wide">
            Tap or hover on any Polaroid card to flip and read Sakshi&apos;s handwritten secret note ✍️
          </p>
        </div>

        {/* Polaroid Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 pt-4">
          {BIRTHDAY_CONFIG.scrapbookCards.map((card) => {
            const isFlipped = !!flippedCards[card.id];

            return (
              <div
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className="group relative cursor-pointer perspective"
                style={{
                  transform: `rotate(${card.rotation}deg)`,
                }}
              >
                {/* Washi Tape Accent */}
                <div className="polaroid-tape z-30 flex items-center justify-center">
                  <span className="text-[10px] text-amber-800/70 font-mono select-none">MEMORY</span>
                </div>

                {/* Card Container */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-full aspect-[4/5] rounded-xl bg-[#fcf9f2] text-zinc-900 p-3.5 shadow-2xl border border-zinc-200 flex flex-col justify-between overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {!isFlipped ? (
                      /* FRONT: Polaroid Photo + Caption */
                      <motion.div
                        key="front"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col h-full justify-between"
                      >
                        {/* Photo area */}
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-zinc-100 shadow-inner border border-zinc-300">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover object-center filter saturate-105"
                          />
                          {/* Sticker Badge */}
                          <span className="absolute top-2 right-2 text-2xl drop-shadow-md select-none">
                            {card.sticker}
                          </span>
                        </div>

                        {/* Title and Date */}
                        <div className="pt-3 pb-1 text-center">
                          <h4 className="font-serif font-bold text-sm text-zinc-800 leading-tight">
                            {card.title}
                          </h4>
                          {card.bhojpuriTitle && (
                            <p className="font-serif italic text-xs text-rose-700 mt-0.5 font-medium">
                              {card.bhojpuriTitle}
                            </p>
                          )}
                          <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider block mt-1">
                            {card.dateStr}
                          </span>
                        </div>

                        <div className="flex items-center justify-center text-[11px] text-rose-500 font-handwriting gap-1 pt-1 border-t border-dashed border-zinc-200">
                          <Eye size={12} />
                          <span>क्लिक करीं - साक्षी के पाती पढ़ीं ✍️</span>
                        </div>
                      </motion.div>
                    ) : (
                      /* BACK: Handwritten Diary Entry */
                      <motion.div
                        key="back"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col h-full justify-between p-2 paper-texture rounded-lg border border-amber-200/50"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
                            <span className="text-xl">{card.sticker}</span>
                            <span className="text-[10px] font-mono text-zinc-500">{card.dateStr}</span>
                          </div>

                          <h4 className="font-serif font-bold text-sm text-rose-900">
                            {card.title}
                          </h4>

                          <p className="font-handwriting text-xl text-zinc-800 leading-snug">
                            “{card.note}”
                          </p>

                          {card.bhojpuriNote && (
                            <div className="p-2 rounded-lg bg-amber-100/60 border border-amber-300/40">
                              <p className="font-serif italic text-xs text-amber-950 font-medium">
                                {card.bhojpuriNote}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-xs text-rose-700 font-handwriting pt-2 border-t border-zinc-300">
                          <span>तोहार अपनी साक्षी ❤️</span>
                          <Heart size={14} className="fill-rose-500 text-rose-500" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
