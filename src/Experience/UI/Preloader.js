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

    this.carReady = false;
    this.finished = false;
    this.startTime = performance.now();
    this.currentProgress = 0;

    // Hard fallback: never let user wait more than 2.8s under ANY network condition
    this.fallbackTimer = setTimeout(() => {
      this.finish();
    }, 2800);

    // Show Quick Launch button immediately so user can bypass instantly if they wish
    if (this.quickBtn) {
      this.quickBtn.style.display = 'inline-flex';
      this.quickBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.finish();
      });
    }

    // Direct click/tap anywhere on loader enters instantly!
    if (this.loaderElement) {
      this.loaderElement.addEventListener('click', () => {
        this.finish();
      }, { once: true });
    }

    if (this.revBtn) {
      this.revBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.finish();
      });
    }

    // Start Smooth Display Animation Loop
    this.animateLoop();
  }

  onProgress(itemKey, loaded, total) {
    if (total && total > 0) {
      const netProg = Math.min(95, (loaded / total) * 95);
      if (netProg > this.currentProgress) {
        this.currentProgress = netProg;
      }
    }
  }

  onItemLoaded(itemKey) {
    if (itemKey === 'car') {
      this.carReady = true;
      this.finish();
    }
  }

  animateLoop() {
    if (this.finished) return;

    const elapsed = performance.now() - this.startTime;

    // Baseline progressive acceleration reaching 95% by 1.8s
    const timeProg = Math.min(95, (elapsed / 1800) * 95);
    this.currentProgress = Math.max(timeProg, this.currentProgress);

    if (elapsed >= 2800) {
      this.finish();
      return;
    }

    const progInt = Math.round(this.currentProgress);

    // Update Progress Bar
    if (this.barElement) {
      this.barElement.style.width = `${this.currentProgress}%`;
    }

    // Update Live Speedometer (0 to 260 KM/H)
    const speedKmh = Math.round((this.currentProgress / 100) * 260);
    if (this.speedElement) {
      this.speedElement.textContent = String(speedKmh).padStart(3, '0');
    }

    // Update Gear
    if (this.gearElement) {
      if (progInt < 20) this.gearElement.textContent = '1';
      else if (progInt < 40) this.gearElement.textContent = '2';
      else if (progInt < 60) this.gearElement.textContent = '3';
      else if (progInt < 80) this.gearElement.textContent = '4';
      else if (progInt < 95) this.gearElement.textContent = '5';
      else if (progInt < 99) this.gearElement.textContent = '6';
      else this.gearElement.textContent = 'MAX';
    }

    // Update RPM (1.2K to 7.8K)
    if (this.rpmElement) {
      const rpm = (1.2 + (this.currentProgress / 100) * 6.6).toFixed(1);
      this.rpmElement.textContent = `${rpm}K`;
    }

    // Dynamic High-Energy Automotive Telemetry Status
    if (this.statusElement) {
      if (progInt < 30) {
        this.statusElement.textContent = `Igniting AMG V8 Biturbo Engine... ${progInt}%`;
      } else if (progInt < 70) {
        this.statusElement.textContent = `Accelerating Telemetry (${speedKmh} KM/H)...`;
      } else if (progInt < 99) {
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

    if (this.barElement) this.barElement.style.width = '100%';
    if (this.speedElement) this.speedElement.textContent = '260';
    if (this.gearElement) this.gearElement.textContent = 'MAX';
    if (this.statusElement) {
      this.statusElement.textContent = 'Studio Online • Welcome, Jubayer Ahmad';
    }

    if (this.loaderElement) {
      this.loaderElement.classList.add('hidden');
      this.loaderElement.style.opacity = '0';
      this.loaderElement.style.pointerEvents = 'none';
      setTimeout(() => {
        if (this.loaderElement && this.loaderElement.parentNode) {
          this.loaderElement.parentNode.removeChild(this.loaderElement);
        }
      }, 350);
    }

    try {
      if (this.experience.sounds) {
        this.experience.sounds.playTireScreech();
      }
    } catch (e) {
      // Non-blocking
    }
  }
}
