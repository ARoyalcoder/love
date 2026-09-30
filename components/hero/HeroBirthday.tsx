"use client";

import React from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { InteractiveCake } from "@/components/birthday/InteractiveCake";
import { BirthdayCountdown } from "@/components/birthday/BirthdayCountdown";
import { Sparkles, Heart, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function HeroBirthday() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("before-we-grew-up");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center pt-16 pb-12 overflow-hidden bg-gradient-to-b from-[#0b0c16] via-[#1a1224] to-[#130f1e]">
      {/* Background illustration with smooth blend mask */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <Image
          src="/images/birthday-hero.jpg"
          alt="Magical birthday fairy lights background"
          fill
          priority
          className="object-cover object-center filter saturate-125 brightness-90"
        />
        {/* Gradients to blend smoothly with dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c16] via-transparent to-[#130f1e]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b0c16]/50 to-[#0b0c16]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <span className="absolute top-1/4 left-[10%] text-3xl animate-bounce" style={{ animationDuration: "5s" }}>
          🎈
        </span>
        <span className="absolute top-1/3 right-[12%] text-3xl animate-bounce" style={{ animationDuration: "6s", animationDelay: "1s" }}>
          🌸
        </span>
        <span className="absolute bottom-1/3 left-[15%] text-2xl animate-float-slow">
          ✨
        </span>
        <span className="absolute top-20 right-[25%] text-2xl animate-float-slow" style={{ animationDelay: "2s" }}>
          🦋
        </span>
      </div>

      {/* Hero Header Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-6 space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-md"
          >
            <Sparkles size={14} className="text-amber-400" />
            <span>{BIRTHDAY_CONFIG.hero.tagline}</span>
            <Heart size={14} className="text-rose-400 fill-rose-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-200 text-xs sm:text-sm font-bold tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.3)]"
          >
            <span>{BIRTHDAY_CONFIG.hero.milestoneBadge}</span>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 gold-glow leading-tight"
        >
          {BIRTHDAY_CONFIG.hero.title}
        </motion.h1>

        {/* Heartfelt Bhojpuri Birthday Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="py-2"
        >
          <p className="font-serif text-xl sm:text-3xl text-amber-200 font-medium italic drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]">
            “{BIRTHDAY_CONFIG.hero.bhojpuriWish}”
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-rose-100/90 text-lg sm:text-2xl font-serif font-light italic max-w-2xl mx-auto leading-relaxed"
        >
          “{BIRTHDAY_CONFIG.hero.subtitle}”
        </motion.p>
      </div>

      {/* Interactive Birthday Cake Centerpiece */}
      <div className="relative z-10 w-full my-4">
        <InteractiveCake />
      </div>

      {/* Birthday Status/Countdown */}
      <div className="relative z-10 w-full">
        <BirthdayCountdown />
      </div>

      {/* Scroll Down Hint Button */}
      <div className="relative z-10 text-center mt-6">
        <button
          onClick={scrollToNext}
          className="group inline-flex flex-col items-center gap-1.5 text-rose-200/70 hover:text-amber-300 transition-colors cursor-pointer"
          aria-label="Scroll to childhood memories"
        >
          <span className="text-xs uppercase tracking-widest font-light">Begin Our Journey</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-amber-300 transition-colors" />
        </button>
      </div>
    </section>
  );
}
