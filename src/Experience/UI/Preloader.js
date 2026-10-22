export default class Preloader {
  constructor(experience) {
    this.experience = experience;
    this.loaderElement = document.getElementById('loader');
    this.barElement = document.getElementById('loader-bar');
    this.statusElement = document.getElementById('loader-status');

    this.items = {
      car: { loaded: 0, total: 43650624, ready: false }
    };

    this.totalBytes = this.items.car.total;
    this.currentProgress = 0;
    this.soundPlayed = false;

    // Safety fallback: Never keep user waiting longer than 3.5 seconds
    this.fallbackTimer = setTimeout(() => {
      this.finish();
    }, 3500);

    // Initial click or touch listener to trigger audio if browser requires user gesture
    window.addEventListener('click', () => this.tryPlayAudio(), { once: true });
    window.addEventListener('touchstart', () => this.tryPlayAudio(), { once: true });
  }

  tryPlayAudio() {
    if (!this.soundPlayed && this.experience.sounds) {
      this.soundPlayed = true;
      this.experience.sounds.playEngineRev();
    }
  }

  onProgress(itemKey, loaded, total) {
    if (this.items[itemKey]) {
      this.items[itemKey].loaded = loaded;
      if (total) this.items[itemKey].total = total;
    }

    const currentLoaded = this.items.car.loaded;
    const rawProgress = Math.min(Math.round((currentLoaded / this.totalBytes) * 100), 99);
    this.currentProgress = Math.max(this.currentProgress, rawProgress);

    if (this.barElement) {
      this.barElement.style.width = `${this.currentProgress}%`;
    }
    if (this.statusElement) {
      this.statusElement.textContent = `Revving Studio Engine (${this.currentProgress}%)...`;
    }

    // Play subtle rev if audio allowed
    if (this.currentProgress > 40 && !this.soundPlayed) {
      this.tryPlayAudio();
    }
  }

  onItemLoaded(itemKey) {
    if (this.items[itemKey]) {
      this.items[itemKey].ready = true;
      this.items[itemKey].loaded = this.items[itemKey].total;
    }

    if (this.items.car.ready) {
      this.finish();
    }
  }

  finish() {
    if (this.finished) return;
    this.finished = true;
    clearTimeout(this.fallbackTimer);

    if (this.barElement) this.barElement.style.width = '100%';
    if (this.statusElement) this.statusElement.textContent = 'Welcome, Jubayer Ahmad. Studio Engine Online.';

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
