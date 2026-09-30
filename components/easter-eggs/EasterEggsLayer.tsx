"use client";

import React, { useState } from "react";
import { sound } from "@/lib/sound";
import { Sparkles, Heart, Moon, Flower2, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface EggModal {
  title: string;
  icon: string;
  content: string;
  subContent?: string;
}

export function EasterEggsLayer() {
  const [activeEgg, setActiveEgg] = useState<EggModal | null>(null);
  const [discoveredCount, setDiscoveredCount] = useState<number>(0);
  const [foundSet, setFoundSet] = useState<Set<string>>(new Set());

  const triggerEgg = (id: string, egg: EggModal) => {
    sound.playTwinkle();
    setActiveEgg(egg);
    if (!foundSet.has(id)) {
      const nextSet = new Set(foundSet);
      nextSet.add(id);
      setFoundSet(nextSet);
      setDiscoveredCount(nextSet.size);
    }
  };

  return (
    <>
      {/* 1. Floating Easter Egg: Twinkling Wishing Star */}
      <button
        onClick={() =>
          triggerEgg("star", {
            title: "You caught a wishing star! ⭐",
            icon: "⭐",
            content: "Sakshi's secret wish: 'May Arti always find a reason to smile, even on cloudy days, and may our laughter never grow quiet.'",
            subContent: "Childhood secret: Remember how we used to count the first 3 stars from the village roof?",
          })
        }
        className="fixed top-24 right-8 z-30 group cursor-pointer focus:outline-none"
        title="A mysterious twinkling star..."
        aria-label="Twinkling star easter egg"
      >
        <span className="relative flex h-7 w-7 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-40"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.9)] items-center justify-center text-[10px] text-amber-900 group-hover:scale-125 transition-transform">
            ✦
          </span>
        </span>
      </button>

      {/* 2. Floating Easter Egg: Dancing Village Butterfly */}
      <button
        onClick={() =>
          triggerEgg("butterfly", {
            title: "A Golden Butterfly Visited! 🦋",
            icon: "🦋",
            content: "“Butterflies don't know the color of their wings, but we see how beautiful they are. That's you, Arti — you brighten everyone's world without even trying.”",
            subContent: "Village memory: Running behind yellow butterflies along the mustard field edges.",
          })
        }
        className="fixed top-1/3 left-6 z-30 group cursor-pointer focus:outline-none animate-bounce"
        style={{ animationDuration: "4s" }}
        title="A fluttering butterfly..."
        aria-label="Butterfly easter egg"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-400/40 text-lg shadow-[0_0_12px_rgba(244,114,182,0.6)] group-hover:scale-125 transition-transform">
          🦋
        </span>
      </button>

      {/* 3. Floating Easter Egg: Scented Marigold Flower */}
      <button
        onClick={() =>
          triggerEgg("flower", {
            title: "Fragrant Genda Phool 🌼",
            icon: "🌼",
            content: "“Some memories carry the scent of rain on dry mud, hot samosas, and marigolds from the temple gate. Every time I smell these, I think of you, Aaru.”",
            subContent: "A flower picked just for the birthday girl.",
          })
        }
        className="fixed bottom-24 left-8 z-30 group cursor-pointer focus:outline-none"
        title="A blooming flower..."
        aria-label="Flower easter egg"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/40 text-lg shadow-[0_0_12px_rgba(245,158,11,0.6)] group-hover:scale-125 transition-transform animate-spin" style={{ animationDuration: "16s" }}>
          🌼
        </span>
      </button>

      {/* 4. Floating Easter Egg: Gentle Crescent Moon */}
      <button
        onClick={() =>
          triggerEgg("moon", {
            title: "The Village Moon 🌙",
            icon: "🌙",
            content: "“Even when we are in different places looking up at the night sky, we are looking at the exact same moon. You are never far away from me.”",
            subContent: "Love to the moon and back — Sakshi",
          })
        }
        className="fixed top-48 right-16 z-30 group cursor-pointer focus:outline-none"
        title="The crescent moon..."
        aria-label="Moon easter egg"
      >
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-300/40 text-indigo-200 shadow-[0_0_12px_rgba(165,180,252,0.6)] group-hover:scale-125 transition-transform">
          <Moon size={14} className="fill-indigo-300" />
        </span>
      </button>

      {/* Discovery Counter Badge */}
      {discoveredCount > 0 && (
        <div className="fixed bottom-5 left-5 z-40 bg-[#151728]/90 border border-amber-400/30 text-amber-200 text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 animate-fade-in">
          <Sparkles size={12} className="text-amber-400" />
          <span>Found {discoveredCount} of 4 hidden memories!</span>
        </div>
      )}

      {/* Modal Dialog for Revealed Secret */}
      <AnimatePresence>
        {activeEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveEgg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-[#18192e] border-2 border-amber-300/40 rounded-3xl p-7 shadow-2xl overflow-hidden"
            >
              {/* Decorative top ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400"></div>

              <button
                onClick={() => setActiveEgg(null)}
                className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="text-center">
                <span className="text-4xl mb-3 inline-block animate-bounce">
                  {activeEgg.icon}
                </span>
                <h3 className="font-serif text-2xl text-amber-200 mb-3 font-semibold">
                  {activeEgg.title}
                </h3>
                <p className="text-rose-100/90 leading-relaxed font-serif italic text-base mb-4">
                  {activeEgg.content}
                </p>
                {activeEgg.subContent && (
                  <p className="text-xs text-amber-300/80 font-handwriting text-lg border-t border-white/10 pt-3">
                    {activeEgg.subContent}
                  </p>
                )}
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setActiveEgg(null)}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white text-sm font-medium shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  Keep Exploring ❤️
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
