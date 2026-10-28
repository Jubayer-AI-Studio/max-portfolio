import * as THREE from 'three';

export default class SocialScreen {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.group = new THREE.Group();
    // Compact pedestal kiosk gracefully positioned on the right gallery curve
    this.group.position.set(3.4, 0, -1.2);
    this.group.rotation.y = -Math.PI / 3.8;
    this.scene.add(this.group);

    // 4K Ultra-Sharp Retina Canvas Dimensions
    this.canvasWidth = 2048;
    this.canvasHeight = 1360;
    this.hoveredIndex = -1;

    // 4 Official Verified Social Channels (2x2 Grid)
    this.cards = [
      {
        id: 'youtube',
        name: 'YouTube',
        handle: '@jubayeraispecialist',
        desc: 'Official AI Tech & Studio Channel',
        color: '#FF0000',
        url: 'https://www.youtube.com/@jubayeraispecialist',
        actionText: 'Subscribe ↗',
        rect: { x: 100, y: 310, w: 870, h: 440 }
      },
      {
        id: 'instagram',
        name: 'Instagram',
        handle: '@jubayer_ahmad_2002',
        desc: 'Visual Stories & Daily Tech',
        color: '#E1306C',
        url: 'https://www.instagram.com/jubayer_ahmad_2002/',
        actionText: 'Follow ↗',
        rect: { x: 1078, y: 310, w: 870, h: 440 }
      },
      {
        id: 'facebook',
        name: 'Facebook',
        handle: 'Jubayer Ahmad',
        desc: 'Personal Profile & Studio Page',
        color: '#1877F2',
        url: 'https://www.facebook.com/share/1CopAWZnyX/',
        actionText: 'Connect ↗',
        rect: { x: 100, y: 798, w: 870, h: 440 }
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        handle: '@jubayer_ahmad_2002',
        desc: 'Short AI Reels & Video Clips',
        color: '#000000',
        url: 'https://www.tiktok.com/@jubayer_ahmad_2002',
        actionText: 'Follow ↗',
        rect: { x: 1078, y: 798, w: 870, h: 440 }
      }
    ];

    this.setupCanvas();
    this.setMesh();
    this.setLighting();
    this.bindEvents();
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

