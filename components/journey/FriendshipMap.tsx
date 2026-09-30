"use client";

import React, { useState } from "react";
import { BIRTHDAY_CONFIG, MapPoint } from "@/config/birthday";
import { sound } from "@/lib/sound";
import { Map, Sparkles, Navigation, Heart, Pin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FriendshipMap() {
  const [selectedPoint, setSelectedPoint] = useState<MapPoint>(BIRTHDAY_CONFIG.mapPoints[0]);

  const handleSelectPoint = (pt: MapPoint) => {
    sound.playTwinkle();
    setSelectedPoint(pt);
  };

  return (
    <section id="map" className="relative py-24 px-4 bg-[#0a0b16] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs tracking-widest uppercase">
            <Navigation size={14} />
            <span>Constellation of Our Journey</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-indigo-200">
            Interactive Friendship Map
          </h2>

          <p className="text-rose-200/80 text-lg font-serif italic">
            “No GPS coordinates can trace this path — only heartstrings and shared dreams.”
          </p>
        </div>

        {/* Map Canvas Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-[#121326]/85 border-2 border-indigo-500/30 backdrop-blur-md shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
          {/* Subtle Constellation Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none film-grain" />

          {/* SVG Glowing Path connecting the stops */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#ec4899" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Glowing connecting dashed line */}
            <path
              d="M 150 375 Q 235 200, 320 200 T 500 325 T 680 175 T 820 300 T 930 125"
              fill="none"
              stroke="url(#mapGradient)"
              strokeWidth="4"
              strokeDasharray="8 8"
              className="animate-pulse"
            />
          </svg>

          {/* Interactive Stops on Map */}
          <div className="relative w-full h-[280px] sm:h-[320px]">
            {BIRTHDAY_CONFIG.mapPoints.map((pt, idx) => {
              const isSelected = selectedPoint.id === pt.id;
              return (
                <div
                  key={pt.id}
                  style={{
                    left: `${pt.x}%`,
                    top: `${pt.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <button
                    onClick={() => handleSelectPoint(pt)}
                    className="relative flex flex-col items-center cursor-pointer focus:outline-none"
                    aria-label={`Select ${pt.name}`}
                  >
                    {/* Ring ping */}
                    <span
                      className={`absolute -inset-2 rounded-full opacity-60 animate-ping ${
                        isSelected ? "bg-amber-400" : "bg-rose-400 opacity-20"
                      }`}
                    />

                    {/* Point Icon */}
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs shadow-xl transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-r from-amber-400 to-rose-400 text-zinc-950 scale-125 ring-4 ring-rose-400/50"
                          : "bg-[#1f2038] text-amber-200 border border-indigo-400/40 hover:scale-115 hover:border-amber-400"
                      }`}
                    >
                      {idx + 1}
                    </div>

                    {/* Name Pill label */}
                    <span
                      className={`mt-2 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-serif whitespace-nowrap transition-colors ${
                        isSelected
                          ? "bg-amber-300 text-zinc-950 font-bold shadow-md"
                          : "bg-black/60 text-zinc-300 border border-white/10 group-hover:text-amber-200"
                      }`}
                    >
                      {pt.name}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Active Location Detail Panel */}
          <div className="relative z-30 pt-4 border-t border-indigo-500/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPoint.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#191a33]/90 border border-indigo-400/30"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold">
                      {selectedPoint.badge}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-100">
                      {selectedPoint.name}: {selectedPoint.title}
                    </h3>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed max-w-2xl">
                    {selectedPoint.description}
                  </p>
                </div>

                <div className="border-l-2 border-rose-400/40 pl-4 py-1 shrink-0">
                  <p className="text-rose-300 font-serif italic text-sm">
                    {selectedPoint.quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
