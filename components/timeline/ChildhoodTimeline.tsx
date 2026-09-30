"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BIRTHDAY_CONFIG, TimelineChapter } from "@/config/birthday";
import { sound } from "@/lib/sound";
import { Sparkles, Compass, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ChildhoodTimeline() {
  const [activeChapter, setActiveChapter] = useState<string>(BIRTHDAY_CONFIG.timelineChapters[0].id);

  const handleChapterClick = (ch: TimelineChapter) => {
    sound.playTwinkle();
    setActiveChapter(ch.id);
  };

  return (
    <section id="timeline" className="relative py-24 px-4 bg-[#0a0a14] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs tracking-widest uppercase">
            <Compass size={14} />
            <span>Chronicles of Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-peach-100">
            Childhood Memory Timeline
          </h2>

          <p className="text-rose-200/80 text-lg font-serif italic">
            “From barefoot playground games to life&apos;s greatest adventures…”
          </p>
        </div>

        {/* Timeline Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 no-scrollbar">
          {BIRTHDAY_CONFIG.timelineChapters.map((ch, idx) => {
            const isActive = activeChapter === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => handleChapterClick(ch)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs sm:text-sm font-serif transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-400 to-rose-400 text-zinc-950 font-bold shadow-lg shadow-rose-500/20 scale-105"
                    : "bg-[#18192d] text-rose-200/70 border border-white/5 hover:border-rose-400/40 hover:text-white"
                }`}
              >
                <span>{ch.chapterNumber}</span>
                {isActive && <Sparkles size={12} className="animate-spin" style={{ animationDuration: "5s" }} />}
              </button>
            );
          })}
        </div>

        {/* Vertical/Horizontal Chapter Cards Stack */}
        <div className="space-y-16">
          {BIRTHDAY_CONFIG.timelineChapters.map((ch, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12 bg-[#121325]/70 p-6 sm:p-8 rounded-3xl border border-rose-500/20 backdrop-blur-md shadow-2xl hover:border-amber-400/40 transition-colors`}
              >
                {/* Visual Image */}
                <div className="w-full lg:w-1/2 aspect-[16/10] relative rounded-2xl overflow-hidden shadow-2xl group border border-white/10">
                  <Image
                    src={ch.image}
                    alt={ch.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Tag badge on image */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-amber-200 text-xs font-medium">
                    {ch.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-rose-500/80 text-white text-xs font-medium font-serif">
                    {ch.yearHint}
                  </div>
                </div>

                {/* Narrative Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-serif font-bold text-sm tracking-wider uppercase">
                      {ch.chapterNumber}
                    </span>
                    <div className="h-[1px] w-12 bg-amber-400/40" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 leading-snug">
                    {ch.title}
                  </h3>

                  <h4 className="text-rose-300 font-serif italic text-base sm:text-lg">
                    {ch.subtitle}
                  </h4>

                  <p className="text-zinc-300 leading-relaxed font-light text-base">
                    {ch.description}
                  </p>

                  {ch.bhojpuriQuote && (
                    <div className="p-4 rounded-xl bg-amber-400/10 border-l-4 border-amber-400 space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-amber-300 font-mono font-semibold">
                        सखी के बोल (Bhojpuri):
                      </span>
                      <p className="text-amber-200 font-serif italic text-base sm:text-lg">
                        {ch.bhojpuriQuote}
                      </p>
                    </div>
                  )}

                  <div className="pt-2 flex items-center gap-2 text-rose-300/80 font-handwriting text-xl">
                    <Heart size={16} className="fill-rose-500 text-rose-500" />
                    <span>Always treasured by Sakshi</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
