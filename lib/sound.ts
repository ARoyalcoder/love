// Web Audio API Synthesizer for rich, zero-dependency, reliable audio experience

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPlayingMusic: boolean = false;
  private musicInterval: number | null = null;
  private masterGain: GainNode | null = null;
  private noteIndex: number = 0;

  // Nostalgic, heartwarming pentatonic music box notes (Happy Birthday + nostalgic Indian melody feeling)
  private melody: { freq: number; dur: number }[] = [
    { freq: 261.63, dur: 0.4 }, // C4
    { freq: 261.63, dur: 0.4 }, // C4
    { freq: 293.66, dur: 0.8 }, // D4
    { freq: 261.63, dur: 0.8 }, // C4
    { freq: 349.23, dur: 0.8 }, // F4
    { freq: 329.63, dur: 1.2 }, // E4

    { freq: 261.63, dur: 0.4 }, // C4
    { freq: 261.63, dur: 0.4 }, // C4
    { freq: 293.66, dur: 0.8 }, // D4
    { freq: 261.63, dur: 0.8 }, // C4
    { freq: 392.0, dur: 0.8 }, // G4
    { freq: 349.23, dur: 1.2 }, // F4

    { freq: 261.63, dur: 0.4 }, // C4
    { freq: 261.63, dur: 0.4 }, // C4
    { freq: 523.25, dur: 0.8 }, // C5
    { freq: 440.0, dur: 0.8 }, // A4
    { freq: 349.23, dur: 0.8 }, // F4
    { freq: 329.63, dur: 0.8 }, // E4
    { freq: 293.66, dur: 1.2 }, // D4

    { freq: 466.16, dur: 0.4 }, // Bb4
    { freq: 466.16, dur: 0.4 }, // Bb4
    { freq: 440.0, dur: 0.8 }, // A4
    { freq: 349.23, dur: 0.8 }, // F4
    { freq: 392.0, dur: 0.8 }, // G4
    { freq: 349.23, dur: 1.5 }, // F4

    // Nostalgic village flute / music box intermission
    { freq: 329.63, dur: 0.6 },
    { freq: 293.66, dur: 0.6 },
    { freq: 261.63, dur: 0.6 },
    { freq: 220.0, dur: 0.8 },
    { freq: 261.63, dur: 1.2 },
    { freq: 329.63, dur: 0.8 },
    { freq: 392.0, dur: 1.4 },
  ];

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Play a soft, bell-like music box chime
  private playMusicBoxNote(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Warm sine wave with subtle triangle harmonic for chime feel
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.18, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.8);

    osc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.9);
  }

  public startMusic() {
    this.initCtx();
    if (this.isPlayingMusic) return;
    this.isPlayingMusic = true;

    this.noteIndex = 0;
    const playNext = () => {
      if (!this.isPlayingMusic) return;
      const note = this.melody[this.noteIndex];
      this.playMusicBoxNote(note.freq, note.dur);

      const delay = note.dur * 600 + 100;
      this.noteIndex = (this.noteIndex + 1) % this.melody.length;
      this.musicInterval = window.setTimeout(playNext, delay);
    };

    playNext();
  }

  public stopMusic() {
    this.isPlayingMusic = false;
    if (this.musicInterval) {
      clearTimeout(this.musicInterval);
      this.musicInterval = null;
    }
  }

  public toggleMusic(): boolean {
    if (this.isPlayingMusic) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(
        this.isMuted ? 0 : 0.3,
        this.ctx.currentTime
      );
    }
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isPlayingMusic;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Sound effect: Twinkle / Star Easter Egg
  public playTwinkle() {
    this.initCtx();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;

    notes.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0, now + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.45);
    });
  }

  // Sound effect: Blowing candles out (soft wind + harp flourish)
  public playCandleBlow() {
    this.initCtx();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;

    // Breath / wind noise buffer
    const bufferSize = this.ctx.sampleRate * 0.8;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter to make it sound like a soft breath
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(200, now + 0.7);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, now);
    noiseGain.gain.linearRampToValueAtTime(0.2, now + 0.2);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + 0.75);

    // Magical chime afterwards
    setTimeout(() => {
      this.playTwinkle();
    }, 400);
  }

  // Sound effect: Confetti celebration pop
  public playConfetti() {
    this.initCtx();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.2);

    setTimeout(() => {
      this.playTwinkle();
    }, 150);
  }

  // Sound effect: Paper rustle / envelope open
  public playPaperRustle() {
    this.initCtx();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(2200, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + 0.3);
  }
}

export const sound = new SoundEngine();
