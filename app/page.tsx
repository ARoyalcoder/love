"use client";

import React, { useState } from "react";
import { CinematicIntro } from "@/components/intro/CinematicIntro";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { EasterEggsLayer } from "@/components/easter-eggs/EasterEggsLayer";
import { NavigationPill } from "@/components/ui/NavigationPill";
import { HeroBirthday } from "@/components/hero/HeroBirthday";
import { RealMemoriesSpotlight } from "@/components/memories/RealMemoriesSpotlight";
import { BeforeWeGrewUp } from "@/components/memories/BeforeWeGrewUp";
import { VillageScene } from "@/components/memories/VillageScene";
import { ChildhoodTimeline } from "@/components/timeline/ChildhoodTimeline";
import { Scrapbook } from "@/components/memories/Scrapbook";
import { ThingsINeverSay } from "@/components/messages/ThingsINeverSay";
import { FriendshipMap } from "@/components/journey/FriendshipMap";
import { MovieSection } from "@/components/movie/MovieSection";
import { MemoryGallery } from "@/components/gallery/MemoryGallery";
import { OpenWhenEnvelopes } from "@/components/messages/OpenWhenEnvelopes";
import { SecretMessage } from "@/components/messages/SecretMessage";
import { FinalCinematicScene } from "@/components/final/FinalCinematicScene";

export default function BirthdayPage() {
  const [hasOpenedGift, setHasOpenedGift] = useState<boolean>(false);

  return (
    <main className="relative min-h-screen bg-[#070812] text-[#f7eee4] selection:bg-rose-500/30 selection:text-rose-200">
      {/* 1. Cinematic Opening Experience */}
      {!hasOpenedGift && (
        <CinematicIntro onOpenGift={() => setHasOpenedGift(true)} />
      )}

      {/* 2. Ambient Particles & Hidden Easter Eggs */}
      <FloatingParticles />
      <EasterEggsLayer />

      {/* 3. Audio & Navigation Controls */}
      <AudioPlayer />
      {hasOpenedGift && <NavigationPill />}

      {/* 4. Main Journey Sections */}
      <div className={`transition-opacity duration-1000 ${hasOpenedGift ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* Section 1: Hero Birthday & Interactive Cake */}
        <div id="hero">
          <HeroBirthday />
        </div>

        {/* Section 1.5: Hamaar Asli Yaari (Arti & Sakshi Real Photos & Bhojpuri Spotlight) */}
        <div id="real-memories">
          <RealMemoriesSpotlight />
        </div>

        {/* Section 2: Before We Grew Up (Indian Village Courtyard) */}
        <BeforeWeGrewUp />

        {/* Section 3: Village Golden Hour Cinematic Memory */}
        <VillageScene />

        {/* Section 4: Childhood Memory Timeline (6 Chapters) */}
        <ChildhoodTimeline />

        {/* Section 5: Memory Scrapbook (Interactive Polaroids & Diary Notes) */}
        <Scrapbook />

        {/* Section 6: Things I May Not Say Enough (Emotional Messages) */}
        <ThingsINeverSay />

        {/* Section 7: Interactive Friendship Map (Glowing Constellation Path) */}
        <FriendshipMap />

        {/* Section 8: If Our Friendship Were a Movie */}
        <MovieSection />

        {/* Section 9: Memory Gallery (Little Pieces of Us + Lightbox) */}
        <MemoryGallery />

        {/* Section 10: "Open When..." Interactive Envelopes */}
        <OpenWhenEnvelopes />

        {/* Section 11: Secret Message (Locked Wax Seal) */}
        <SecretMessage />

        {/* Section 12: Final Cinematic Scene (Sunset to Stars + Replay) */}
        <FinalCinematicScene />
      </div>
    </main>
  );
}
