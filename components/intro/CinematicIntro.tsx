"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/sound";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { Sparkles, Gift, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicIntroProps {
  onOpenGift: () => void;
}

export function CinematicIntro({ onOpenGift }: CinematicIntroProps) {
  const [step, setStep] = useState<number>(0);
  const [isDismissing, setIsDismissing] = useState<boolean>(false);

  useEffect(() => {
    // Step progression sequence
    const t1 = setTimeout(() => setStep(1), 800);   // "Someone has been secretly preparing..."
    const t2 = setTimeout(() => setStep(2), 3200);  // "Arti Singh"
    const t3 = setTimeout(() => setStep(3), 5600);  // "This little world was created just for you."
    const t4 = setTimeout(() => setStep(4), 8000);  // "From Sakshi Singh ❤️" + Button

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleOpen = () => {
    sound.playConfetti();
    sound.startMusic();
    setIsDismissing(true);
    setTimeout(() => {
      onOpenGift();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isDismissing && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070810] text-[#f7eee4] overflow-hidden select-none px-6"
        >
          {/* Subtle starry background galaxy */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-amber-100"
                style={{
                  top: `${(i * 29) % 98}%`,
                  left: `${(i * 17) % 96}%`,
                  width: `${1 + (i % 3)}px`,
                  height: `${1 + (i % 3)}px`,
                  opacity: 0.2 + (i % 5) * 0.15,
                  animation: `pulseGlow ${3 + (i % 4)}s ease-in-out infinite ${(i % 3)}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-2xl w-full text-center space-y-8 flex flex-col items-center">
            {/* Step 1: Teaser */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-amber-200/80 font-serif italic text-lg sm:text-xl tracking-wide"
            >
              “Someone has been secretly preparing something for you…”
            </motion.p>

            {/* Step 2: Birthday Girl's Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={step >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="relative py-2"
            >
              <h1 className="text-5xl sm:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-amber-100 drop-shadow-[0_0_25px_rgba(251,191,36,0.35)]">
                {BIRTHDAY_CONFIG.birthdayGirl.fullName}
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={step >= 2 ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mt-3"
              />
            </motion.div>

            {/* Step 3: Little World statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={step >= 3 ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-rose-100/90 text-xl sm:text-2xl font-serif font-light leading-relaxed max-w-lg"
            >
              This little world was created just for you.
            </motion.p>

            {/* Step 4: From Sakshi Singh & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={step >= 4 ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6 pt-4 flex flex-col items-center"
            >
              <div className="flex items-center gap-2 text-rose-300 font-handwriting text-2xl sm:text-3xl">
                <span>From</span>
                <span className="font-semibold text-amber-200">{BIRTHDAY_CONFIG.sender.fullName}</span>
                <Heart size={20} className="fill-rose-500 text-rose-500 inline animate-pulse" />
              </div>

              {/* Animated Gift Button */}
              <button
                onClick={handleOpen}
                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full text-base sm:text-lg font-serif font-medium text-amber-950 bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 shadow-[0_0_35px_rgba(251,191,36,0.5)] hover:shadow-[0_0_55px_rgba(244,114,182,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Glow ring */}
                <span className="absolute inset-0 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></span>

                <Gift className="w-5 h-5 text-amber-900 group-hover:rotate-12 transition-transform duration-300" />
                <span className="tracking-wide">Open Your Birthday Gift</span>
                <Sparkles className="w-5 h-5 text-amber-900 animate-spin" style={{ animationDuration: "6s" }} />
              </button>

              <p className="text-xs text-rose-200/50 font-light tracking-widest uppercase">
                Turn on your volume for the best experience 🎵
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
