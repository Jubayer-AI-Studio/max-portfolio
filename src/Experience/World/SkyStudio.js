import * as THREE from 'three';

export default class SkyStudio {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.createSkyDome();
    this.createPenthouseStructure();
    this.createCeilingSoftboxCanopy();
  }

  createSkyDome() {
    // 4K Ultra-Crisp Serene Light Atmosphere & City Skyline Panorama
    const canvas = document.createElement('canvas');
    canvas.width = 4096;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');

    // 1. Soft, Serene Light Daylight Sky Gradient (Completely Eye-Friendly & Relaxing)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGrad.addColorStop(0, '#cad6e2');     // Soft daylight zenith
    skyGrad.addColorStop(0.25, '#dbe3ec');  // Serene pearl blue-grey
    skyGrad.addColorStop(0.40, '#ede9e1');  // Warm pearl ivory
    skyGrad.addColorStop(0.48, '#faf7f0');  // Soft warm daylight horizon
    skyGrad.addColorStop(0.51, '#f5f0e6');  // Gentle city daylight wash
    skyGrad.addColorStop(0.55, '#eae2d4');  // Distant warm mist
    skyGrad.addColorStop(0.65, '#ded5c5');  // Ground base
    skyGrad.addColorStop(1, '#d5ccbc');     // Nadir
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Whispering Soft Feather Clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 36; i++) {
      const x = (i * 120) % canvas.width;
      const y = canvas.height * 0.35 + Math.sin(i * 1.8) * 60;
      const w = 320 + (i % 6) * 80;
      const h = 36 + (i % 4) * 14;
      ctx.beginPath();
      ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. High-Density Architectural Metropolitan Skyline (Horizon at eye-level V = 0.50)
    const horizonY = canvas.height * 0.50;
    const groundDepth = 120;

    // Distant background layer (Soft Muted Silhouette)
    ctx.fillStyle = '#94a3b8';
    for (let x = 0; x < canvas.width; x += 14) {
      const h = 45 + ((x * 11) % 80);
      ctx.fillRect(x, horizonY - h, 12, h + groundDepth);
    }

    // Midground high-rises with subtle architectural diversity (Soft Slate & Warm Charcoal)
    ctx.fillStyle = '#475569';
    let curX = 0;
    while (curX < canvas.width) {
      const bWidth = 16 + (curX % 9) * 8;
      const bHeight = 55 + (curX % 13) * 15 + ((curX * 3) % 70);
      ctx.fillRect(curX, horizonY - bHeight, bWidth, bHeight + groundDepth);

      // Fine architectural spire
      if (curX % 6 === 0) {
        ctx.fillStyle = '#64748b';
        ctx.fillRect(curX + bWidth / 2 - 1, horizonY - bHeight - 28, 2, 28);
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(curX + bWidth / 2 - 2, horizonY - bHeight - 30, 4, 3);
        ctx.fillStyle = '#475569';
      }

      // Micro-point window lights (Soft Warm Ivory)
      for (let wy = horizonY - bHeight + 14; wy < horizonY + 30; wy += 9) {
        for (let wx = curX + 4; wx < curX + bWidth - 4; wx += 6) {
          if ((wx * 3 + wy * 7) % 5 === 0) {
            const alpha = 0.35 + ((wx + wy) % 4) * 0.15;
            ctx.fillStyle = `rgba(254, 243, 199, ${alpha})`;
            ctx.fillRect(wx, wy, 2, 3);
          }
        }
      }
      ctx.fillStyle = '#475569';
      curX += bWidth + 3 + (curX % 4) * 3;
    }

    // Convert Canvas to Three.js Texture with Trilinear Filtering
    const skyTexture = new THREE.CanvasTexture(canvas);
    skyTexture.colorSpace = THREE.SRGBColorSpace;
    skyTexture.wrapS = THREE.RepeatWrapping;
    skyTexture.wrapT = THREE.ClampToEdgeWrapping;
    skyTexture.minFilter = THREE.LinearFilter;
    skyTexture.magFilter = THREE.LinearFilter;

    // Dome Geometry (Positioned at eye-level y = 1.6)
    const domeGeo = new THREE.SphereGeometry(65, 36, 24);
    const domeMat = new THREE.MeshBasicMaterial({
      map: skyTexture,
      side: THREE.BackSide,
      fog: false
    });
    this.skyDome = new THREE.Mesh(domeGeo, domeMat);
    this.skyDome.position.y = 1.6;
    this.group.add(this.skyDome);
  }

  createPenthouseStructure() {
    // Luxury Penthouse Materials (Serene Champagne & Bronze)
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x423e39, // Brushed champagne titanium
      metalness: 0.55,
      roughness: 0.35
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038, // Warm 24K Amber Gold
      metalness: 0.85,
      roughness: 0.28
    });

    // Clean Architectural Glass
    const architecturalGlassMat = new THREE.MeshBasicMaterial({
      color: 0xfffdfa,
      transparent: true,
      opacity: 0.05,
      side: THREE.FrontSide
    });

    // 1. Curved Floor-to-Ceiling Panoramic Glass Window Curtain
    const glassRadius = 16.5;
    const glassHeight = 10.5;
    const glassGeo = new THREE.CylinderGeometry(
      glassRadius,
      glassRadius,
      glassHeight,
      48,
      1,
      true
    );
    const glassMesh = new THREE.Mesh(glassGeo, architecturalGlassMat);
    glassMesh.position.y = glassHeight / 2;
    this.group.add(glassMesh);

    // 2. Structural Mullions / Architectural Pillars around the perimeter
    const pillarCount = 14;
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

    // 4. Solid Architectural Light Ceiling Plate (Closes the top with warm ivory)
    const ceilingGeo = new THREE.CircleGeometry(glassRadius + 1.0, 36);
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0xf5f1ea, // Clean light ivory architectural ceiling
      roughness: 0.45,
      metalness: 0.05
    });
    const ceilingMesh = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceilingMesh.rotation.x = Math.PI / 2;
    ceilingMesh.position.y = glassHeight;
    this.group.add(ceilingMesh);

    // 5. Floor Baseboard Ring (Bottom of Windows)
    const baseboardGeo = new THREE.TorusGeometry(glassRadius, 0.14, 16, 48);
    const baseboardMesh = new THREE.Mesh(baseboardGeo, titaniumMat);
    baseboardMesh.rotation.x = Math.PI / 2;
    baseboardMesh.position.y = 0.08;
    this.group.add(baseboardMesh);

    // 6. Architectural Ambient Skylight from the Ceiling
    this.skyLight = new THREE.DirectionalLight(0xfff8ee, 1.0);
    this.skyLight.position.set(-8, 14, 6);
    this.group.add(this.skyLight);
  }

  createCeilingSoftboxCanopy() {
    // Suspended Master Studio Lightbox Canopy (Directly above the Mercedes-Benz turntable)
    // Creates gentle, velvety soft light reflections along hood, roof, and trunk curves
    const boxWidth = 6.2;
    const boxDepth = 3.6;
    const boxY = 6.8;

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.90,
      roughness: 0.20
    });

    const champagneMat = new THREE.MeshStandardMaterial({
      color: 0x4a4540,
      metalness: 0.55,
      roughness: 0.35
    });

    // Chassis frame housing the softbox
    const chassisGeo = new THREE.BoxGeometry(boxWidth + 0.2, 0.12, boxDepth + 0.2);
    const chassis = new THREE.Mesh(chassisGeo, champagneMat);
    chassis.position.set(0, boxY + 0.06, 0);
    this.group.add(chassis);

    // 24K Royal Gold Bevel Border Ring around the softbox diffuser
    const borderThickness = 0.08;
    const borderY = boxY;

    // Top border bar
    const bTop = new THREE.Mesh(new THREE.BoxGeometry(boxWidth + 0.2, 0.04, borderThickness), goldMat);
    bTop.position.set(0, borderY, -boxDepth / 2 - borderThickness / 2);
    this.group.add(bTop);

    // Bottom border bar
    const bBottom = new THREE.Mesh(new THREE.BoxGeometry(boxWidth + 0.2, 0.04, borderThickness), goldMat);
    bBottom.position.set(0, borderY, boxDepth / 2 + borderThickness / 2);
    this.group.add(bBottom);

    // Left border bar
    const bLeft = new THREE.Mesh(new THREE.BoxGeometry(borderThickness, 0.04, boxDepth), goldMat);
    bLeft.position.set(-boxWidth / 2 - borderThickness / 2, borderY, 0);
    this.group.add(bLeft);

    // Right border bar
    const bRight = new THREE.Mesh(new THREE.BoxGeometry(borderThickness, 0.04, boxDepth), goldMat);
    bRight.position.set(boxWidth / 2 + borderThickness / 2, borderY, 0);
    this.group.add(bRight);

    // Emissive Diffuser Panel (Facing Downwards towards the Car - Gentle & Diffused)
    const diffuserGeo = new THREE.PlaneGeometry(boxWidth, boxDepth);
    const diffuserMat = new THREE.MeshStandardMaterial({
      color: 0xfffdfa,
      emissive: 0xfffaed,
      emissiveIntensity: 0.85,
      roughness: 0.2,
      metalness: 0.05,
      side: THREE.FrontSide
    });
    const diffuser = new THREE.Mesh(diffuserGeo, diffuserMat);
    diffuser.rotation.x = Math.PI / 2; // Facing down
    diffuser.position.set(0, boxY - 0.005, 0);
    this.group.add(diffuser);

    // Downward Softbox Studio Light from the Canopy (Soft & Even)
    const canopySpot = new THREE.SpotLight(0xfff8ee, 1.4, 16, Math.PI / 3.2, 0.55, 1.2);
    canopySpot.position.set(0, boxY - 0.1, 0);
    canopySpot.target.position.set(0, 0.6, 0);
    this.group.add(canopySpot);
    this.group.add(canopySpot.target);

    // 4 Corner Downlight Accent Rings
    const cornerOffsets = [
      { x: -2.8, z: -1.6 },
      { x: 2.8, z: -1.6 },
      { x: -2.8, z: 1.6 },
      { x: 2.8, z: 1.6 }
    ];

    cornerOffsets.forEach((pos) => {
      const spotCanGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.1, 16);
      const spotCan = new THREE.Mesh(spotCanGeo, goldMat);
      spotCan.position.set(pos.x, boxY + 0.05, pos.z);
      this.group.add(spotCan);

      const spotLight = new THREE.PointLight(0xfef3c7, 0.4, 8, 2.0);
      spotLight.position.set(pos.x, boxY - 0.1, pos.z);
      this.group.add(spotLight);
    });
  }
}
