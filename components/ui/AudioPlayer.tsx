"use client";

import React, { useState, useEffect } from "react";
import { sound } from "@/lib/sound";
import { Volume2, VolumeX, Music, Play, Pause } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIsPlaying(sound.getIsPlaying());
      setIsMuted(sound.getIsMuted());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const handleTogglePlay = () => {
    const active = sound.toggleMusic();
    setIsPlaying(active);
  };

  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#171626]/85 backdrop-blur-md border border-rose-400/30 px-3.5 py-2 rounded-full shadow-2xl transition-all duration-300 hover:border-rose-400/60 hover:scale-105">
      <button
        onClick={handleTogglePlay}
        className="flex items-center gap-2 text-xs font-medium text-rose-200 hover:text-white transition-colors cursor-pointer"
        title={isPlaying ? "Pause Music" : "Play Birthday Music Box"}
        aria-label="Play or pause music"
      >
        <span className="p-1.5 rounded-full bg-rose-500/20 text-rose-300">
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </span>
        <span className="hidden sm:inline">
          {isPlaying ? "Birthday Music Box" : "Play Music"}
        </span>
      </button>

      {/* Animated Sound Wave Bars when playing */}
      {isPlaying && !isMuted && (
        <div className="flex items-end gap-0.5 h-3 px-1">
          <span className="w-0.5 bg-rose-400 animate-pulse h-3"></span>
          <span className="w-0.5 bg-amber-400 animate-pulse h-2 delay-75"></span>
          <span className="w-0.5 bg-pink-400 animate-pulse h-4 delay-150"></span>
          <span className="w-0.5 bg-rose-300 animate-pulse h-1.5 delay-200"></span>
        </div>
      )}

      <div className="h-4 w-[1px] bg-rose-500/20 mx-1"></div>

      <button
        onClick={handleToggleMute}
        className="p-1.5 rounded-full text-rose-300/80 hover:text-rose-200 hover:bg-rose-500/20 transition-all cursor-pointer"
        title={isMuted ? "Unmute" : "Mute"}
        aria-label="Mute or unmute sound"
      >
        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>
    </div>
  );
}
