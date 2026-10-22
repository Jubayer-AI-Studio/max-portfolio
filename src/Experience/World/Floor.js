import * as THREE from 'three';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

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

    // 2. Real-time Planar Mirror Reflector under the car
    const reflectorGeo = new THREE.CircleGeometry(9, 64);
    this.groundMirror = new Reflector(reflectorGeo, {
      clipBias: 0.003,
      textureWidth: Math.min(window.innerWidth, 1024),
      textureHeight: Math.min(window.innerHeight, 1024),
      color: 0x2d323b
    });

    this.groundMirror.position.set(0, 0.005, 0);
    this.groundMirror.rotation.x = -Math.PI / 2;
    this.scene.add(this.groundMirror);
  }
}
