"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { sound } from "@/lib/sound";
import { Sparkles, Heart, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCinematicScene() {
  const [replayCount, setReplayCount] = useState<number>(0);

  const handleReplay = () => {
    sound.playTwinkle();
    setReplayCount((c) => c + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center py-24 px-4 overflow-hidden bg-gradient-to-b from-[#0a0a14] via-[#0d0e22] to-[#05050c]">
      {/* Background Starlit Horizon Image */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none">
        <Image
          src="/images/under-stars.jpg"
          alt="Two best friends sitting beneath ancient tree under starry night sky with fireflies"
          fill
          className="object-cover object-center filter saturate-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050c] via-transparent to-[#0a0a14]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#05050c]/60 to-[#05050c]" />
      </div>

      {/* Twinkling Fireflies and Constellation */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-amber-200 animate-pulse"
            style={{
              top: `${(i * 19) % 90}%`,
              left: `${(i * 27) % 95}%`,
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              boxShadow: "0 0 10px rgba(251,191,36,0.9)",
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Spacer top */}
      <div className="h-10" />

      {/* Cinematic Gradually Appearing Lines */}
      <div className="relative z-20 max-w-3xl mx-auto text-center space-y-10 px-4">
        <div className="space-y-6">
          {BIRTHDAY_CONFIG.finalScene.lines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.6 }}
              className="space-y-1"
            >
              <p className="text-xl sm:text-3xl font-serif text-rose-100/90 font-light italic tracking-wide">
                “{line}”
              </p>
              {BIRTHDAY_CONFIG.finalScene.bhojpuriLines?.[idx] && (
                <p className="text-base sm:text-xl font-serif text-amber-300/80 italic">
                  “{BIRTHDAY_CONFIG.finalScene.bhojpuriLines[idx]}”
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Grand Final Birthday Wish Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 2.4 }}
          className="pt-8 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs uppercase tracking-widest font-serif mb-2">
            <Sparkles size={14} className="text-amber-400" />
            <span>Forever & Always</span>
            <Sparkles size={14} className="text-amber-400" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 gold-glow leading-tight">
            {BIRTHDAY_CONFIG.finalScene.closingWish}
          </h2>

          <p className="text-xl sm:text-2xl font-serif text-amber-200 italic font-semibold">
            “{BIRTHDAY_CONFIG.finalScene.bhojpuriClosing}”
          </p>

          <p className="text-rose-200/80 font-serif italic text-base sm:text-lg max-w-xl mx-auto">
            {BIRTHDAY_CONFIG.finalScene.fromText}
          </p>
        </motion.div>

        {/* Sakshi Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 3 }}
          className="flex items-center justify-center gap-2 text-rose-300 font-handwriting text-3xl sm:text-4xl pt-4"
        >
          <span>With love,</span>
          <span className="text-amber-200 font-bold">{BIRTHDAY_CONFIG.sender.fullName}</span>
          <Heart size={24} className="fill-rose-500 text-rose-500 inline animate-pulse" />
        </motion.div>
      </div>

      {/* Final Action: Replay Our Story */}
      <div className="relative z-20 pt-16 pb-6 text-center">
        <button
          onClick={handleReplay}
          className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1b1c36]/90 border border-amber-400/40 hover:border-amber-400 hover:bg-[#232446] text-amber-200 text-sm font-serif font-medium shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <RotateCcw size={16} className="group-hover:-rotate-90 transition-transform duration-500 text-amber-300" />
          <span>{BIRTHDAY_CONFIG.finalScene.replayText}</span>
          <Sparkles size={14} className="text-amber-300" />
        </button>

        <p className="text-[11px] text-zinc-500 mt-4 uppercase tracking-widest font-mono">
          Handcrafted with infinite love for Arti Singh ❤️ 2026
        </p>
      </div>
    </section>
  );
}
