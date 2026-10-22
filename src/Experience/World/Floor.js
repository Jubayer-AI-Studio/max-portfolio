import * as THREE from 'three';

export default class Floor {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;

    this.setFloor();
  }

  setFloor() {
    // 1. Infinite studio floor base (dark gradient)
    const baseGeo = new THREE.PlaneGeometry(80, 80);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x06080c,
      roughness: 0.25,
      metalness: 0.75
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
      color: 0x111620,
      roughness: 0.15,
      metalness: 0.92,
      envMapIntensity: 1.4
    });
    this.groundMirror = new THREE.Mesh(mirrorGeo, mirrorMat);
    this.groundMirror.position.set(0, 0.005, 0);
    this.groundMirror.rotation.x = -Math.PI / 2;
    this.groundMirror.receiveShadow = true;
    this.scene.add(this.groundMirror);
  }
}
