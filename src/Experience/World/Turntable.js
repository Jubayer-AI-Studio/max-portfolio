import * as THREE from 'three';

export default class Turntable {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;

    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.isRotating = false;
    this.rotationSpeed = 0.15;

    this.setPlatform();
    this.setLighting();
  }

  setPlatform() {
    // 1. Main circular turntable podium
    const podiumGeo = new THREE.CylinderGeometry(3.5, 3.65, 0.08, 64);
    const podiumMat = new THREE.MeshStandardMaterial({
      color: 0x0a0d14,
      metalness: 0.85,
      roughness: 0.25
    });
    this.podium = new THREE.Mesh(podiumGeo, podiumMat);
    this.podium.position.y = 0.04;
    this.podium.receiveShadow = true;
    this.group.add(this.podium);

    // 2. Beveled outer edge ring (Dark brushed aluminum)
    const bevelGeo = new THREE.TorusGeometry(3.6, 0.02, 16, 64);
    const bevelMat = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      metalness: 0.9,
      roughness: 0.15
    });
    const bevel = new THREE.Mesh(bevelGeo, bevelMat);
    bevel.rotation.x = Math.PI / 2;
    bevel.position.y = 0.08;
    this.group.add(bevel);

    // 3. Glowing Neon LED Rim (Cyan / Electric Blue)
    const rimGeo = new THREE.TorusGeometry(3.55, 0.015, 16, 64);
    this.rimMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.2,
      roughness: 0.2
    });
    this.rim = new THREE.Mesh(rimGeo, this.rimMat);
    this.rim.rotation.x = Math.PI / 2;
    this.rim.position.y = 0.082;
    this.group.add(this.rim);

    // 4. Inner accent neon ring
    const innerRimGeo = new THREE.TorusGeometry(2.8, 0.008, 16, 64);
    this.innerRimMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xffaa00,
      emissiveIntensity: 1.4,
      roughness: 0.3
    });
    const innerRim = new THREE.Mesh(innerRimGeo, this.innerRimMat);
    innerRim.rotation.x = Math.PI / 2;
    innerRim.position.y = 0.082;
    this.group.add(innerRim);

    // 5. Tech markings / notches around podium
    const markerCount = 12;
    const markerGeo = new THREE.BoxGeometry(0.04, 0.005, 0.2);
    const markerMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    for (let i = 0; i < markerCount; i++) {
      const angle = (i / markerCount) * Math.PI * 2;
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.set(Math.cos(angle) * 3.35, 0.083, Math.sin(angle) * 3.35);
      marker.rotation.y = -angle;
      this.group.add(marker);
    }
  }

  setLighting() {
    // Subtle uplight casting on the car underside
    const uplight = new THREE.PointLight(0x00f0ff, 1.5, 6, 2);
    uplight.position.set(0, 0.15, 0);
    this.group.add(uplight);
  }

  toggleRotation() {
    this.isRotating = !this.isRotating;
    return this.isRotating;
  }

  update(delta) {
    // Subtle pulsating neon emission
    const time = performance.now() * 0.0015;
    if (this.rimMat) {
      this.rimMat.emissiveIntensity = 2.0 + Math.sin(time * 2) * 0.5;
    }

    if (this.isRotating && this.experience.world.car && this.experience.world.car.model) {
      this.experience.world.car.model.rotation.y += delta * 0.0003 * this.rotationSpeed;
      this.group.rotation.y += delta * 0.0003 * this.rotationSpeed;
    }
  }
}
