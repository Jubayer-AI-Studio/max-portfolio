import * as THREE from 'three';

export default class Floor {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;

    this.setFloor();
  }

  setFloor() {
    // 1. Serene Light Luxury Penthouse Floor (Polished Italian Crema Marfil / Light Botticino Slabs)
    const baseGeo = new THREE.PlaneGeometry(80, 80);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0xe6e0d4, // Soft, serene warm Italian Crema Marfil limestone
      roughness: 0.36, // Soft satin architectural reflection (completely eye-friendly, zero glare)
      metalness: 0.03, // Authentic dielectric stone / terrazzo
      envMapIntensity: 0.4
    });
    this.baseMesh = new THREE.Mesh(baseGeo, baseMat);
    this.baseMesh.rotation.x = -Math.PI / 2;
    this.baseMesh.position.y = -0.005;
    this.baseMesh.receiveShadow = true;
    this.scene.add(this.baseMesh);

    // 2. High-Performance Reflective Automotive Turntable Stage (Radius 4.35m - perfectly framing the SLK 55 AMG)
    const mirrorGeo = new THREE.CircleGeometry(4.35, 64);
    const mirrorMat = new THREE.MeshStandardMaterial({
      color: 0x0c0b0a, // Deep obsidian showroom turntable
      roughness: 0.14,
      metalness: 0.12,
      envMapIntensity: 1.1
    });
    this.groundMirror = new THREE.Mesh(mirrorGeo, mirrorMat);
    this.groundMirror.position.set(0, 0.005, 0);
    this.groundMirror.rotation.x = -Math.PI / 2;
    this.groundMirror.receiveShadow = true;
    this.scene.add(this.groundMirror);

    // 3. Primary 24K Royal Gold Inlay Ring framing the rotating car stage
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.88,
      roughness: 0.22
    });

    const inlayGeo = new THREE.RingGeometry(4.30, 4.42, 64);
    const inlayRing = new THREE.Mesh(inlayGeo, goldMat);
    inlayRing.position.set(0, 0.007, 0);
    inlayRing.rotation.x = -Math.PI / 2;
    this.scene.add(inlayRing);

    // 4. Outer Fine Gallery Perimeter Ring (Radius 8.8m)
    const outerRingGeo = new THREE.RingGeometry(8.75, 8.82, 64);
    const outerRingMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.80,
      roughness: 0.30
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.position.set(0, 0.006, 0);
    outerRing.rotation.x = -Math.PI / 2;
    this.scene.add(outerRing);

    // 5. Soft Warm Golden Floor Cove Light under the stage bevel
    const floorLight = new THREE.PointLight(0xfef3c7, 0.8, 6.0, 2.0);
    floorLight.position.set(0, 0.15, 0);
    this.scene.add(floorLight);
  }
}
