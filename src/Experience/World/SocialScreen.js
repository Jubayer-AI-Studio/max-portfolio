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

    // 1. Hollywood Smoked Obsidian OLED Background (Ultra-Luxury Agency Grade)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#06070B');
    bgGrad.addColorStop(0.5, '#0B0D14');
    bgGrad.addColorStop(1, '#10131F');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Warm radial bloom in upper header
    const radial = ctx.createRadialGradient(w * 0.5, 120, 40, w * 0.5, 200, w * 0.6);
    radial.addColorStop(0, 'rgba(229, 192, 123, 0.18)');
    radial.addColorStop(1, 'rgba(229, 192, 123, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, w, h);

    // Warm Champagne Gold Hairline Frame
    ctx.strokeStyle = '#E5C07B';
    ctx.lineWidth = 6;
    ctx.strokeRect(40, 40, w - 80, h - 80);

    ctx.strokeStyle = 'rgba(229, 192, 123, 0.25)';
    ctx.lineWidth = 2;
    ctx.strokeRect(56, 56, w - 112, h - 112);

    // Corner Architectural Accents
    const cornerSize = 40;
    ctx.fillStyle = '#E5C07B';
    ctx.fillRect(36, 36, cornerSize, 6);
    ctx.fillRect(36, 36, 6, cornerSize);
    ctx.fillRect(w - 36 - cornerSize, 36, cornerSize, 6);
    ctx.fillRect(w - 42, 36, 6, cornerSize);
    ctx.fillRect(36, h - 42, cornerSize, 6);
    ctx.fillRect(36, h - 36 - cornerSize, 6, cornerSize);
    ctx.fillRect(w - 36 - cornerSize, h - 42, cornerSize, 6);
    ctx.fillRect(w - 42, h - 36 - cornerSize, 6, cornerSize);

    // 2. HEADER SECTION (Ultra-Crisp 4K White & Gold Typography)
    ctx.save();
    ctx.textAlign = 'center';

    // Top Category Pill
    ctx.fillStyle = '#E5C07B';
    ctx.font = '700 32px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('OFFICIAL VERIFIED CHANNELS', w / 2, 115);

    // Main Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 64px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Connect with Jubayer', w / 2, 195);

    // Subtitle instruction
    ctx.fillStyle = '#94A3B8';
    ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Direct links to verified media platforms • Click any card to launch', w / 2, 248);

    ctx.restore();

    // Divider Line
    ctx.strokeStyle = 'rgba(229, 192, 123, 0.35)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(100, 275);
    ctx.lineTo(w - 100, 275);
    ctx.stroke();

    // 3. RENDER 4 COMPACT SOCIAL CARDS (2x2 Grid)
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

    // Card Background (Smoked Dark Obsidian Glass)
    if (isHovered) {
      ctx.shadowColor = 'rgba(229, 192, 123, 0.45)';
      ctx.shadowBlur = 36;
      ctx.fillStyle = 'rgba(26, 31, 48, 0.98)';
    } else {
      ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
      ctx.shadowBlur = 20;
      ctx.fillStyle = 'rgba(16, 19, 29, 0.92)';
    }

    this.roundRect(ctx, x, y, w, h, 24);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Card Border
    if (isHovered) {
      ctx.strokeStyle = '#E5C07B';
      ctx.lineWidth = 5;
    } else {
      ctx.strokeStyle = 'rgba(229, 192, 123, 0.3)';
      ctx.lineWidth = 2.5;
    }
    this.roundRect(ctx, x, y, w, h, 24);
    ctx.stroke();

    // Top Accent Line
    ctx.fillStyle = isHovered ? '#E5C07B' : 'rgba(229, 192, 123, 0.5)';
    ctx.fillRect(x + 36, y + 4, w - 72, 5);

    // DRAW AUTHENTIC OFFICIAL ICON (Left Side)
    const iconX = x + 44;
    const iconY = y + 50;
    const iconSize = 116;

    if (card.id === 'youtube') {
      // YouTube Red Rounded Button with White Triangle
      this.roundRect(ctx, iconX, iconY, iconSize + 24, iconSize, 28);
      ctx.fillStyle = '#FF0000';
      ctx.fill();

      // Centered White Triangle
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      const triX = iconX + 56;
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

      this.roundRect(ctx, iconX, iconY, iconSize, iconSize, 28);
      ctx.fillStyle = grad;
      ctx.fill();

      // Camera Glyph
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 6;
      this.roundRect(ctx, iconX + 22, iconY + 22, iconSize - 44, iconSize - 44, 18);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, 16, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(iconX + iconSize - 36, iconY + 36, 5, 0, Math.PI * 2);
      ctx.fill();
    } else if (card.id === 'facebook') {
      // Facebook Blue Circle with 'f'
      ctx.beginPath();
      ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, iconSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = '#1877F2';
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 76px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('f', iconX + iconSize / 2 - 16, iconY + iconSize - 24);
    } else if (card.id === 'tiktok') {
      // TikTok Dark Squircle with Cyan & Magenta Note
      this.roundRect(ctx, iconX, iconY, iconSize, iconSize, 28);
      ctx.fillStyle = '#0F172A';
      ctx.fill();
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      this.roundRect(ctx, iconX, iconY, iconSize, iconSize, 28);
      ctx.stroke();

      // Note Glyph
      const nx = iconX + iconSize / 2 - 10;
      const ny = iconY + 28;

      // Cyan Shadow
      ctx.fillStyle = '#00f2fe';
      ctx.beginPath();
      ctx.arc(nx + 2, ny + 48, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(nx + 12, ny - 4, 8, 52);
      ctx.fillRect(nx + 12, ny - 4, 24, 10);

      // Pink Overlay
      ctx.fillStyle = '#fe0979';
      ctx.beginPath();
      ctx.arc(nx - 4, ny + 52, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(nx + 6, ny, 8, 52);
      ctx.fillRect(nx + 6, ny, 24, 10);

      // White Body
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(nx, ny + 50, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(nx + 10, ny - 2, 6, 50);
      ctx.fillRect(nx + 10, ny - 2, 20, 8);
    }

    // TEXT METADATA (Right of Icon)
    const textX = iconX + (card.id === 'youtube' ? iconSize + 50 : iconSize + 36);

    // Title (Crisp White)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 44px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(card.name, textX, y + 84);

    // Handle
    ctx.fillStyle = card.id === 'youtube' ? '#F87171' : card.id === 'instagram' ? '#F472B6' : card.id === 'facebook' ? '#60A5FA' : '#38BDF8';
    ctx.font = '700 30px "Plus Jakarta Sans", monospace';
    ctx.fillText(card.handle, textX, y + 136);

    // Brief Subtitle
    ctx.fillStyle = '#94A3B8';
    ctx.font = '400 26px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(card.desc, textX, y + 180);

    // BOTTOM ACTION BUTTON
    const btnY = y + h - 100;
    const btnH = 68;
    const btnW = w - 72;

    if (isHovered) {
      const gradBtn = ctx.createLinearGradient(x + 36, btnY, x + 36 + btnW, btnY);
      gradBtn.addColorStop(0, '#D97706');
      gradBtn.addColorStop(1, '#E5C07B');
      ctx.fillStyle = gradBtn;
      this.roundRect(ctx, x + 36, btnY, btnW, btnH, 12);
      ctx.fill();

      ctx.fillStyle = '#06070B';
      ctx.font = '800 28px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(card.actionText.toUpperCase(), x + 36 + btnW / 2, btnY + 44);
    } else {
      ctx.fillStyle = 'rgba(229, 192, 123, 0.12)';
      this.roundRect(ctx, x + 36, btnY, btnW, btnH, 12);
      ctx.fill();

      ctx.strokeStyle = 'rgba(229, 192, 123, 0.4)';
      ctx.lineWidth = 2;
      this.roundRect(ctx, x + 36, btnY, btnW, btnH, 12);
      ctx.stroke();

      ctx.fillStyle = '#E5C07B';
      ctx.font = '700 26px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(card.actionText, x + 36 + btnW / 2, btnY + 44);
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
