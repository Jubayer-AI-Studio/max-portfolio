import * as THREE from 'three';
import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Sounds from './Utils/Sounds.js';
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import World from './World/World.js';
import Preloader from './UI/Preloader.js';
import Modal from './UI/Modal.js';

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;

    // Global Access for Debugging / Inspection
    window.experience = this;

    // DOM & Canvas
    this.canvas = canvas;

    // Setup Core Utilities
    this.sizes = new Sizes();
    this.time = new Time();
    this.sounds = new Sounds();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x040608);
    this.scene.fog = new THREE.Fog(0x040608, 6, 22);

    // Setup Engine & Viewport
    this.camera = new Camera(this);
    this.renderer = new Renderer(this);

    // Setup UI & Preloader
    this.preloader = new Preloader(this);
    this.world = new World(this);
    this.ui = new Modal(this);

    // Event Listeners
    this.sizes.onResize(() => this.resize());
    this.time.onTick((delta, elapsed) => this.update(delta, elapsed));
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update(delta, elapsed) {
    this.camera.update();
    if (this.world) {
      this.world.update(delta, elapsed);
    }
    this.renderer.update();
  }
}
