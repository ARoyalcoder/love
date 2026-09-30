"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { sound } from "@/lib/sound";
import { Sparkles, MapPin, Feather, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Hotspot {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
  hindiDetail: string;
}

const VILLAGE_HOTSPOTS: Hotspot[] = [
  {
    id: "handpump",
    name: "The Iron Hand Pump",
    x: 25,
    y: 72,
    title: "Cold Water & Splashing Fights",
    description: "Pumping with all our strength while you washed your face, only for me to splash ice-cold ground water right on your school uniform!",
    hindiDetail: "“नलके का वो ठंडा पानी और दोनों की वो शरारतें…”",
  },
  {
    id: "charpai",
    name: "The Courtyard Charpai",
    x: 75,
    y: 76,
    title: "Under The Banyan Canopy",
    description: "Lying down side-by-side on the woven jute cot, staring up at the leaves dancing against the sky, talking about nothing and everything.",
    hindiDetail: "“चारपाई पर बैठकर तारों को गिनना और अनगिनत बातें करना…”",
  },
  {
    id: "mangotree",
    name: "The Giant Mango Tree",
    x: 85,
    y: 28,
    title: "The King of the Village",
    description: "That huge leafy shelter where we found shade in May, hidden from everyone's scolding, plotting which branches to climb next.",
    hindiDetail: "“आम की वो ठंडी छांव जिसने हमारे हर राज छुपाए रखे।”",
  },
  {
    id: "mudhouse",
    name: "The Village Courtyard",
    x: 18,
    y: 45,
    title: "Terracotta Roofs & Earthen Walls",
    description: "The warmth of mud-plastered walls smelling of fresh earth, brass water pots glistening, and the sound of bells from cows returning at dusk.",
    hindiDetail: "“गोबर से लीपे आंगन और शाम के दिये की वो भीनी-भीनी खुशबू।”",
  },
];

export function BeforeWeGrewUp() {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(VILLAGE_HOTSPOTS[0]);

  const handleSelect = (h: Hotspot) => {
    sound.playTwinkle();
    setSelectedHotspot(h);
  };

  return (
    <section id="before-we-grew-up" className="relative py-20 px-4 bg-[#0e0f1d] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs tracking-widest uppercase">
            <Feather size={14} />
            <span>Nostalgic Roots</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-peach-200 to-rose-200">
            {BIRTHDAY_CONFIG.beforeWeGrewUp.heading}
          </h2>

          <p className="text-rose-200/90 text-xl font-serif italic">
            “{BIRTHDAY_CONFIG.beforeWeGrewUp.subheading}”
          </p>

          <p className="text-zinc-300 text-base leading-relaxed font-light">
            {BIRTHDAY_CONFIG.beforeWeGrewUp.quote}
          </p>

          <p className="text-amber-300 font-serif text-lg sm:text-xl italic border-y border-amber-500/20 py-3 mt-4 leading-relaxed">
            {BIRTHDAY_CONFIG.beforeWeGrewUp.bhojpuriVerse}
          </p>
        </div>

        {/* Cinematic Village Scene with Interactive Hotspots */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/20 shadow-2xl bg-[#141527] group">
          {/* Main Visual Image */}
          <div className="relative aspect-[16/9] w-full min-h-[380px] sm:min-h-[500px]">
            <Image
              src="/images/village-childhood.jpg"
              alt="Indian village courtyard with handpump, charpai, and terracotta houses"
              fill
              className="object-cover object-center filter saturate-110 group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Ambient Lighting Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f1d] via-transparent to-black/20" />
            
            {/* Interactive Pulse Hotspots */}
            {VILLAGE_HOTSPOTS.map((h) => (
              <button
                key={h.id}
                onClick={() => handleSelect(h)}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin cursor-pointer focus:outline-none"
                aria-label={`Inspect ${h.name}`}
              >
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${
                    selectedHotspot?.id === h.id ? "bg-amber-400" : "bg-rose-400"
                  }`} />
                  <span className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-xs text-black font-bold shadow-lg transition-transform group-hover/pin:scale-125 ${
                    selectedHotspot?.id === h.id
                      ? "bg-amber-300 ring-4 ring-amber-400/50"
                      : "bg-white ring-2 ring-rose-400"
                  }`}>
                    <MapPin size={12} className="text-zinc-900" />
                  </span>
                </span>
                {/* Tooltip badge */}
                <span className="hidden sm:inline-block absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md text-amber-200 text-[11px] px-2.5 py-1 rounded-full border border-amber-400/30 opacity-0 group-hover/pin:opacity-100 transition-opacity">
                  {h.name}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Hotspot Detail Card Bar */}
          <div className="p-6 sm:p-8 bg-[#15162a]/95 border-t border-amber-400/20 backdrop-blur-md">
            <AnimatePresence mode="wait">
              {selectedHotspot && (
                <motion.div
                  key={selectedHotspot.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold">
                        {selectedHotspot.name}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-amber-100">
                        {selectedHotspot.title}
                      </h4>
                    </div>
                    <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
                      {selectedHotspot.description}
                    </p>
                  </div>
                  <div className="border-l-2 border-rose-400/40 pl-4 py-1 shrink-0">
                    <p className="text-amber-300 font-serif italic text-sm">
                      {selectedHotspot.hindiDetail}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
