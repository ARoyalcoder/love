"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { sound } from "@/lib/sound";
import { Lock, Unlock, Key, Sparkles, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SecretMessage() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);

  const handleUnlock = () => {
    sound.playTwinkle();
    sound.playConfetti();
    setIsUnlocked(true);
  };

  return (
    <section id="secret" className="relative py-24 px-4 bg-[#090a14] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs tracking-widest uppercase font-serif">
            <Key size={14} className="text-amber-400" />
            <span>Classified Confidential</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 gold-glow">
            {BIRTHDAY_CONFIG.secretMessage.teaser}
          </h2>

          <p className="text-rose-200/80 text-lg font-serif italic">
            “A sealed envelope kept locked until this exact moment.”
          </p>
        </div>

        {/* Locked Envelope Showcase */}
        <div className="relative rounded-3xl overflow-hidden bg-[#131427] border-2 border-amber-400/30 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Sealed Envelope */}
            <div className="md:col-span-6 relative aspect-[16/10] sm:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
              <Image
                src="/images/secret-envelope.jpg"
                alt="Sealed vintage wax envelope on wooden table with pink rose petals"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {!isUnlocked ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
                  <div className="w-14 h-14 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-xl animate-pulse">
                    <Lock size={26} />
                  </div>
                  <span className="text-xs text-amber-200 font-mono tracking-widest uppercase mt-3 bg-black/60 px-3 py-1 rounded-full">
                    Sealed With Love
                  </span>
                </div>
              ) : (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-serif flex items-center gap-1">
                  <Unlock size={12} />
                  <span>Seal Broken</span>
                </div>
              )}
            </div>

            {/* Content & Action Area */}
            <div className="md:col-span-6 space-y-6">
              {!isUnlocked ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-amber-100">
                      Sakshi&apos;s Deepest Wish For You
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed font-light">
                      This note was written late at night while thinking about everything we have shared. It is locked with a wax seal that only Arti can open.
                    </p>
                  </div>

                  <button
                    onClick={handleUnlock}
                    className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-base font-serif font-medium text-amber-950 bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_45px_rgba(244,114,182,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <Unlock size={18} className="text-amber-950 group-hover:rotate-12 transition-transform" />
                    <span>Unlock the Secret</span>
                    <Sparkles size={16} className="text-amber-950 animate-spin" style={{ animationDuration: "5s" }} />
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-5"
                >
                  <div className="p-6 rounded-2xl bg-[#1b1c36] border border-amber-300/40 shadow-inner space-y-4">
                    <p className="font-serif text-lg sm:text-xl text-zinc-200 font-light leading-relaxed italic">
                      “{BIRTHDAY_CONFIG.secretMessage.message}”
                    </p>

                    <div className="p-4 rounded-xl bg-amber-400/10 border-l-4 border-amber-400">
                      <p className="font-serif text-lg sm:text-2xl text-amber-200 font-medium leading-relaxed italic">
                        {BIRTHDAY_CONFIG.secretMessage.bhojpuriMessage}
                      </p>
                    </div>

                    <div className="h-[1px] bg-gradient-to-r from-transparent via-rose-400 to-transparent my-3" />

                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-rose-300">
                      {BIRTHDAY_CONFIG.secretMessage.closingWish}
                    </h4>

                    <p className="font-handwriting text-2xl text-amber-300 text-right">
                      {BIRTHDAY_CONFIG.secretMessage.signOff}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-rose-300 text-xs font-serif italic">
                    <Heart size={14} className="fill-rose-500 text-rose-500" />
                    <span>A forever promise written in stone</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
