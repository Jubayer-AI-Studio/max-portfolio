import { Howl } from 'howler';

export default class Sounds {
  constructor() {
    this.muted = false;

    // Existing sound effects
    this.whoosh = new Howl({ src: ['./sounds/whoosh.mp3'], volume: 0.6 });
    this.click = new Howl({ src: ['./sounds/click.mp3'], volume: 0.5 });
    this.bloop = new Howl({ src: ['./sounds/bloop.mp3'], volume: 0.4 });

    // Web Audio Context for synthesized high-fidelity automotive SFX
    this.audioCtx = null;
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playWhoosh() {
    if (!this.muted) this.whoosh.play();
  }

  playClick() {
    if (!this.muted) this.click.play();
  }

  playBloop() {
    if (!this.muted) this.bloop.play();
  }

  // Realistic Car Door Open Sound: mechanical latch release + soft air release
  playDoorOpen() {
    if (this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Initial metallic click (latch release)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(820, now);
    osc1.frequency.exponentialRampToValueAtTime(320, now + 0.06);
    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.08);

    // 2. Secondary mechanical click
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(450, now + 0.04);
    osc2.frequency.exponentialRampToValueAtTime(180, now + 0.12);
    gain2.gain.setValueAtTime(0.25, now + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.04);
    osc2.stop(now + 0.14);

    // 3. Smooth pneumatic swing whoosh
    this.playWhoosh();
  }

  // Realistic Car Door Close Sound: Heavy luxury automotive solid THUD + latch click
  playDoorClose() {
    if (this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Heavy low-frequency cabin air thud
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(95, now);
    subOsc.frequency.exponentialRampToValueAtTime(38, now + 0.18);
    subGain.gain.setValueAtTime(0.65, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    subOsc.connect(subGain);
    subGain.connect(ctx.destination);
    subOsc.start(now);
    subOsc.stop(now + 0.22);

    // 2. Tight metallic door striker click
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    clickOsc.type = 'sawtooth';
    clickOsc.frequency.setValueAtTime(540, now);
    clickOsc.frequency.exponentialRampToValueAtTime(140, now + 0.05);
    clickGain.gain.setValueAtTime(0.35, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    clickOsc.connect(clickGain);
    clickGain.connect(ctx.destination);
    clickOsc.start(now);
    clickOsc.stop(now + 0.06);
  }

  // Powerful V8 Engine Revving Sound
  playEngineRev() {
    if (this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 1.4;

    // V8 low rumble fundamental
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(65, now);
    osc.frequency.exponentialRampToValueAtTime(190, now + 0.6); // Throttle spike
    osc.frequency.exponentialRampToValueAtTime(80, now + duration); // Settle down

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, now);
    filter.frequency.exponentialRampToValueAtTime(750, now + 0.6);
    filter.frequency.exponentialRampToValueAtTime(300, now + duration);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.45, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Realistic tire friction screech
  playTireScreech() {
    if (this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const bufferSize = ctx.sampleRate * 0.8;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.frequency.exponentialRampToValueAtTime(3100, now + 0.3);
    filter.frequency.exponentialRampToValueAtTime(1800, now + 0.8);
    filter.Q.value = 5.0;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.8);
  }

  // Dramatic All-Parts Open Sound: Multiple pneumatic release latches + whoosh
  playExplodeOpen() {
    if (this.muted) return;
    this.playWhoosh();
    this.playDoorOpen();
    setTimeout(() => {
      if (!this.muted) this.playClick();
    }, 180);
    setTimeout(() => {
      if (!this.muted) this.playClick();
    }, 360);
  }

  // Heavy All-Parts Close Sound: Multiple mechanical striker latches + solid cabin seal
  playExplodeClose() {
    if (this.muted) return;
    this.playClick();
    setTimeout(() => {
      if (!this.muted) this.playDoorClose();
    }, 200);
    setTimeout(() => {
      if (!this.muted) this.playClick();
    }, 450);
  }

  // Tactile Mechanical Keyboard Click SFX for Virtual PC
  playMechanicalKey() {
    if (this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx) {
      this.playClick();
      return;
    }
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200 + Math.random() * 400, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.035);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }
}
