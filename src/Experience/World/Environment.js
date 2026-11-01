import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export default class Environment {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.renderer = this.experience.renderer.instance;

    this.setEnvironment();
    this.setLights();
  }

  setEnvironment() {
    // Instant zero-network procedural studio HDR environment (0ms load, 0 bytes network)
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();

    const roomEnv = new RoomEnvironment();
    const envTexture = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    this.scene.environment = envTexture;
    this.scene.environmentIntensity = 0.85;

    pmremGenerator.dispose();
  }

  setLights() {
    // Soft, soothing, diffused ambient daylight (completely eye-friendly, zero harsh glare)
    const ambientLight = new THREE.AmbientLight(0xfffaf2, 1.05);
    this.scene.add(ambientLight);

    const isMobile = this.experience.sizes?.isMobile;
    const shadowMapSize = isMobile ? 1024 : 1024;

    // Main Studio Softbox Key Light (Crisp, fast directional shadow)
    const mainLight = new THREE.DirectionalLight(0xfff8ee, 1.4);
    mainLight.position.set(2, 8, 4);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = shadowMapSize;
    mainLight.shadow.mapSize.height = shadowMapSize;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 25;
    mainLight.shadow.bias = -0.00008;
    this.scene.add(mainLight);

    // Overhead Diffused Fill
    const topLight = new THREE.DirectionalLight(0xfffdf5, 0.65);
    topLight.position.set(0, 6, 0);
    this.scene.add(topLight);

    // Warm Ivory Soft Fill Light (Left Side)
    const fillLight = new THREE.DirectionalLight(0xfef3c7, 0.45);
    fillLight.position.set(-6, 3.5, 0);
    this.scene.add(fillLight);

    // Gentle Champagne Gold Rim Light (Right & Rear)
    const amberLight = new THREE.DirectionalLight(0xd4a038, 0.55);
    amberLight.position.set(5, 3.5, -2);
    this.scene.add(amberLight);
  }
}
