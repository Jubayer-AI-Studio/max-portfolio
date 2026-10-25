import * as THREE from 'three';

export default class SocialScreen {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.group = new THREE.Group();
    // Positioned gracefully on the right gallery curve, perfectly mirroring StudioScreen on the left
    this.group.position.set(4.2, 0, -1.8);
    this.group.rotation.y = -Math.PI / 3.0; // ~ -60 degrees toward showroom center
    this.scene.add(this.group);

    this.canvasWidth = 2048;
    this.canvasHeight = 1152;
    this.hoveredIndex = -1;

    this.cards = [
      {
        id: 'youtube',
        name: 'YouTube',
        handle: '@jubayeraispecialist',
        desc: 'Official AI & Creative Tech Channel',
        color: '#FF0000',
        url: 'https://www.youtube.com/@jubayeraispecialist',
        actionText: 'Subscribe ↗',
        rect: { x: 120, y: 280, w: 860, h: 360 }
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        handle: '@jubayer_ahmad_2002',
        desc: 'Short AI Videos & Creative Reels',
        color: '#000000',
        url: 'https://www.tiktok.com/@jubayer_ahmad_2002',
        actionText: 'Follow ↗',
        rect: { x: 1068, y: 280, w: 860, h: 360 }
      },
      {
        id: 'facebook',
        name: 'Facebook',
        handle: 'Jubayer Ahmad & Studio Page',
        desc: 'Personal Profile & Official Studio Page',
        color: '#1877F2',
        url: 'https://www.facebook.com/share/1CopAWZnyX/',
        actionText: 'Connect ↗',
        rect: { x: 120, y: 680, w: 860, h: 360 }
      },
      {
        id: 'instagram',
        name: 'Instagram',
        handle: '@jubayer_ahmad_2002',
        desc: 'Visual Stories & Lifestyle',
        color: '#E1306C',
        url: 'https://www.instagram.com/jubayer_ahmad_2002/',
        actionText: 'Follow ↗',
        rect: { x: 1068, y: 680, w: 860, h: 360 }
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
    // Showroom dark titanium material
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

    // 1. Showroom floor pedestal base
    const baseGeo = new THREE.BoxGeometry(1.5, 0.04, 0.7);
    const base = new THREE.Mesh(baseGeo, metalMat);
    base.position.y = 0.02;
    base.receiveShadow = true;
    this.group.add(base);

    const chassisWidth = 2.36;
    const chassisHeight = 1.33; // 16:9 ratio
    const chassisDepth = 0.08;
    const chassisY = 1.5;
    const chassisBottomY = chassisY - chassisHeight / 2; // 0.835m

    // 2. Twin Support Stanchions
    const pillarHeight = chassisBottomY;
    const pillarGeo = new THREE.CylinderGeometry(0.04, 0.04, pillarHeight, 24);

    const pillar1 = new THREE.Mesh(pillarGeo, metalMat);
    pillar1.position.set(-0.6, pillarHeight / 2, 0);
    this.group.add(pillar1);

    const pillar2 = new THREE.Mesh(pillarGeo, metalMat);
    pillar2.position.set(0.6, pillarHeight / 2, 0);
    this.group.add(pillar2);

    // Warm Ochre accent collar rings
    const ringGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.03, 24);
    const ring1 = new THREE.Mesh(ringGeo, ochreRingMat);
    ring1.position.set(-0.6, 0.42, 0);
    this.group.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ochreRingMat);
    ring2.position.set(0.6, 0.42, 0);
    this.group.add(ring2);

    // Rear A-Frame strut brace
    const rearBraceGeo = new THREE.CylinderGeometry(0.02, 0.02, 1.0, 16);
    const rearBrace = new THREE.Mesh(rearBraceGeo, metalMat);
    rearBrace.position.set(0, 0.45, -0.22);
    rearBrace.rotation.x = -Math.PI / 6;
    this.group.add(rearBrace);

    // 3. Display Chassis Box
    const chassisGeo = new THREE.BoxGeometry(chassisWidth, chassisHeight, chassisDepth);
    const chassis = new THREE.Mesh(chassisGeo, metalMat);
    chassis.position.set(0, chassisY, 0);
    chassis.castShadow = true;
    this.group.add(chassis);

    // Brushed Amber Gold Bezel Frame
    const frameGeo = new THREE.BoxGeometry(chassisWidth + 0.02, chassisHeight + 0.02, 0.016);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.84,
      roughness: 0.3
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(0, chassisY, 0.036);
    this.group.add(frame);

    // 4. FRONT Screen Surface (Canvas Texture)
    const screenGeo = new THREE.PlaneGeometry(chassisWidth - 0.03, chassisHeight - 0.03);
    this.screenMat = new THREE.MeshBasicMaterial({
      map: this.texture,
      toneMapped: false,
      side: THREE.FrontSide
    });
    this.screenMesh = new THREE.Mesh(screenGeo, this.screenMat);
    this.screenMesh.position.set(0, chassisY, 0.045);
    this.group.add(this.screenMesh);

