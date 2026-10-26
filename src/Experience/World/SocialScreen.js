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

    this.canvasWidth = 1024;
    this.canvasHeight = 680;
    this.hoveredIndex = -1;

    // 4 Official Verified Social Channels
    this.cards = [
      {
        id: 'youtube',
        name: 'YouTube',
        handle: '@jubayeraispecialist',
        desc: 'Official AI Tech & Studio Channel',
        color: '#FF0000',
        url: 'https://www.youtube.com/@jubayeraispecialist',
        actionText: 'Subscribe ↗',
        rect: { x: 50, y: 160, w: 435, h: 220 }
      },
      {
        id: 'instagram',
        name: 'Instagram',
        handle: '@jubayer_ahmad_2002',
        desc: 'Visual Stories & Daily Tech',
        color: '#E1306C',
        url: 'https://www.instagram.com/jubayer_ahmad_2002/',
        actionText: 'Follow ↗',
        rect: { x: 539, y: 160, w: 435, h: 220 }
      },
      {
        id: 'facebook',
        name: 'Facebook',
        handle: 'Jubayer Ahmad',
        desc: 'Personal Profile & Studio Page',
        color: '#1877F2',
        url: 'https://www.facebook.com/share/1CopAWZnyX/',
        actionText: 'Connect ↗',
        rect: { x: 50, y: 410, w: 435, h: 220 }
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        handle: '@jubayer_ahmad_2002',
        desc: 'Short AI Reels & Video Clips',
        color: '#000000',
        url: 'https://www.tiktok.com/@jubayer_ahmad_2002',
        actionText: 'Follow ↗',
        rect: { x: 539, y: 410, w: 435, h: 220 }
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
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.generateMipmaps = true;

    this.draw();
  }

  setMesh() {
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917,
      metalness: 0.92,
      roughness: 0.22
    });

    const ochreRingMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.85,
      roughness: 0.28
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
    const ring = new THREE.Mesh(ringGeo, ochreRingMat);
    ring.position.set(0, 0.38, 0);
    this.group.add(ring);

    // 3. Compact Display Chassis Box
    const chassisGeo = new THREE.BoxGeometry(chassisWidth, chassisHeight, chassisDepth);
    const chassis = new THREE.Mesh(chassisGeo, metalMat);
    chassis.position.set(0, chassisY, 0);
    chassis.castShadow = true;
    this.group.add(chassis);

    // Brushed Amber Gold Bezel Frame
    const frameGeo = new THREE.BoxGeometry(chassisWidth + 0.014, chassisHeight + 0.014, 0.012);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.84,
      roughness: 0.3
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(0, chassisY, 0.022);
    this.group.add(frame);

    // 4. FRONT Screen Surface (Canvas Texture)
    const screenGeo = new THREE.PlaneGeometry(chassisWidth - 0.02, chassisHeight - 0.02);
    this.screenMat = new THREE.MeshBasicMaterial({
      map: this.texture,
      toneMapped: false,
      side: THREE.FrontSide
    });
    this.screenMesh = new THREE.Mesh(screenGeo, this.screenMat);
    this.screenMesh.position.set(0, chassisY, 0.028);
    this.group.add(this.screenMesh);

    // 5. Solid Back Plate
    const backPlateGeo = new THREE.PlaneGeometry(chassisWidth - 0.015, chassisHeight - 0.015);
    const backPlateMat = new THREE.MeshStandardMaterial({
      color: 0x110f0e,
      metalness: 0.95,
      roughness: 0.2,
      side: THREE.FrontSide
    });
    const backPlate = new THREE.Mesh(backPlateGeo, backPlateMat);
    backPlate.position.set(0, chassisY, -0.024);
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

    // 1. Organic Warm Linen Parchment Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#F8F4EC');
    bgGrad.addColorStop(0.5, '#EFE4D2');
    bgGrad.addColorStop(1, '#E4D5BC');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Warm radial bloom in upper header
    const radial = ctx.createRadialGradient(w * 0.5, 60, 20, w * 0.5, 100, w * 0.6);
    radial.addColorStop(0, 'rgba(253, 230, 138, 0.25)');
    radial.addColorStop(1, 'rgba(253, 230, 138, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, w, h);

    // Warm Amber Bronze Hairline Frame
    ctx.strokeStyle = '#D4A038';
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.strokeStyle = 'rgba(120, 83, 30, 0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(28, 28, w - 56, h - 56);

    // Corner Architectural Accents
    const cornerSize = 20;
    ctx.fillStyle = '#D4A038';
    ctx.fillRect(18, 18, cornerSize, 3);
    ctx.fillRect(18, 18, 3, cornerSize);
    ctx.fillRect(w - 18 - cornerSize, 18, cornerSize, 3);
    ctx.fillRect(w - 21, 18, 3, cornerSize);
    ctx.fillRect(18, h - 21, cornerSize, 3);
    ctx.fillRect(18, h - 18 - cornerSize, 3, cornerSize);
    ctx.fillRect(w - 18 - cornerSize, h - 21, cornerSize, 3);
    ctx.fillRect(w - 21, h - 18 - cornerSize, 3, cornerSize);

    // 2. HEADER SECTION (Compact & Refined)
    ctx.save();
    ctx.textAlign = 'center';

    // Top Category Pill
    ctx.fillStyle = '#9A3412';
    ctx.font = '700 17px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('OFFICIAL SOCIAL CHANNELS', w / 2, 58);

    // Main Title
    ctx.fillStyle = '#0A0908';
    ctx.font = '800 32px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Connect with Jubayer', w / 2, 98);

    // Subtitle instruction
    ctx.fillStyle = '#78531E';
    ctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Click any official channel below to visit', w / 2, 126);

    ctx.restore();

    // Divider Line
    ctx.strokeStyle = 'rgba(212, 160, 56, 0.4)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(w - 50, 140);
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

    // Card Background
    if (isHovered) {
      ctx.shadowColor = 'rgba(212, 160, 56, 0.45)';
      ctx.shadowBlur = 18;
      ctx.fillStyle = '#FFFFFF';
    } else {
      ctx.shadowColor = 'rgba(10, 9, 8, 0.06)';
      ctx.shadowBlur = 8;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    }

    this.roundRect(ctx, x, y, w, h, 12);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Card Border
    if (isHovered) {
      ctx.strokeStyle = '#D4A038';
      ctx.lineWidth = 3;
    } else {
      ctx.strokeStyle = 'rgba(212, 160, 56, 0.35)';
      ctx.lineWidth = 1.2;
    }
    this.roundRect(ctx, x, y, w, h, 12);
    ctx.stroke();

    // Top Accent Line
    ctx.fillStyle = isHovered ? '#D4A038' : 'rgba(212, 160, 56, 0.4)';
    ctx.fillRect(x + 18, y + 2, w - 36, 2.5);

    // DRAW AUTHENTIC OFFICIAL ICON (Left Side)
    const iconX = x + 24;
    const iconY = y + 26;
    const iconSize = 58;

    if (card.id === 'youtube') {
      // YouTube Red Rounded Button with White Triangle
      this.roundRect(ctx, iconX, iconY, iconSize + 12, iconSize, 14);
      ctx.fillStyle = '#FF0000';
      ctx.fill();

      // Centered White Triangle
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      const triX = iconX + 28;
      const triY = iconY + iconSize / 2;
      ctx.moveTo(triX - 6, triY - 10);
      ctx.lineTo(triX + 10, triY);
      ctx.lineTo(triX - 6, triY + 10);
      ctx.closePath();
      ctx.fill();
    } else if (card.id === 'instagram') {
      // Instagram Sunset Gradient Squircle
      const grad = ctx.createLinearGradient(iconX, iconY + iconSize, iconX + iconSize, iconY);
      grad.addColorStop(0, '#FFDC80');
      grad.addColorStop(0.3, '#F56040');
      grad.addColorStop(0.6, '#E1306C');
      grad.addColorStop(1, '#405DE6');

      this.roundRect(ctx, iconX, iconY, iconSize, iconSize, 14);
      ctx.fillStyle = grad;
      ctx.fill();

      // Camera Glyph
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3;
      this.roundRect(ctx, iconX + 11, iconY + 11, iconSize - 22, iconSize - 22, 9);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, 8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(iconX + iconSize - 18, iconY + 18, 2.5, 0, Math.PI * 2);
      ctx.fill();
    } else if (card.id === 'facebook') {
      // Facebook Blue Circle with 'f'
      ctx.beginPath();
      ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, iconSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = '#1877F2';
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 38px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('f', iconX + iconSize / 2 - 8, iconY + iconSize - 12);
    } else if (card.id === 'tiktok') {
      // TikTok Black Squircle with Cyan & Magenta Note
      this.roundRect(ctx, iconX, iconY, iconSize, iconSize, 14);
      ctx.fillStyle = '#000000';
      ctx.fill();

      // Note Glyph
      const nx = iconX + iconSize / 2 - 5;
      const ny = iconY + 14;

      // Cyan Shadow
      ctx.fillStyle = '#00f2fe';
      ctx.beginPath();
      ctx.arc(nx + 1, ny + 24, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(nx + 6, ny - 2, 4, 26);
      ctx.fillRect(nx + 6, ny - 2, 12, 5);

      // Pink Overlay
      ctx.fillStyle = '#fe0979';
      ctx.beginPath();
      ctx.arc(nx - 2, ny + 26, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(nx + 3, ny, 4, 26);
      ctx.fillRect(nx + 3, ny, 12, 5);

      // White Body
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(nx, ny + 25, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(nx + 5, ny, 3, 25);
      ctx.fillRect(nx + 5, ny, 10, 4);
    }

    // TEXT METADATA (Right of Icon)
    const textX = iconX + (card.id === 'youtube' ? iconSize + 26 : iconSize + 18);

    // Title
    ctx.fillStyle = '#0A0908';
    ctx.font = '800 22px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(card.name, textX, y + 42);

    // Handle
    ctx.fillStyle = card.id === 'youtube' ? '#B91C1C' : card.id === 'instagram' ? '#BE185D' : card.id === 'facebook' ? '#1D4ED8' : '#374151';
    ctx.font = '700 15px "Plus Jakarta Sans", monospace';
    ctx.fillText(card.handle, textX, y + 68);

    // Brief Subtitle
    ctx.fillStyle = '#6B7280';
    ctx.font = '400 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(card.desc, textX, y + 90);

    // BOTTOM ACTION BUTTON
    const btnY = y + h - 50;
    const btnH = 34;
    const btnW = w - 36;

    if (isHovered) {
      const gradBtn = ctx.createLinearGradient(x + 18, btnY, x + 18 + btnW, btnY);
      gradBtn.addColorStop(0, '#B45309');
      gradBtn.addColorStop(1, '#D4A038');
      ctx.fillStyle = gradBtn;
      this.roundRect(ctx, x + 18, btnY, btnW, btnH, 6);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 14px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(card.actionText.toUpperCase(), x + 18 + btnW / 2, btnY + 22);
    } else {
      ctx.fillStyle = '#F4EDE2';
      this.roundRect(ctx, x + 18, btnY, btnW, btnH, 6);
      ctx.fill();

      ctx.strokeStyle = 'rgba(212, 160, 56, 0.45)';
      ctx.lineWidth = 1;
      this.roundRect(ctx, x + 18, btnY, btnW, btnH, 6);
      ctx.stroke();

      ctx.fillStyle = '#0A0908';
      ctx.font = '600 13px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(card.actionText, x + 18 + btnW / 2, btnY + 22);
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
