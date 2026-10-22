export default class Sizes {
  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.callbacks = [];

    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      this.callbacks.forEach(cb => cb(this.width, this.height, this.pixelRatio));
    });
  }

  onResize(cb) {
    this.callbacks.push(cb);
  }
}
