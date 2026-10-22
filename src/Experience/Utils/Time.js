export default class Time {
  constructor() {
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;

    this.callbacks = [];

    window.requestAnimationFrame(() => this.tick());
  }

  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    this.callbacks.forEach(cb => cb(this.delta, this.elapsed));

    window.requestAnimationFrame(() => this.tick());
  }

  onTick(cb) {
    this.callbacks.push(cb);
  }
}
