"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/sound";
import { Cake, Sparkles, BookOpen, Map, Mail, Film, Images, Key, Heart } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Birthday", icon: Cake },
  { id: "real-memories", label: "हमर यारी", icon: Heart },
  { id: "before-we-grew-up", label: "Village", icon: Sparkles },
  { id: "timeline", label: "Timeline", icon: BookOpen },
  { id: "scrapbook", label: "Scrapbook", icon: Heart },
  { id: "map", label: "Map", icon: Map },
  { id: "movie", label: "Movie", icon: Film },
  { id: "gallery", label: "Gallery", icon: Images },
  { id: "envelopes", label: "Letters", icon: Mail },
  { id: "secret", label: "Secret", icon: Key },
];

export function NavigationPill() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollTo = (id: string) => {
    sound.playTwinkle();
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav aria-label="Quick section navigation" className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-1 bg-[#15162a]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-rose-400/25 shadow-2xl">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif text-rose-200/75 hover:text-white hover:bg-rose-500/20 transition-all cursor-pointer"
          >
            <Icon size={12} className="text-amber-300" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
