"use client";

import React, { useState } from "react";
import { BIRTHDAY_CONFIG, OpenWhenLetter } from "@/config/birthday";
import { sound } from "@/lib/sound";
import { Mail, MailOpen, Sparkles, Heart, X, Smile, Sun, Clock, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function OpenWhenEnvelopes() {
  const [selectedLetter, setSelectedLetter] = useState<OpenWhenLetter | null>(null);

  const handleOpenEnvelope = (letter: OpenWhenLetter) => {
    sound.playPaperRustle();
    setSelectedLetter(letter);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sun":
        return <Sun size={18} className="text-amber-400" />;
      case "Clock":
        return <Clock size={18} className="text-orange-400" />;
      case "Smile":
        return <Smile size={18} className="text-yellow-400" />;
      case "HeartHandshake":
        return <HeartHandshake size={18} className="text-indigo-400" />;
      default:
        return <Sparkles size={18} className="text-rose-400" />;
    }
  };

  return (
    <section id="envelopes" className="relative py-24 px-4 bg-[#0a0a16] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs tracking-widest uppercase font-serif">
            <Mail size={14} className="text-amber-400" />
            <span>Sealed Letters</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 gold-glow">
            “Open When…” Envelopes
          </h2>

          <p className="text-rose-200/80 text-lg font-serif italic">
            “Words wrapped in paper, waiting for the moments you need them the most.”
          </p>
          <p className="text-xs text-amber-200/60 font-sans tracking-wide">
            Click any envelope to break the seal and read Sakshi&apos;s personal letter 💌
          </p>
        </div>

        {/* Envelopes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {BIRTHDAY_CONFIG.openWhenLetters.map((env) => (
            <motion.div
              key={env.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => handleOpenEnvelope(env)}
              className="group relative cursor-pointer rounded-3xl p-6 bg-gradient-to-b from-[#1b1c35] to-[#141529] border border-rose-400/30 shadow-xl hover:border-amber-400/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              {/* Envelope flap aesthetic header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(env.iconName)}
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/20 text-rose-300 text-xs font-serif">
                  <Mail size={12} />
                  <span>Click to Open</span>
                </div>
              </div>

              {/* Envelope Title */}
              <div className="py-4 space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                  {env.title}
                </h3>
                <p className="font-serif text-xs text-rose-300 font-medium">
                  {env.bhojpuriTitle}
                </p>
                <p className="text-rose-200/70 text-xs sm:text-sm font-light">
                  {env.subtitle}
                </p>
              </div>

              {/* Wax Seal Badge */}
              <div className="pt-2 flex items-center justify-between text-xs text-amber-300 font-handwriting text-lg border-t border-white/5">
                <span>With love, Sakshi</span>
                <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-700 to-rose-500 flex items-center justify-center text-[10px] text-white shadow-md font-bold">
                  S
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Opened Envelope Letter */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#fdfaf5] text-zinc-900 border-4 border-amber-300/80 rounded-3xl p-7 sm:p-9 shadow-2xl overflow-hidden paper-texture"
            >
              {/* Top Washi Tape */}
              <div className="polaroid-tape z-20"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 p-1.5 text-zinc-500 hover:text-zinc-900 rounded-full hover:bg-zinc-200/60 transition-colors cursor-pointer"
                aria-label="Close letter"
              >
                <X size={18} />
              </button>

              <div className="space-y-4 pt-2">
                <div className="border-b border-zinc-300 pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-rose-700 font-mono font-semibold">
                      Private Letter for Arti
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-zinc-900 mt-0.5">
                      {selectedLetter.title}
                    </h3>
                    {selectedLetter.bhojpuriTitle && (
                      <p className="font-serif italic text-sm text-rose-800 font-medium">
                        ({selectedLetter.bhojpuriTitle})
                      </p>
                    )}
                  </div>
                  <MailOpen className="w-6 h-6 text-rose-600" />
                </div>

                <p className="font-handwriting text-2xl sm:text-3xl text-zinc-800 leading-snug">
                  “{selectedLetter.message}”
                </p>

                <div className="p-3.5 rounded-xl bg-amber-100/70 border border-amber-300/60 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-amber-900 font-mono font-bold">
                    साक्षी के भोजपुरी संदेश:
                  </span>
                  <p className="font-serif italic text-base sm:text-lg text-amber-950 font-medium">
                    {selectedLetter.bhojpuriWhisper}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-zinc-300 text-rose-800 font-handwriting text-2xl">
                  <span>{selectedLetter.signature}</span>
                  <Heart size={20} className="fill-rose-600 text-rose-600 inline" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
