"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { GalleryItem } from "@/config/birthday";
import { X, MapPin, Calendar, Heart, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function LightboxModal({ item, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-[#15162a] border border-amber-400/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>

          {/* Large Image View */}
          <div className="relative aspect-[16/10] w-full bg-black">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Details Bar */}
          <div className="p-6 bg-[#181932] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 mt-1">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 text-xs text-rose-300">
                <span className="flex items-center gap-1">
                  <MapPin size={13} />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {item.date}
                </span>
              </div>
            </div>

            <p className="text-zinc-200 text-sm sm:text-base font-serif italic leading-relaxed">
              “{item.caption}”
            </p>

            <div className="flex items-center justify-between text-xs text-rose-400 font-handwriting text-lg pt-1">
              <span>Sakshi &amp; Arti Memories</span>
              <Heart size={16} className="fill-rose-500 text-rose-500" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
