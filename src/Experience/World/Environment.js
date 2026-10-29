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
      this.scene.environmentIntensity = 0.65; // Balanced, soft, glare-free reflections
    });
  }

  setLights() {
    // Soft, soothing, diffused ambient daylight (completely eye-friendly, zero harsh glare)
    const ambientLight = new THREE.AmbientLight(0xfffaf2, 0.95);
    this.scene.add(ambientLight);

    const isMobile = this.experience.sizes?.isMobile;
    const shadowMapSize = isMobile ? 1024 : 2048;

    // Main Studio Softbox Key Light (Soft, gentle shadows)
    const mainLight = new THREE.DirectionalLight(0xfff8ee, 1.4);
    mainLight.position.set(2, 8, 4);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = shadowMapSize;
    mainLight.shadow.mapSize.height = shadowMapSize;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 25;
    mainLight.shadow.bias = -0.00008;
    mainLight.shadow.radius = 2.5;
    this.scene.add(mainLight);

    // Overhead Diffused Fill
    const topLight = new THREE.SpotLight(0xfffdf5, 1.2, 15, Math.PI / 3, 0.6, 1);
    topLight.position.set(0, 6, 0);
    topLight.target.position.set(0, 0.5, 0);
    this.scene.add(topLight);

    // Warm Ivory Soft Fill Light (Left Side)
    const fillLight = new THREE.SpotLight(0xfef3c7, 1.1, 20, Math.PI / 4, 0.5, 1);
    fillLight.position.set(-6, 3.5, 0);
    fillLight.target.position.set(0, 0.5, 0);
    this.scene.add(fillLight);
    this.scene.add(fillLight.target);

    // Gentle Champagne Gold Rim Light (Right & Rear)
    const amberLight = new THREE.SpotLight(0xd4a038, 1.6, 20, Math.PI / 4, 0.5, 1);
    amberLight.position.set(5, 3.5, -2);
    amberLight.target.position.set(0, 0.5, 0);
    this.scene.add(amberLight);
    this.scene.add(amberLight.target);
  }
}