    // 5. Solid Back Plate
    const backPlateGeo = new THREE.PlaneGeometry(chassisWidth - 0.02, chassisHeight - 0.02);
    const backPlateMat = new THREE.MeshStandardMaterial({
      color: 0x110f0e,
      metalness: 0.95,
      roughness: 0.2,
      side: THREE.FrontSide
    });
    const backPlate = new THREE.Mesh(backPlateGeo, backPlateMat);
    backPlate.position.set(0, chassisY, -0.042);
    backPlate.rotation.y = Math.PI;
    this.group.add(backPlate);

    const backEmblemGeo = new THREE.RingGeometry(0.1, 0.13, 32);
    const backEmblem = new THREE.Mesh(backEmblemGeo, ochreRingMat);
    backEmblem.position.set(0, chassisY, -0.044);
    backEmblem.rotation.y = Math.PI;
    this.group.add(backEmblem);
  }

  setLighting() {
    this.screenLight = new THREE.PointLight(0xfef3c7, 1.2, 5.0, 1.8);
    this.screenLight.position.set(0, 1.5, 0.8);
    this.group.add(this.screenLight);
  }

  draw() {
    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;

    // 1. Organic Warm Linen Parchment Background (Matching StudioScreen)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#F8F4EC');
    bgGrad.addColorStop(0.5, '#EFE4D2');
    bgGrad.addColorStop(1, '#E4D5BC');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Warm radial bloom in upper header
    const radial = ctx.createRadialGradient(w * 0.5, 120, 40, w * 0.5, 200, w * 0.6);
    radial.addColorStop(0, 'rgba(253, 230, 138, 0.22)');
    radial.addColorStop(1, 'rgba(253, 230, 138, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, w, h);

    // Warm Amber Bronze Hairline Frame
    ctx.strokeStyle = '#D4A038';
    ctx.lineWidth = 4;
    ctx.strokeRect(32, 32, w - 64, h - 64);

    ctx.strokeStyle = 'rgba(120, 83, 30, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(46, 46, w - 92, h - 92);

    // Corner Architectural Accents
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

    // 2. HEADER SECTION (Clean, human, editorial typography)
    ctx.save();
    ctx.textAlign = 'center';

    // Top Category Pill
    ctx.fillStyle = '#9A3412';
    ctx.font = '700 30px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('OFFICIAL CHANNELS • VERIFIED SOCIAL HUBS', w / 2, 115);

    // Main Title
    ctx.fillStyle = '#0A0908';
    ctx.font = '800 68px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Connect with Jubayer Ahmad', w / 2, 195);

    // Subtitle
    ctx.fillStyle = '#57534E';
    ctx.font = '500 32px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Click any card to open the verified official platform directly', w / 2, 255);
    ctx.restore();

    // 3. DRAW 4 AUTHENTIC SOCIAL MEDIA CARDS
    this.cards.forEach((card, index) => {
      const isHovered = (this.hoveredIndex === index);
      const { x, y, w: cw, h: ch } = card.rect;

      // Card Base Box
      ctx.save();
      ctx.shadowColor = isHovered ? 'rgba(212, 160, 56, 0.45)' : 'rgba(12, 10, 9, 0.12)';
      ctx.shadowBlur = isHovered ? 36 : 22;
      ctx.shadowOffsetY = isHovered ? 6 : 8;

      // Card Background (Pure solid white)
      ctx.fillStyle = isHovered ? '#FFFFFF' : '#FCFAF7';
      this.roundRect(ctx, x, y, cw, ch, 24);
      ctx.fill();
      ctx.restore();

      // Card Border
      ctx.lineWidth = isHovered ? 4 : 2;
      ctx.strokeStyle = isHovered ? '#D4A038' : 'rgba(120, 83, 30, 0.22)';
      this.roundRect(ctx, x, y, cw, ch, 24);
      ctx.stroke();

      // Draw Platform Official Icon Box
      const iconBoxX = x + 40;
      const iconBoxY = y + 45;
      const iconBoxSize = 130;

      if (card.id === 'youtube') {
        this.drawYouTubeIcon(ctx, iconBoxX, iconBoxY, iconBoxSize);
      } else if (card.id === 'tiktok') {
        this.drawTikTokIcon(ctx, iconBoxX, iconBoxY, iconBoxSize);
      } else if (card.id === 'facebook') {
        this.drawFacebookIcon(ctx, iconBoxX, iconBoxY, iconBoxSize);
      } else if (card.id === 'instagram') {
        this.drawInstagramIcon(ctx, iconBoxX, iconBoxY, iconBoxSize);
      }

      // Text Information (Title, Handle, Subtitle)
      const textX = iconBoxX + iconBoxSize + 36;
      ctx.save();
      ctx.textAlign = 'left';

      // Title
      ctx.fillStyle = '#0A0908';
      ctx.font = '800 48px "Outfit", "Plus Jakarta Sans", sans-serif';
      ctx.fillText(card.name, textX, y + 90);

      // Handle
      ctx.fillStyle = card.color === '#000000' ? '#1E293B' : card.color;
      ctx.font = '700 32px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(card.handle, textX, y + 140);

      // Description
      ctx.fillStyle = '#78716C';
      ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(card.desc, textX, y + 190);
      ctx.restore();

      // Action Button in Bottom Right of Card
      const btnW = 260;
      const btnH = 68;
      const btnX = x + cw - btnW - 36;
      const btnY = y + ch - btnH - 36;

      ctx.save();
      ctx.fillStyle = isHovered ? '#0A0908' : (card.color === '#000000' ? '#0F172A' : card.color);
      this.roundRect(ctx, btnX, btnY, btnW, btnH, 16);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 28px "Outfit", "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(card.actionText, btnX + btnW / 2, btnY + 44);
      ctx.restore();
    });

    if (this.texture) this.texture.needsUpdate = true;
  }

  // 1. Authentic YouTube Red Button Logo
  drawYouTubeIcon(ctx, x, y, size) {
    ctx.save();
    // YouTube Official Red rounded rectangle
    ctx.fillStyle = '#FF0000';
    this.roundRect(ctx, x, y + 10, size, size - 20, 28);
    ctx.fill();

    // Pure White Centered Play Triangle
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    const triW = size * 0.32;
    const triH = size * 0.36;
    const triX = x + (size - triW) / 2 + 4;
    const triY = y + size / 2;
    ctx.moveTo(triX, triY - triH / 2);
    ctx.lineTo(triX + triW, triY);
    ctx.lineTo(triX, triY + triH / 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // 2. Authentic TikTok Official Logo
  drawTikTokIcon(ctx, x, y, size) {
    ctx.save();
    // Black rounded squircle
    ctx.fillStyle = '#000000';
    this.roundRect(ctx, x, y, size, size, 28);
    ctx.fill();

    // Iconic TikTok Note with Cyan (#00F2FE) and Magenta (#FE0979) 3D chromatic aberration
    const cx = x + size / 2 - 2;
    const cy = y + size / 2 + 2;
    const s = size * 0.007;

    const drawNote = (color, ox, oy) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      // Stem & top hook
      ctx.fillRect(cx + 8 * s + ox, cy - 35 * s + oy, 14 * s, 48 * s);
      // Top flag
      ctx.beginPath();
      ctx.arc(cx + 26 * s + ox, cy - 32 * s + oy, 22 * s, Math.PI, Math.PI * 0.45, true);
      ctx.lineTo(cx + 22 * s + ox, cy - 14 * s + oy);
      ctx.arc(cx + 22 * s + ox, cy - 24 * s + oy, 12 * s, Math.PI * 0.45, Math.PI, false);
      ctx.closePath();
      ctx.fill();
      // Lower bulb
      ctx.beginPath();
      ctx.arc(cx - 10 * s + ox, cy + 14 * s + oy, 20 * s, 0, Math.PI * 2);
      ctx.fill();
    };

    drawNote('#00F2FE', -3, -2); // Cyan left shadow
    drawNote('#FE0979', 3, 2);   // Magenta right shadow
    drawNote('#FFFFFF', 0, 0);   // Crisp White Core
    ctx.restore();
  }

  // 3. Authentic Facebook Blue Icon
  drawFacebookIcon(ctx, x, y, size) {
    ctx.save();
    // Facebook Official Blue Circle
    ctx.fillStyle = '#1877F2';
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();

    // Bold Crisp White 'f'
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `800 ${Math.round(size * 0.78)}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('f', x + size / 2 + 6, y + size / 2 + 8);
    ctx.restore();
  }

  // 4. Authentic Instagram Sunset Gradient Icon
  drawInstagramIcon(ctx, x, y, size) {
    ctx.save();
    // Luxury Instagram Sunset Gradient
    const grad = ctx.createLinearGradient(x, y + size, x + size, y);
    grad.addColorStop(0, '#FFDC80');
    grad.addColorStop(0.25, '#F77737');
    grad.addColorStop(0.5, '#F56040');
    grad.addColorStop(0.75, '#FD1D1D');
    grad.addColorStop(1, '#833AB4');

    ctx.fillStyle = grad;
    this.roundRect(ctx, x, y, size, size, 28);
    ctx.fill();

    // Crisp White Camera Outline
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = Math.round(size * 0.08);
    const pad = size * 0.22;
    this.roundRect(ctx, x + pad, y + pad, size - pad * 2, size - pad * 2, 20);
    ctx.stroke();

    // Central Lens Circle
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, size * 0.22, 0, Math.PI * 2);
    ctx.stroke();

    // Flash Dot
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(x + size * 0.74, y + size * 0.28, size * 0.05, 0, Math.PI * 2);
    ctx.fill();
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
    // 3D Raycasting Hover & Click
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

        this.cards.forEach((card) => {
          const { x, y, w, h } = card.rect;
          if (canvasX >= x && canvasX <= x + w && canvasY >= y && canvasY <= y + h) {
            if (this.experience.sounds) {
              this.experience.sounds.playClick();
            }
            window.open(card.url, '_blank');
          }
        });
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown);
  }

  update(delta, elapsed) {
    // Canvas updates only on hover/draw changes to preserve performance
  }
}
