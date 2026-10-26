import * as THREE from 'three';

export default class StudioScreen {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;

    this.group = new THREE.Group();
    // Positioned gracefully on the left gallery curve, perfectly mirroring SocialScreen on the right
    this.group.position.set(-4.2, 0, -1.8);
    this.group.rotation.y = Math.PI / 3.0; // ~60 degrees toward showroom center
    this.scene.add(this.group);

    this.canvasWidth = 2048;
    this.canvasHeight = 1152;
    this.imageLoaded = false;
    this.drawn = false;

    this.setupCanvas();
    this.loadImage();
    this.setMesh();
    this.setLighting();
  }

  setupCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.ctx = this.canvas.getContext('2d');

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    // 4K Ultra-Crisp Trilinear Mipmapping & 16x Anisotropic Filtering (eliminates all noise & moiré)
    this.texture.minFilter = THREE.LinearMipmapLinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.generateMipmaps = true;
    const maxAniso = this.experience.renderer?.instance?.capabilities?.getMaxAnisotropy() || 16;
    this.texture.anisotropy = maxAniso;

    // Draw initial clean placeholder
    this.drawSignboard();
  }

  loadImage() {
    this.profileImg = new Image();
    this.profileImg.crossOrigin = 'anonymous';
    this.profileImg.src = './images/jubayer.jpg';
    this.profileImg.onload = () => {
      this.imageLoaded = true;
      this.drawSignboard();
      if (this.texture) this.texture.needsUpdate = true;
    };
  }

  setMesh() {
    // Titanium dark metal material for showroom stanchion
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917, // Stone 900 dark titanium
      metalness: 0.92,
      roughness: 0.22
    });

    const ochreRingMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038, // Warm Amber Gold
      metalness: 0.85,
      roughness: 0.28
    });

    // 1. Showroom pedestal base on the floor
    const baseGeo = new THREE.BoxGeometry(1.5, 0.04, 0.7);
    const base = new THREE.Mesh(baseGeo, metalMat);
    base.position.y = 0.02;
    base.receiveShadow = true;
    this.group.add(base);

    // Chassis geometry:
    // Center at y = 1.5, height = 1.33.
    // Bottom edge is at 1.5 - 1.33/2 = 0.835.
    const chassisWidth = 2.36;
    const chassisHeight = 1.33; // 16:9 ratio
    const chassisDepth = 0.08;
    const chassisY = 1.5;
    const chassisBottomY = chassisY - chassisHeight / 2; // 0.835m

    // 2. Twin Support Stanchions (Strictly BELOW the chassis, ending at 0.835m)
    // Pillars NEVER extend into or in front of the display face!
    const pillarHeight = chassisBottomY; // 0.835m
    const pillarGeo = new THREE.CylinderGeometry(0.04, 0.04, pillarHeight, 24);
    
    const pillar1 = new THREE.Mesh(pillarGeo, metalMat);
    pillar1.position.set(-0.6, pillarHeight / 2, 0);
    this.group.add(pillar1);

    const pillar2 = new THREE.Mesh(pillarGeo, metalMat);
    pillar2.position.set(0.6, pillarHeight / 2, 0);
    this.group.add(pillar2);

    // Warm Ochre accent collar rings positioned halfway down the pillars
    const ringGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.03, 24);
    const ring1 = new THREE.Mesh(ringGeo, ochreRingMat);
    ring1.position.set(-0.6, 0.42, 0);
    this.group.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ochreRingMat);
    ring2.position.set(0.6, 0.42, 0);
    this.group.add(ring2);

    // Rear A-Frame strut brace BEHIND the display (negative z)
    const rearBraceGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.0, 16);
    const rearBrace = new THREE.Mesh(rearBraceGeo, metalMat);
    rearBrace.position.set(0, 0.45, -0.22);
    rearBrace.rotation.x = -Math.PI / 6;
    this.group.add(rearBrace);

    // 3. Display Chassis Box (Solid Dark Titanium Backing)
    const chassisGeo = new THREE.BoxGeometry(chassisWidth, chassisHeight, chassisDepth);
    const chassis = new THREE.Mesh(chassisGeo, metalMat);
    chassis.position.set(0, chassisY, 0);
    chassis.castShadow = true;
    this.group.add(chassis);

    // 4. TRUE HOLLOW PERIMETER BEZEL FRAME (4 separate edge bars — ZERO solid geometry behind screen!)
    // This 100% eliminates any Z-fighting, depth contention, or diagonal moiré pattern!
    const borderThickness = 0.02;
    const borderDepth = 0.015;
    const borderZ = chassisDepth / 2 + borderDepth / 2;

    const topBar = new THREE.Mesh(
      new THREE.BoxGeometry(chassisWidth + borderThickness * 2, borderThickness, borderDepth),
      ochreRingMat
    );
    topBar.position.set(0, chassisY + chassisHeight / 2 + borderThickness / 2, borderZ);
    this.group.add(topBar);

    const bottomBar = new THREE.Mesh(
      new THREE.BoxGeometry(chassisWidth + borderThickness * 2, borderThickness, borderDepth),
      ochreRingMat
    );
    bottomBar.position.set(0, chassisY - chassisHeight / 2 - borderThickness / 2, borderZ);
    this.group.add(bottomBar);

    const leftBar = new THREE.Mesh(
      new THREE.BoxGeometry(borderThickness, chassisHeight, borderDepth),
      ochreRingMat
    );
    leftBar.position.set(-chassisWidth / 2 - borderThickness / 2, chassisY, borderZ);
    this.group.add(leftBar);

    const rightBar = new THREE.Mesh(
      new THREE.BoxGeometry(borderThickness, chassisHeight, borderDepth),
      ochreRingMat
    );
    rightBar.position.set(chassisWidth / 2 + borderThickness / 2, chassisY, borderZ);
    this.group.add(rightBar);

    // 5. FRONT Screen Surface (Canvas Texture)
    const screenGeo = new THREE.PlaneGeometry(chassisWidth, chassisHeight);
    this.screenMat = new THREE.MeshBasicMaterial({
      map: this.texture,
      toneMapped: false,
      side: THREE.FrontSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    });
    this.screenMesh = new THREE.Mesh(screenGeo, this.screenMat);
    this.screenMesh.position.set(0, chassisY, chassisDepth / 2 + 0.003);
    this.group.add(this.screenMesh);

    // 6. SOLID BACK CHASSIS PLATE — Completely prevents viewing text/image from behind
    const backPlateGeo = new THREE.PlaneGeometry(chassisWidth - 0.01, chassisHeight - 0.01);
    const backPlateMat = new THREE.MeshStandardMaterial({
      color: 0x110f0e, // Stone 950 obsidian
      metalness: 0.95,
      roughness: 0.2,
      side: THREE.FrontSide
    });
    const backPlate = new THREE.Mesh(backPlateGeo, backPlateMat);
    backPlate.position.set(0, chassisY, -chassisDepth / 2 - 0.001);
    backPlate.rotation.y = Math.PI; // Faces directly backward
    this.group.add(backPlate);

    // Embossed ochre emblem on the back plate
    const backEmblemGeo = new THREE.RingGeometry(0.1, 0.13, 32);
    const backEmblem = new THREE.Mesh(backEmblemGeo, ochreRingMat);
    backEmblem.position.set(0, chassisY, -0.044);
    backEmblem.rotation.y = Math.PI;
    this.group.add(backEmblem);
  }

  setLighting() {
    // Soft warm gallery spotlight pointing at the signboard
    this.screenLight = new THREE.PointLight(0xfef3c7, 1.3, 5.0, 1.8);
    this.screenLight.position.set(0, 1.5, 0.8);
    this.group.add(this.screenLight);
  }

  update(delta, elapsed) {
    // Static billboard does NOT need continuous 30fps redrawing!
    // Redrawing every frame caused performance overhead and perceptual flicker ("ছবিটা চলছে").
    // We only update texture when needed.
    if (!this.drawn && this.imageLoaded) {
      this.drawSignboard();
      this.drawn = true;
      if (this.texture) this.texture.needsUpdate = true;
    }
  }

  drawSignboard() {
    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;

    // 1. Organic Luxury Color Grading (Exact Palette from nasifwrites.com):
    // Warm Linen Ivory Parchment Gradient (from #F8F4EC via #EFE4D2 to #E4D5BC)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#F8F4EC');
    bgGrad.addColorStop(0.5, '#EFE4D2');
    bgGrad.addColorStop(1, '#E4D5BC');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Warm radial luminous bloom in upper center (matching nasifwrites.com radial glow)
    const radial = ctx.createRadialGradient(w * 0.5, h * 0.2, 50, w * 0.5, h * 0.4, w * 0.6);
    radial.addColorStop(0, 'rgba(253, 230, 138, 0.18)'); // Amber-200 glow
    radial.addColorStop(1, 'rgba(253, 230, 138, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, w, h);

    // Subtle luxury border: Warm Amber Bronze hairline
    ctx.strokeStyle = '#D4A038';
    ctx.lineWidth = 4;
    ctx.strokeRect(32, 32, w - 64, h - 64);

    // Inner subtle hairline
    ctx.strokeStyle = 'rgba(120, 83, 30, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(46, 46, w - 92, h - 92);

    // 4 Corner Architectural Accents in Warm Ochre Brass (#D4A038)
    const cornerSize = 32;
    ctx.fillStyle = '#D4A038';
    ctx.fillRect(28, 28, cornerSize, 4);
    ctx.fillRect(28, 28, 4, cornerSize);
    ctx.fillRect(w - 28 - cornerSize, 28, cornerSize, 4);
    ctx.fillRect(w - 32, 28, 4, cornerSize);
    ctx.fillRect(28, h - 32, cornerSize, 4);
    ctx.fillRect(28, h - 28 - cornerSize, 4, cornerSize);
    ctx.fillRect(w - 28 - cornerSize, h - 32, cornerSize, 4);
    ctx.fillRect(w - 32, h - 28 - cornerSize, 4, cornerSize);

    // 2. LEFT SIDE: Jubayer's Full Natural Photo in Crisp Pure White Frame
    // Generously proportioned with museum margins
    const photoX = 140;
    const photoY = 120;
    const photoW = 660;
    const photoH = 912;

    // Pure Solid White Frame (#FFFFFF) with editorial soft drop-shadow
    ctx.save();
    ctx.shadowColor = 'rgba(12, 10, 9, 0.18)';
    ctx.shadowBlur = 32;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 12;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(photoX - 14, photoY - 14, photoW + 28, photoH + 28);
    ctx.restore();

    // Solid crisp white border line
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 4;
    ctx.strokeRect(photoX - 14, photoY - 14, photoW + 28, photoH + 28);

    if (this.imageLoaded && this.profileImg) {
      // 100% natural, untouched photo (Zero filters, Zero shimmers)
      ctx.save();
      ctx.beginPath();
      ctx.rect(photoX, photoY, photoW, photoH);
      ctx.clip();

      const img = this.profileImg;
      const imgRatio = img.width / img.height;
      const targetRatio = photoW / photoH;
      let drawW, drawH, drawX, drawY;

      if (imgRatio > targetRatio) {
        drawH = photoH;
        drawW = photoH * imgRatio;
        drawX = photoX + (photoW - drawW) / 2;
        drawY = photoY;
      } else {
        drawW = photoW;
        drawH = photoW / imgRatio;
        drawX = photoX;
        drawY = photoY + (photoH - drawH) * 0.18; // Perfectly centered on face and torso
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    } else {
      ctx.fillStyle = '#E8DFD0';
      ctx.fillRect(photoX, photoY, photoW, photoH);
      ctx.fillStyle = '#78716C';
      ctx.font = '600 32px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('LOADING PORTRAIT...', photoX + photoW / 2, photoY + photoH / 2);
    }

    // 3. RIGHT SIDE: Clean 3 Lines of English Identity
    // Color graded identically to the upper author section of nasifwrites.com
    const textStartX = 890;
    const centerY = h * 0.5;

    // Line 1: Jubayer Ahmad
    // Color: Rich Deep Charcoal Obsidian (#0A0908) — maximum visual authority & contrast
    ctx.fillStyle = '#0A0908';
    ctx.font = '800 96px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.letterSpacing = '0.01em';
    ctx.fillText('Jubayer Ahmad', textStartX, centerY - 80);

    // Warm Ochre Gold Divider Line (#D4A038)
    ctx.fillStyle = '#D4A038';
    ctx.fillRect(textStartX, centerY - 10, 560, 4);

    // Line 2: Full Stack Developer
    // Color: Deep Burnt Ochre Amber (#9A3412) — High contrast, luxurious editorial warmth
    ctx.fillStyle = '#9A3412';
    ctx.font = '700 64px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '0.02em';
    ctx.fillText('Full Stack Developer', textStartX, centerY + 65);

    // Line 3: AI Content Creator
    // Color: Deep Emerald Forest (#064E3B) — Deep organic pine green, high contrast on parchment
    ctx.fillStyle = '#064E3B';
    ctx.font = '700 64px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '0.02em';
    ctx.fillText('AI Content Creator', textStartX, centerY + 175);
  }
}
