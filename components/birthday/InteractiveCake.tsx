"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";
import { Sparkles, Flame, RotateCcw, Heart, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function InteractiveCake() {
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [hasBlown, setHasBlown] = useState<boolean>(false);
  const [showFlash, setShowFlash] = useState<boolean>(false);

  const handleBlowCandles = () => {
    if (!candlesLit) return;

    sound.playCandleBlow();
    setCandlesLit(false);
    setHasBlown(true);

    // Screen brightness flash
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 500);

    // Mega Confetti Blast
    const end = Date.now() + 2.5 * 1000;
    const colors = ["#fbbf24", "#f43f5e", "#ec4899", "#a855f7", "#60a5fa", "#34d399"];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleRelight = () => {
    sound.playTwinkle();
    setCandlesLit(true);
    setHasBlown(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-6 select-none">
      {/* Screen Brightness Flash Effect */}
      {showFlash && (
        <div className="fixed inset-0 z-50 bg-amber-100/30 backdrop-blur-[2px] pointer-events-none transition-opacity duration-500"></div>
      )}

      {/* Main Cake Container */}
      <div
        onClick={candlesLit ? handleBlowCandles : undefined}
        className={`group relative flex flex-col items-center cursor-pointer transition-transform duration-300 ${
          candlesLit ? "hover:scale-105" : ""
        }`}
        title={candlesLit ? "Click cake to make a wish & blow candles!" : "Happy Birthday Arti!"}
      >
        {/* Glow halo behind cake */}
        <div
          className={`absolute -inset-8 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none ${
            candlesLit ? "bg-amber-400/25 opacity-100" : "bg-rose-500/15 opacity-60"
          }`}
        />

        {/* Candles Row */}
        <div className="flex items-end justify-center gap-4 sm:gap-6 mb-[-6px] z-10">
          {[1, 2, 3, 4, 5].map((c) => (
            <div key={c} className="flex flex-col items-center relative">
              {/* Flame */}
              <AnimatePresence>
                {candlesLit ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.15, 0.95, 1.1, 1] }}
                    exit={{ opacity: 0, y: -10, scale: 0.2 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2 + (c % 3) * 0.2,
                      ease: "easeInOut",
                    }}
                    className="relative flex items-center justify-center w-5 h-8 -mb-1"
                  >
                    <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white shadow-[0_0_14px_rgba(251,191,36,0.95)]" />
                    <div className="absolute w-1.5 h-3 rounded-full bg-blue-400/60 top-2 blur-[1px]" />
                  </motion.div>
                ) : (
                  /* Soft smoke wisp */
                  <motion.div
                    initial={{ opacity: 0.8, y: 0 }}
                    animate={{ opacity: 0, y: -25, x: (c % 2 === 0 ? 5 : -5) }}
                    transition={{ duration: 1.5 }}
                    className="w-1.5 h-6 bg-zinc-400/50 rounded-full blur-[1px] -mb-1"
                  />
                )}
              </AnimatePresence>

              {/* Candle Wick */}
              <div className="w-0.5 h-2 bg-zinc-800" />

              {/* Candle Body */}
              <div
                className="w-3.5 h-12 rounded-t-sm shadow-md"
                style={{
                  background:
                    c % 2 === 0
                      ? "linear-gradient(to right, #f472b6, #fb7185)"
                      : "linear-gradient(to right, #fcd34d, #fbbf24)",
                }}
              >
                {/* Spiral stripes */}
                <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,white_3px,white_6px)]" />
              </div>
            </div>
          ))}
        </div>

        {/* Cake Tier 1 (Top Tier) */}
        <div className="relative w-48 sm:w-60 h-16 rounded-t-3xl bg-gradient-to-b from-rose-200 via-rose-100 to-amber-50 border-t-4 border-rose-300/80 shadow-lg flex items-center justify-center overflow-hidden">
          {/* Dripping frosting effect */}
          <div className="absolute top-0 inset-x-0 flex justify-around text-rose-300/70 text-sm">
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
          {/* Name banner on cake */}
          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/50 text-rose-950 font-serif font-bold text-xs tracking-wider uppercase shadow-sm">
            <span>Arti Singh</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span className="text-rose-900 font-extrabold text-sm">20</span>
          </div>
        </div>

        {/* Cake Tier 2 (Base Tier) */}
        <div className="relative w-60 sm:w-76 h-20 rounded-t-2xl bg-gradient-to-b from-amber-50 via-peach-100 to-rose-200 border-t-4 border-amber-300/80 shadow-2xl flex flex-col items-center justify-center">
          {/* Decorative sugar pearls */}
          <div className="absolute bottom-2 inset-x-4 flex justify-between text-amber-500/80 text-xs">
            <span>✦</span>
            <span>🌸</span>
            <span>✦</span>
            <span>🎂</span>
            <span>✦</span>
            <span>🌸</span>
            <span>✦</span>
          </div>
          <p className="font-handwriting text-2xl text-rose-900 font-bold tracking-wide">
            20 Years of Radiance
          </p>
          <p className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
            01 / 10 / 2006 — 01 / 10 / 2026
          </p>
        </div>

        {/* Cake Stand Plate */}
        <div className="w-64 sm:w-80 h-4 rounded-full bg-gradient-to-r from-amber-200 via-white to-amber-200 border border-amber-300 shadow-xl -mt-1" />
        <div className="w-24 h-5 bg-gradient-to-b from-amber-200 to-amber-300 rounded-b-lg shadow-md" />
      </div>

      {/* Interactive Controls & Wish Message */}
      <div className="mt-6 flex flex-col items-center text-center max-w-md px-4">
        {candlesLit ? (
          <button
            onClick={handleBlowCandles}
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-500/20 border border-rose-400/50 hover:bg-rose-500/30 text-rose-200 font-serif text-sm tracking-wide shadow-lg hover:shadow-rose-500/20 transition-all cursor-pointer animate-pulse"
          >
            <Flame className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>Click to Make a Wish & Blow Candles</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-2xl bg-[#1d1b30]/90 border border-amber-400/40 shadow-xl backdrop-blur-md">
              <h4 className="font-serif text-2xl font-bold text-amber-300 mb-1">
                “Make a wish, Arti.” ✨
              </h4>
              <p className="text-rose-100 font-serif italic text-base leading-relaxed">
                “May this year bring you countless reasons to smile, endless warmth in your heart, and every dream you whisper to the stars.”
              </p>
              <p className="font-handwriting text-amber-300/90 text-lg mt-2">
                — Your biggest cheerleader, Sakshi ❤️
              </p>
            </div>

            <button
              onClick={handleRelight}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 text-xs transition-colors cursor-pointer"
            >
              <RotateCcw size={12} />
              <span>Relight Candles</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
