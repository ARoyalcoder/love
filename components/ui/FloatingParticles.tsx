"use client";

import React, { useMemo } from "react";

export function FloatingParticles() {
  // Generate random static values for smooth performance without hydration shifts
  const fireflies = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${(i * 17) % 96}%`,
      top: `${(i * 23) % 94}%`,
      size: `${2 + (i % 4)}px`,
      duration: `${5 + (i % 6)}s`,
      delay: `${(i % 5) * 0.8}s`,
    }));
  }, []);

  const petals = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${(i * 29) % 98}%`,
      duration: `${10 + (i % 8)}s`,
      delay: `${(i % 6) * 1.5}s`,
      size: `${12 + (i % 8)}px`,
      color: i % 2 === 0 ? "rgba(244, 114, 182, 0.45)" : "rgba(251, 191, 36, 0.35)",
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {/* Fireflies */}
      {fireflies.map((f) => (
        <span
          key={`firefly-${f.id}`}
          className="absolute rounded-full bg-amber-300 animate-firefly"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            boxShadow: "0 0 10px 2px rgba(251, 191, 36, 0.75)",
            animationDuration: f.duration,
            animationDelay: f.delay,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Falling flower petals */}
      {petals.map((p) => (
        <span
          key={`petal-${p.id}`}
          className="absolute rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: `${parseInt(p.size) * 1.4}px`,
            backgroundColor: p.color,
            borderRadius: "60% 40% 70% 30% / 40% 50% 60% 50%",
            animation: `petalFall ${p.duration} linear infinite`,
            animationDelay: p.delay,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