    this.draw();
  }

  setMesh() {
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917,
      metalness: 0.92,
      roughness: 0.22
    });

    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0xe5c07b,
      metalness: 0.88,
      roughness: 0.22
    });

    // 1. Sleek Circular Pedestal Base
    const baseGeo = new THREE.CylinderGeometry(0.32, 0.36, 0.03, 32);
    const base = new THREE.Mesh(baseGeo, metalMat);
    base.position.y = 0.015;
    base.receiveShadow = true;
    this.group.add(base);

    // Compact Kiosk Dimensions
    const chassisWidth = 1.15;
    const chassisHeight = 0.76;
    const chassisDepth = 0.045;
    const chassisY = 1.12;
    const chassisBottomY = chassisY - chassisHeight / 2; // ~0.74m

    // 2. Central Brushed Titanium Support Column
    const pillarHeight = chassisBottomY;
    const pillarGeo = new THREE.CylinderGeometry(0.032, 0.032, pillarHeight, 24);
    const pillar = new THREE.Mesh(pillarGeo, metalMat);
    pillar.position.set(0, pillarHeight / 2, 0);
    this.group.add(pillar);

    // Amber Gold Accent Collar Ring
    const ringGeo = new THREE.CylinderGeometry(0.042, 0.042, 0.02, 24);
    const ring = new THREE.Mesh(ringGeo, bezelMat);
    ring.position.set(0, 0.38, 0);
    this.group.add(ring);

    // 3. Compact Display Chassis Box (Solid Dark Titanium Backing)
    const chassisGeo = new THREE.BoxGeometry(chassisWidth, chassisHeight, chassisDepth);
    const chassis = new THREE.Mesh(chassisGeo, metalMat);
    chassis.position.set(0, chassisY, 0);
    chassis.castShadow = true;
    this.group.add(chassis);

    // 4. TRUE HOLLOW PERIMETER BEZEL FRAME (4 separate edge bars — ZERO solid geometry behind screen!)
    // This 100% eliminates any Z-fighting, depth contention, or diagonal moiré pattern!
    const borderThickness = 0.016;
    const borderDepth = 0.012;
    const borderZ = chassisDepth / 2 + borderDepth / 2; // Sits slightly raised around the screen

    // Top border bar
    const topBar = new THREE.Mesh(
      new THREE.BoxGeometry(chassisWidth + borderThickness * 2, borderThickness, borderDepth),
      bezelMat
    );
    topBar.position.set(0, chassisY + chassisHeight / 2 + borderThickness / 2, borderZ);
    this.group.add(topBar);

    // Bottom border bar
    const bottomBar = new THREE.Mesh(
      new THREE.BoxGeometry(chassisWidth + borderThickness * 2, borderThickness, borderDepth),
      bezelMat
    );
    bottomBar.position.set(0, chassisY - chassisHeight / 2 - borderThickness / 2, borderZ);
    this.group.add(bottomBar);

    // Left border bar
    const leftBar = new THREE.Mesh(
      new THREE.BoxGeometry(borderThickness, chassisHeight, borderDepth),
      bezelMat
    );
    leftBar.position.set(-chassisWidth / 2 - borderThickness / 2, chassisY, borderZ);
    this.group.add(leftBar);

    // Right border bar
    const rightBar = new THREE.Mesh(
      new THREE.BoxGeometry(borderThickness, chassisHeight, borderDepth),
      bezelMat
    );
    rightBar.position.set(chassisWidth / 2 + borderThickness / 2, chassisY, borderZ);
    this.group.add(rightBar);

    // 5. FRONT Screen Surface (Canvas Texture)
    // Placed cleanly on the front face of the chassis with positive clearance
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

    // 6. Solid Back Plate
    const backPlateGeo = new THREE.PlaneGeometry(chassisWidth - 0.01, chassisHeight - 0.01);
    const backPlateMat = new THREE.MeshStandardMaterial({
      color: 0x110f0e,
      metalness: 0.95,
      roughness: 0.2,
      side: THREE.FrontSide
    });
    const backPlate = new THREE.Mesh(backPlateGeo, backPlateMat);
    backPlate.position.set(0, chassisY, -chassisDepth / 2 - 0.001);
    backPlate.rotation.y = Math.PI;
    this.group.add(backPlate);
  }

  setLighting() {
    this.screenLight = new THREE.PointLight(0xfef3c7, 0.9, 4.0, 1.8);
    this.screenLight.position.set(0, 1.15, 0.6);
    this.group.add(this.screenLight);
  }

  draw() {
    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;

    // 1. ORGANIC LUXURY WARM LINEN CREAM PARCHMENT GRADIENT
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#FBF8F2');
    bgGrad.addColorStop(0.5, '#F4EFE6');
    bgGrad.addColorStop(1, '#EBE3D5');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Warm radial luminous bloom in upper header
    const radial = ctx.createRadialGradient(w * 0.5, 110, 40, w * 0.5, 190, w * 0.6);
    radial.addColorStop(0, 'rgba(253, 230, 138, 0.35)');
    radial.addColorStop(1, 'rgba(253, 230, 138, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, w, h);

    // 24K Royal Amber Gold Hairline Frame
    ctx.strokeStyle = '#D4A038';
    ctx.lineWidth = 5;
    ctx.strokeRect(36, 36, w - 72, h - 72);

    ctx.strokeStyle = 'rgba(180, 83, 9, 0.22)';
    ctx.lineWidth = 1.8;
    ctx.strokeRect(50, 50, w - 100, h - 100);

    // Corner Architectural Accents in 24K Royal Gold
    const cornerSize = 36;
    ctx.fillStyle = '#D4A038';
    ctx.fillRect(32, 32, cornerSize, 5);
    ctx.fillRect(32, 32, 5, cornerSize);
    ctx.fillRect(w - 32 - cornerSize, 32, cornerSize, 5);
    ctx.fillRect(w - 37, 32, 5, cornerSize);
    ctx.fillRect(32, h - 37, cornerSize, 5);
    ctx.fillRect(32, h - 32 - cornerSize, 5, cornerSize);
    ctx.fillRect(w - 32 - cornerSize, h - 37, cornerSize, 5);
    ctx.fillRect(w - 37, h - 32 - cornerSize, 5, cornerSize);

    // 2. HEADER SECTION (Deep Charcoal on Cream Parchment - 100% High Contrast)
    ctx.save();
    ctx.textAlign = 'center';

    // Top Category Pill
    ctx.fillStyle = '#9A3412';
    ctx.font = '800 28px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('OFFICIAL VERIFIED CHANNELS', w / 2, 108);

    // Main Title
    ctx.fillStyle = '#0A0908';
    ctx.font = '900 66px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '0.01em';
    ctx.fillText('Connect with Jubayer Ahmad', w / 2, 186);

    // Subtitle instruction
    ctx.fillStyle = '#78531E';
    ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Direct links to verified media platforms • Click any card to launch', w / 2, 238);

    ctx.restore();

    // Subtle Gold Divider Line
    ctx.strokeStyle = 'rgba(212, 160, 56, 0.45)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, 268);
    ctx.lineTo(w - 80, 268);
    ctx.stroke();

    // 3. RENDER 4 COMPACT SOCIAL CARDS (2x2 Grid on Pure White Porcelain)
    this.cards.forEach((card, index) => {
      const isHovered = this.hoveredIndex === index;
      this.drawSocialCard(ctx, card, isHovered);
    });

    if (this.texture) {
      this.texture.needsUpdate = true;
    }
  }

  drawSocialCard(ctx, card, isHovered) {
    const { x, y, w, h } = card.rect;

    ctx.save();

    // 1. Card Base Background (Pure White Porcelain with Soft Editorial Shadow)
    if (isHovered) {
      ctx.shadowColor = 'rgba(212, 160, 56, 0.45)';
      ctx.shadowBlur = 32;
      ctx.fillStyle = '#FFFFFF';
    } else {
      ctx.shadowColor = 'rgba(10, 9, 8, 0.10)';
      ctx.shadowBlur = 18;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
    }

    this.roundRect(ctx, x, y, w, h, 20);
    ctx.fill();
    ctx.shadowBlur = 0;

    // 2. Card Fine Amber Gold Border
    if (isHovered) {
      ctx.strokeStyle = '#D4A038';
      ctx.lineWidth = 4;
    } else {
      ctx.strokeStyle = 'rgba(212, 160, 56, 0.40)';
      ctx.lineWidth = 2;
    }
    this.roundRect(ctx, x, y, w, h, 20);
    ctx.stroke();

    // Top Jewel Accent Line
    ctx.fillStyle = card.color;
    ctx.fillRect(x + 24, y + 3, w - 48, 5);

    // DRAW AUTHENTIC OFFICIAL ICON (Left Side)
    const iconX = x + 38;
    const iconY = y + 46;
    const iconSize = 110;

    if (card.id === 'youtube') {
      // YouTube Red Rounded Button with White Triangle
      this.roundRect(ctx, iconX, iconY, iconSize + 22, iconSize, 26);
      ctx.fillStyle = '#DC2626';
      ctx.fill();

      // Centered White Triangle
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      const triX = iconX + 54;
      const triY = iconY + iconSize / 2;
      ctx.moveTo(triX - 12, triY - 20);
      ctx.lineTo(triX + 20, triY);
      ctx.lineTo(triX - 12, triY + 20);
      ctx.closePath();
      ctx.fill();
    } else if (card.id === 'instagram') {
      // Instagram Sunset Gradient Squircle
      const grad = ctx.createLinearGradient(iconX, iconY + iconSize, iconX + iconSize, iconY);
      grad.addColorStop(0, '#FFDC80');
      grad.addColorStop(0.3, '#F56040');
      grad.addColorStop(0.6, '#E1306C');
      grad.addColorStop(1, '#405DE6');

      this.roundRect(ctx, iconX, iconY, iconSize, iconSize, 26);
      ctx.fillStyle = grad;
      ctx.fill();

      // Camera Glyph
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 5.5;
      this.roundRect(ctx, iconX + 20, iconY + 20, iconSize - 40, iconSize - 40, 16);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, 15, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(iconX + iconSize - 34, iconY + 34, 4.5, 0, Math.PI * 2);
      ctx.fill();
    } else if (card.id === 'facebook') {
      // Facebook Blue Circle with 'f'
      ctx.beginPath();
      ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, iconSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = '#1877F2';
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 74px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('f', iconX + iconSize / 2 - 15, iconY + iconSize - 24);
    } else if (card.id === 'tiktok') {
      // TikTok Dark Squircle with Cyan & Magenta Note
      this.roundRect(ctx, iconX, iconY, iconSize, iconSize, 26);
      ctx.fillStyle = '#0F172A';
      ctx.fill();

      // Note Glyph
      const nx = iconX + iconSize / 2 - 10;
      const ny = iconY + 26;

      ctx.fillStyle = '#00f2fe';
      ctx.beginPath();
      ctx.arc(nx + 2, ny + 46, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(nx + 11, ny - 4, 7, 50);
      ctx.fillRect(nx + 11, ny - 4, 22, 9);

      ctx.fillStyle = '#fe0979';
      ctx.beginPath();
      ctx.arc(nx - 3, ny + 50, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(nx + 6, ny, 7, 50);
      ctx.fillRect(nx + 6, ny, 22, 9);

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(nx, ny + 48, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(nx + 9, ny - 2, 6, 48);
      ctx.fillRect(nx + 9, ny - 2, 19, 8);
    }

    // TEXT METADATA (Right of Icon in Deep Charcoal & Burnt Amber)
    const textX = iconX + (card.id === 'youtube' ? iconSize + 44 : iconSize + 32);

    // Title (Deep Charcoal #0A0908)
    ctx.fillStyle = '#0A0908';
    ctx.font = '900 42px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(card.name, textX, y + 80);

    // Handle (Jewel Brand Tone)
    ctx.fillStyle = card.id === 'youtube' ? '#DC2626' : card.id === 'instagram' ? '#BE185D' : card.id === 'facebook' ? '#1D4ED8' : '#0F172A';
    ctx.font = '700 28px "Plus Jakarta Sans", monospace';
    ctx.fillText(card.handle, textX, y + 130);

    // Brief Subtitle (Warm Charcoal #57534E)
    ctx.fillStyle = '#57534E';
    ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(card.desc, textX, y + 172);

    // BOTTOM ACTION BUTTON
    const btnY = y + h - 94;
    const btnH = 64;
    const btnW = w - 64;

    if (isHovered) {
      const gradBtn = ctx.createLinearGradient(x + 32, btnY, x + 32 + btnW, btnY);
      gradBtn.addColorStop(0, '#D97706');
      gradBtn.addColorStop(1, '#D4A038');
      ctx.fillStyle = gradBtn;
      this.roundRect(ctx, x + 32, btnY, btnW, btnH, 10);
      ctx.fill();

      ctx.fillStyle = '#0A0908';
      ctx.font = '800 26px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(card.actionText.toUpperCase(), x + 32 + btnW / 2, btnY + 41);
    } else {
      ctx.fillStyle = '#FBF8F2';
      this.roundRect(ctx, x + 32, btnY, btnW, btnH, 10);
      ctx.fill();

      ctx.strokeStyle = '#D4A038';
      ctx.lineWidth = 1.8;
      this.roundRect(ctx, x + 32, btnY, btnW, btnH, 10);
      ctx.stroke();

      ctx.fillStyle = '#9A3412';
      ctx.font = '700 24px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(card.actionText, x + 32 + btnW / 2, btnY + 41);
    }

    ctx.restore();
  }

  roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  bindEvents() {
    const onPointerMove = (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      if (!this.screenMesh) return;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObject(this.screenMesh);

      if (intersects.length > 0 && intersects[0].uv) {
        const uv = intersects[0].uv;
        const canvasX = uv.x * this.canvasWidth;
        const canvasY = (1 - uv.y) * this.canvasHeight;

        let found = -1;
        this.cards.forEach((card, index) => {
          const { x, y, w, h } = card.rect;
          if (canvasX >= x && canvasX <= x + w && canvasY >= y && canvasY <= y + h) {
            found = index;
          }
        });

        if (this.hoveredIndex !== found) {
          this.hoveredIndex = found;
          document.body.style.cursor = found !== -1 ? 'pointer' : 'default';
          this.draw();
        }
      } else {
        if (this.hoveredIndex !== -1) {
          this.hoveredIndex = -1;
          document.body.style.cursor = 'default';
          this.draw();
        }
      }
    };

    const onPointerDown = (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      if (!this.screenMesh) return;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObject(this.screenMesh);

      if (intersects.length > 0 && intersects[0].uv) {
        const uv = intersects[0].uv;
        const canvasX = uv.x * this.canvasWidth;
        const canvasY = (1 - uv.y) * this.canvasHeight;

        this.cards.forEach((card, index) => {
          const { x, y, w, h } = card.rect;
          if (canvasX >= x && canvasX <= x + w && canvasY >= y && canvasY <= y + h) {
            if (card.url) {
              if (this.experience.sounds) {
                this.experience.sounds.playClick();
              }
              window.open(card.url, '_blank');
            }
          }
        });
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown);
  }

  update(delta, elapsed) {
    // Dynamic updates when hovered
  }
}
