import * as THREE from 'three';

export default class SkyStudio {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.createSkyDome();
    this.createPenthouseStructure();
  }

  createSkyDome() {
    // Generate high-resolution procedural Sky & City Skyline Panorama Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // 1. Vertical Atmospheric Sky Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGrad.addColorStop(0, '#0f2942');    // Deep aerospace zenith blue
    skyGrad.addColorStop(0.35, '#1e5f8a'); // Clean daytime azure
    skyGrad.addColorStop(0.65, '#569cd6'); // Soft daylight cyan
    skyGrad.addColorStop(0.78, '#cbd5e1'); // Horizon atmospheric haze
    skyGrad.addColorStop(0.85, '#fef08a'); // Warm golden sun glow at horizon
    skyGrad.addColorStop(0.92, '#fdba74'); // Warm peach dusk glow
    skyGrad.addColorStop(1, '#1e293b');    // Distant city ground haze
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Soft Whispering Clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let i = 0; i < 28; i++) {
      const x = (i * 85) % canvas.width;
      const y = 340 + Math.sin(i * 1.5) * 80;
      const w = 180 + (i % 5) * 45;
      const h = 28 + (i % 3) * 12;
      ctx.beginPath();
      ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Distant City Skyline Silhouettes
    const horizonY = canvas.height * 0.82;
    ctx.fillStyle = '#0f172a'; // Deep silhouette of distant towers
    let curX = 0;
    while (curX < canvas.width) {
      const bWidth = 14 + (curX % 7) * 6;
      const bHeight = 40 + (curX % 11) * 12 + ((curX * 3) % 45);
      ctx.fillRect(curX, horizonY - bHeight, bWidth, bHeight);

      // Antenna / Spire on some skyscrapers
      if (curX % 5 === 0) {
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(curX + bWidth / 2 - 1, horizonY - bHeight - 22, 2, 22);
        // Red warning beacon at the tip
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(curX + bWidth / 2 - 2, horizonY - bHeight - 24, 4, 3);
        ctx.fillStyle = '#0f172a';
      }

      // Small illuminated windows on skyscrapers
      ctx.fillStyle = 'rgba(254, 240, 138, 0.45)';
      for (let wy = horizonY - bHeight + 8; wy < horizonY - 4; wy += 8) {
        for (let wx = curX + 3; wx < curX + bWidth - 3; wx += 6) {
          if ((wx + wy) % 2 === 0) {
            ctx.fillRect(wx, wy, 2, 3);
          }
        }
      }
      ctx.fillStyle = '#0f172a';
      curX += bWidth + 2 + (curX % 3) * 4;
    }

    // Convert Canvas to Three.js Texture
    const skyTexture = new THREE.CanvasTexture(canvas);
    skyTexture.colorSpace = THREE.SRGBColorSpace;
    skyTexture.wrapS = THREE.RepeatWrapping;
    skyTexture.wrapT = THREE.ClampToEdgeWrapping;

    // Dome Geometry (BackSide so it is viewed from the inside)
    const domeGeo = new THREE.SphereGeometry(65, 36, 24);
    const domeMat = new THREE.MeshBasicMaterial({
      map: skyTexture,
      side: THREE.BackSide,
      fog: false
    });
    this.skyDome = new THREE.Mesh(domeGeo, domeMat);
    this.skyDome.position.y = 10;
    this.group.add(this.skyDome);
  }

  createPenthouseStructure() {
    // Luxury Penthouse Materials
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x1f2937, // Cool dark titanium
      metalness: 0.88,
      roughness: 0.22
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038, // Warm Amber Gold
      metalness: 0.85,
      roughness: 0.3
    });

    const architecturalGlassMat = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.16,
      roughness: 0.04,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    // 1. Curved Floor-to-Ceiling Panoramic Glass Window Curtain
    const glassRadius = 16.5;
    const glassHeight = 10.5;
    const glassGeo = new THREE.CylinderGeometry(
      glassRadius,
      glassRadius,
      glassHeight,
      32,
      1,
      true
    );
    const glassMesh = new THREE.Mesh(glassGeo, architecturalGlassMat);
    glassMesh.position.y = glassHeight / 2;
    this.group.add(glassMesh);

    // 2. Structural Mullions / Architectural Pillars around the perimeter
    const pillarCount = 12;
    for (let i = 0; i < pillarCount; i++) {
      const angle = (i / pillarCount) * Math.PI * 2;
      const px = Math.cos(angle) * glassRadius;
      const pz = Math.sin(angle) * glassRadius;

      // Vertical Support Stanchion
      const pillarGeo = new THREE.CylinderGeometry(0.12, 0.14, glassHeight, 16);
      const pillar = new THREE.Mesh(pillarGeo, titaniumMat);
      pillar.position.set(px, glassHeight / 2, pz);
      this.group.add(pillar);

      // Gold Accent Collar Ring at middle height
      const ringGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.08, 16);
      const ring = new THREE.Mesh(ringGeo, goldAccentMat);
      ring.position.set(px, glassHeight * 0.45, pz);
      this.group.add(ring);
    }

    // 3. Ceiling Soffit Crown Ring (Top of Windows)
    const crownGeo = new THREE.TorusGeometry(glassRadius, 0.22, 16, 48);
    const crownMesh = new THREE.Mesh(crownGeo, titaniumMat);
    crownMesh.rotation.x = Math.PI / 2;
    crownMesh.position.y = glassHeight;
    this.group.add(crownMesh);

    // 4. Floor Baseboard Ring (Bottom of Windows)
    const baseboardGeo = new THREE.TorusGeometry(glassRadius, 0.14, 16, 48);
    const baseboardMesh = new THREE.Mesh(baseboardGeo, titaniumMat);
    baseboardMesh.rotation.x = Math.PI / 2;
    baseboardMesh.position.y = 0.08;
    this.group.add(baseboardMesh);

    // 5. Architectural Ambient Skylight from the Ceiling
    this.skyLight = new THREE.DirectionalLight(0xe0f2fe, 1.2);
    this.skyLight.position.set(-8, 14, 6);
    this.group.add(this.skyLight);
  }
}
