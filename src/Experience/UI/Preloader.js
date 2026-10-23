export default class Preloader {
  constructor(experience) {
    this.experience = experience;
    this.loaderElement = document.getElementById('loader');
    this.barElement = document.getElementById('loader-bar');
    this.statusElement = document.getElementById('loader-status');
    this.speedElement = document.getElementById('loader-speed');
    this.gearElement = document.getElementById('loader-gear');
    this.rpmElement = document.getElementById('loader-rpm');
    this.revBtn = document.getElementById('loader-rev-btn');
    this.quickBtn = document.getElementById('loader-quick-launch');

    this.items = {
      car: { loaded: 0, total: 6455952, ready: false }
    };

    this.totalBytes = this.items.car.total;
    this.targetProgress = 10;
    this.displayProgress = 0;
    this.soundPlayed = false;
    this.finished = false;

    // Show Quick Launch button after 3.5s if device network is slower
    this.quickLaunchTimer = setTimeout(() => {
      if (!this.finished && this.quickBtn) {
        this.quickBtn.style.display = 'inline-flex';
      }
    }, 3500);

    // Hard fallback: Never keep user waiting longer than 7.5 seconds
    this.fallbackTimer = setTimeout(() => {
      this.finish();
    }, 7500);

    // Bind interactive Rev Sound button
    if (this.revBtn) {
      this.revBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.tryPlayAudio(true);
      });
    }

    if (this.quickBtn) {
      this.quickBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.finish();
      });
    }

    // Window gesture listeners for Web Audio API unlock
    window.addEventListener('click', () => this.tryPlayAudio(), { once: true });
    window.addEventListener('touchstart', () => this.tryPlayAudio(), { once: true });

    // Start Smooth Display Animation Loop
    this.animateLoop();
  }

  tryPlayAudio(force = false) {
    if ((!this.soundPlayed || force) && this.experience.sounds) {
      this.soundPlayed = true;
      this.experience.sounds.playEngineRev();
    }
  }

  onProgress(itemKey, loaded, total) {
    if (this.items[itemKey]) {
      this.items[itemKey].loaded = loaded;
      if (total && total > 0) {
        this.items[itemKey].total = total;
        this.totalBytes = total;
      }
    }

    const currentLoaded = this.items.car.loaded;
    const currentTotal = this.totalBytes || 6455952;
    // Map network download to 10% - 95%
    const rawRatio = Math.min(currentLoaded / currentTotal, 1);
    this.targetProgress = Math.max(this.targetProgress, Math.round(10 + rawRatio * 85));

    // Play engine rev as speed passes 50%
    if (this.displayProgress > 45 && !this.soundPlayed) {
      this.tryPlayAudio();
    }
  }

  onItemLoaded(itemKey) {
    if (this.items[itemKey]) {
      this.items[itemKey].ready = true;
      this.items[itemKey].loaded = this.items[itemKey].total;
    }

    if (this.items.car.ready) {
      this.targetProgress = 100;
      setTimeout(() => {
        this.finish();
      }, 350);
    }
  }

  animateLoop() {
    if (this.finished) return;

    // Smooth lerp progress towards target
    const diff = this.targetProgress - this.displayProgress;
    const step = Math.max(diff * 0.12, 0.4);
    this.displayProgress = Math.min(this.displayProgress + step, this.targetProgress);

    const progInt = Math.min(Math.round(this.displayProgress), 100);

    // Update Progress Bar
    if (this.barElement) {
      this.barElement.style.width = `${this.displayProgress}%`;
    }

    // Update Live Speedometer (0 to 260 KM/H)
    const speed = Math.round((this.displayProgress / 100) * 260);
    if (this.speedElement) {
      this.speedElement.textContent = String(speed).padStart(3, '0');
    }

    // Update Gear
    if (this.gearElement) {
      if (progInt < 15) this.gearElement.textContent = '1';
      else if (progInt < 35) this.gearElement.textContent = '2';
      else if (progInt < 55) this.gearElement.textContent = '3';
      else if (progInt < 75) this.gearElement.textContent = '4';
      else if (progInt < 90) this.gearElement.textContent = '5';
      else if (progInt < 99) this.gearElement.textContent = '6';
      else this.gearElement.textContent = 'MAX';
    }

    // Update RPM (1.2K to 7.8K)
    if (this.rpmElement) {
      const rpm = (1.2 + (this.displayProgress / 100) * 6.6).toFixed(1);
      this.rpmElement.textContent = `${rpm}K`;
    }

    // Dynamic High-Energy Automotive Telemetry Status
    if (this.statusElement) {
      if (progInt < 25) {
        this.statusElement.textContent = `Igniting AMG V8 Biturbo Engine... ${progInt}%`;
      } else if (progInt < 50) {
        this.statusElement.textContent = `Calibrating 60 FPS Mobile GPU Shaders... ${progInt}%`;
      } else if (progInt < 75) {
        this.statusElement.textContent = `Accelerating Telemetry (${speed} KM/H)...`;
      } else if (progInt < 95) {
        this.statusElement.textContent = `Engaging Aerodynamics & Launch Control... ${progInt}%`;
      } else {
        this.statusElement.textContent = `Launch Control Ready • Welcome, Jubayer Ahmad`;
      }
    }

    requestAnimationFrame(() => this.animateLoop());
  }

  finish() {
    if (this.finished) return;
    this.finished = true;
    clearTimeout(this.fallbackTimer);
    clearTimeout(this.quickLaunchTimer);

    this.displayProgress = 100;
    if (this.barElement) this.barElement.style.width = '100%';
    if (this.speedElement) this.speedElement.textContent = '260';
    if (this.gearElement) this.gearElement.textContent = 'MAX';
    if (this.statusElement) {
      this.statusElement.textContent = 'Studio Online • Welcome, Jubayer Ahmad';
    }

    if (this.experience.sounds) {
      this.experience.sounds.playTireScreech();
    }

    setTimeout(() => {
      if (this.loaderElement) {
        this.loaderElement.classList.add('hidden');
      }
      if (this.experience.sounds) {
        this.experience.sounds.playWhoosh();
      }
    }, 450);
  }
}
