import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

export default class Environment {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.renderer = this.experience.renderer.instance;

    this.setHDRI();
    this.setLights();
  }

  setHDRI() {
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('./textures/studio.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      this.scene.environment = texture;
      this.scene.environmentIntensity = 0.85;
    });
  }

  setLights() {
    // Soft Ambient Light for base visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    const isMobile = this.experience.sizes?.isMobile;
    const shadowMapSize = isMobile ? 1024 : 2048;

    // Main Studio Softbox Overhead Light (Key Light)
    const mainLight = new THREE.DirectionalLight(0xfff5ea, 1.8);
    mainLight.position.set(2, 8, 4);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = shadowMapSize;
    mainLight.shadow.mapSize.height = shadowMapSize;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 25;
    mainLight.shadow.bias = -0.0001;
    this.scene.add(mainLight);

    // Overhead Studio Softbox Light
    const topLight = new THREE.SpotLight(0xffffff, 3.0, 15, Math.PI / 3, 0.5, 1);
    topLight.position.set(0, 6, 0);
    topLight.target.position.set(0, 0.5, 0);
    this.scene.add(topLight);

    // Cinematic Anamorphic Cyan Accent Light (Left Side)
    const cyanLight = new THREE.SpotLight(0x00f0ff, 4.5, 20, Math.PI / 4, 0.4, 1);
    cyanLight.position.set(-6, 3.5, 0);
    cyanLight.target.position.set(0, 0.5, 0);
    this.scene.add(cyanLight);
    this.scene.add(cyanLight.target);

    // Cinematic Warm Amber Rim Light (Right & Rear)
    const amberLight = new THREE.SpotLight(0xffaa00, 3.8, 20, Math.PI / 4, 0.4, 1);
    amberLight.position.set(5, 3.5, -2);
    amberLight.target.position.set(0, 0.5, 0);
    this.scene.add(amberLight);
    this.scene.add(amberLight.target);
  }
}
