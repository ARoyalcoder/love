"use client";

import React from "react";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { Heart, Sparkles, MessageCircleHeart } from "lucide-react";
import { motion } from "framer-motion";

export function ThingsINeverSay() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#0d0e1b] via-[#161226] to-[#0f0e1d] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs tracking-widest uppercase font-serif">
            <MessageCircleHeart size={14} className="text-rose-400" />
            <span>Unspoken Gratitude</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 gold-glow">
            Things I May Not Say Enough…
          </h2>

          <p className="text-rose-200/80 text-lg font-serif italic max-w-xl mx-auto">
            “Between busy schedules, everyday life, and unspoken feelings, here are the truths I hold in my heart for you, Arti.”
          </p>
        </div>

        {/* Revealed Messages Stack */}
        <div className="space-y-5">
          {BIRTHDAY_CONFIG.thingsINeverSay.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[#17182e]/80 border border-rose-400/20 backdrop-blur-md shadow-xl hover:border-amber-400/50 hover:bg-[#1a1b35] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-400/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <Heart size={18} className="text-rose-400 group-hover:fill-rose-400 transition-colors" />
                </div>

                <div className="space-y-2">
                  <p className="font-serif text-lg sm:text-2xl text-rose-100 font-light leading-relaxed group-hover:text-amber-200 transition-colors">
                    “{msg.english}”
                  </p>
                  <p className="font-serif italic text-base sm:text-lg text-amber-300/90 font-medium">
                    “{msg.bhojpuri}”
                  </p>
                  <span className="text-xs text-rose-400/70 font-handwriting text-xl block pt-1">
                    — तोहार साक्षी
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Sentiment */}
        <div className="text-center pt-4 space-y-2">
          <p className="font-handwriting text-2xl sm:text-4xl text-amber-200/90">
            “तू खाली हमार सहेली ना हउवे आरती... तू हमार परिवार हउवे!”
          </p>
          <p className="text-xs text-rose-300 font-serif uppercase tracking-widest">
            (You are not just my best friend, Arti… you are family.)
          </p>
        </div>
      </div>
    </section>
  );
}
