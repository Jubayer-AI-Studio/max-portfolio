import * as THREE from 'three';

export default class Floor {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;

    this.setFloor();
  }

  setFloor() {
    // 1. Luxury Sky-Penthouse Polished Architectural Terrazzo Floor
    const baseGeo = new THREE.PlaneGeometry(80, 80);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x181f2c, // Cool architectural slate terrazzo
      roughness: 0.32,
      metalness: 0.55
    });
    this.baseMesh = new THREE.Mesh(baseGeo, baseMat);
    this.baseMesh.rotation.x = -Math.PI / 2;
    this.baseMesh.position.y = -0.005;
    this.baseMesh.receiveShadow = true;
    this.scene.add(this.baseMesh);

    // 2. High-performance reflective showroom stage circle
    // Ultra-smooth PBR mirror finish with zero secondary-camera rendering overhead (prevents mobile GPU freeze)
    const mirrorGeo = new THREE.CircleGeometry(9, 64);
    const mirrorMat = new THREE.MeshStandardMaterial({
      color: 0x111624,
      roughness: 0.16,
      metalness: 0.88,
      envMapIntensity: 1.5
    });
    this.groundMirror = new THREE.Mesh(mirrorGeo, mirrorMat);
    this.groundMirror.position.set(0, 0.005, 0);
    this.groundMirror.rotation.x = -Math.PI / 2;
    this.groundMirror.receiveShadow = true;
    this.scene.add(this.groundMirror);

    // 3. Subtle Warm Brass Inlay Ring separating the car stage from the room
    const inlayGeo = new THREE.RingGeometry(8.92, 9.04, 64);
    const inlayMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.85,
      roughness: 0.28
    });
    const inlayRing = new THREE.Mesh(inlayGeo, inlayMat);
    inlayRing.position.set(0, 0.007, 0);
    inlayRing.rotation.x = -Math.PI / 2;
    this.scene.add(inlayRing);
  }
}
