"use client";

import React, { useState, useEffect } from "react";
import { BIRTHDAY_CONFIG } from "@/config/birthday";
import { Sparkles, Calendar, Heart, PartyPopper } from "lucide-react";

export function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPastOrToday: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPastOrToday: true,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(BIRTHDAY_CONFIG.birthdayDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      // If today is on or after the target birthday date (allowing 24h of birthday day)
      if (difference <= 0 || isNaN(difference)) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPastOrToday: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds, isPastOrToday: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-rose-950/40 via-purple-950/30 to-amber-950/40 border border-rose-400/30 backdrop-blur-md shadow-2xl text-center overflow-hidden">
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

        {timeLeft.isPastOrToday ? (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium">
              <PartyPopper size={16} className="text-amber-400" />
              <span>Today is The Grand Day!</span>
              <Sparkles size={14} className="text-amber-300" />
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-amber-200">
              Happy Birthday, {BIRTHDAY_CONFIG.birthdayGirl.firstName}! 🎂
            </h3>

            <p className="text-rose-100/90 font-serif italic text-base sm:text-lg max-w-xl mx-auto">
              “Today isn't about counting down anymore… Today is about celebrating YOU.”
            </p>

            <div className="flex items-center justify-center gap-2 text-rose-300 font-handwriting text-2xl pt-2">
              <span>With all my love</span>
              <Heart size={18} className="fill-rose-500 text-rose-500 inline" />
              <span>— {BIRTHDAY_CONFIG.sender.fullName}</span>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <p className="text-amber-300/80 font-serif italic text-sm sm:text-base">
              “Something special is waiting…”
            </p>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-rose-100">
              Counting Down To Arti&apos;s Birthday
            </h3>

            {/* Time boxes */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-md mx-auto pt-2">
              {[
                { label: "Days", val: timeLeft.days },
                { label: "Hours", val: timeLeft.hours },
                { label: "Minutes", val: timeLeft.minutes },
                { label: "Seconds", val: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#121323]/80 border border-rose-500/20 rounded-2xl p-3 flex flex-col items-center shadow-inner"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-300">
                    {String(item.val).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs text-rose-200/60 uppercase tracking-widest mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
