import * as THREE from 'three';

export default class ProjectsScreen {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.group = new THREE.Group();
    // Positioned gracefully in the center-rear of the showroom behind the turntable
    this.group.position.set(0, 0.25, -4.6);
    this.group.rotation.y = 0; // Faces directly forward toward camera
    this.scene.add(this.group);

    this.canvasWidth = 2048;
    this.canvasHeight = 1152;
    this.hoveredIndex = -1;
    this.currentSlide = 0;

    // Verified live Vercel projects discovered from user's account & local workspace
    this.projects = [
      {
        id: 'special-agent',
        title: 'Special Agent One',
        tag: 'AI AUTONOMOUS AGENT',
        desc: 'Autonomous Remote Job Hunter & Pitch Engine with terminal reasoning loops and multi-tool scheduling.',
        url: 'https://special-agent-one.vercel.app',
        tech: 'Next.js 15 • Python FastAPI • Multi-Agent',
        badge: 'LIVE ON VERCEL',
        color: '#10B981'
      },
      {
        id: 'electronics-importers',
        title: 'Electronics Importers BD',
        tag: 'B2B COMMERCIAL PORTAL',
        desc: 'Enterprise commercial electronics import directory, product search, and verified supplier matchmaking portal.',
        url: 'https://electronics-importers-bd.vercel.app',
        tech: 'Next.js 15 • React • Tailwind CSS',
        badge: 'LIVE ON VERCEL',
        color: '#0284C7'
      },
      {
        id: 'affan-labib',
        title: 'Affan Labib Editorial Blog',
        tag: 'CONTENT PUBLICATION',
        desc: 'High-performance modern blog & editorial publication with MDX engine and edge caching.',
        url: 'https://affan-labib-blog.vercel.app',
        tech: 'Next.js 15 • Cloudflare Edge • Tailwind',
        badge: 'LIVE ON VERCEL',
        color: '#7C3AED'
      },
      {
        id: 'mesk-studio',
        title: 'Mesk Creative Studio',
        tag: 'DIGITAL AGENCY',
        desc: 'Agency showcase with dynamic project reels, modern UI architecture, and responsive layouts.',
        url: 'https://mesk-nine.vercel.app',
        tech: 'Next.js 15 • WebGL • TypeScript',
        badge: 'LIVE ON VERCEL',
        color: '#D97706'
      },
      {
        id: 'ibrahim-profile',
        title: 'Ibrahim Portfolio Showcase',
        tag: 'EXECUTIVE SHOWCASE',
        desc: 'Modern personal portfolio with client deliverables, testimonials, and verified skill matrix.',
        url: 'https://ibrahim-jade.vercel.app',
        tech: 'React 19 • Tailwind CSS • Vercel Edge',
        badge: 'LIVE ON VERCEL',
        color: '#2563EB'
      },
      {
        id: 'world-platform',
        title: 'World 3D Spatial Canvas',
        tag: '3D WEBGL PLATFORM',
        desc: 'Interactive 3D geospatial environment visualization with real-time camera controls.',
        url: 'https://world-flame.vercel.app',
        tech: 'Three.js • WebGL • GSAP',
        badge: 'LIVE ON VERCEL',
        color: '#059669'
      }
    ];

    // Card grid rectangles on the 2048x1152 canvas
    this.cardRects = [
      { x: 120, y: 280, w: 860, h: 360 },
      { x: 1068, y: 280, w: 860, h: 360 },
      { x: 120, y: 680, w: 860, h: 360 },
      { x: 1068, y: 680, w: 860, h: 360 }
    ];

    this.setupCanvas();
    this.setMesh();
    this.setLighting();
    this.bindEvents();

    // Subtle automatic carousel every 6 seconds to rotate between page 1 and page 2
    setInterval(() => {
      this.currentSlide = (this.currentSlide === 0) ? 1 : 0;
      this.draw();
    }, 6000);
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
    // Showroom dark titanium material (Identical to StudioScreen & SocialScreen)
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

    // Exact identical dimensions: 2.36m width x 1.33m height (16:9)
    const chassisWidth = 2.36;
    const chassisHeight = 1.33;
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
    this.screenLight = new THREE.PointLight(0xfef3c7, 1.4, 6.0, 1.8);
    this.screenLight.position.set(0, 1.5, 0.8);
    this.group.add(this.screenLight);
  }

  draw() {
    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;

    // 1. Organic Warm Linen Parchment Background (Matching StudioScreen & SocialScreen)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#F8F4EC');
    bgGrad.addColorStop(0.5, '#EFE4D2');
    bgGrad.addColorStop(1, '#E4D5BC');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle warm bloom in upper header
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

    // 2. HEADER SECTION (Clean, human editorial typography)
    ctx.save();
    ctx.textAlign = 'center';

    // Top Category Pill
    ctx.fillStyle = '#10B981';
    ctx.font = '700 28px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('VERIFIED PRODUCTION DEPLOYMENTS • VERCEL CLOUD', w / 2, 105);

    // Main Title
    ctx.fillStyle = '#0A0908';
    ctx.font = '800 64px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Live Engineering Projects', w / 2, 180);

    // Subtitle & Slide Indicator
    ctx.fillStyle = '#57534E';
    ctx.font = '500 30px "Plus Jakarta Sans", sans-serif';
    const slideText = this.currentSlide === 0 ? 'Featured Projects (1-4 of 6)' : 'Enterprise & 3D Web (5-6 of 6)';
    ctx.fillText(`Click any card to launch the live application • ${slideText}`, w / 2, 235);
    ctx.restore();

    // 3. DRAW 4 PROJECT CARDS FOR THE CURRENT SLIDE
    const pageOffset = this.currentSlide * 2;
    const currentProjects = [
      this.projects[(pageOffset + 0) % this.projects.length],
      this.projects[(pageOffset + 1) % this.projects.length],
      this.projects[(pageOffset + 2) % this.projects.length],
      this.projects[(pageOffset + 3) % this.projects.length]
    ];

    this.cardRects.forEach((rect, index) => {
      const proj = currentProjects[index];
      if (!proj) return;

      const isHovered = (this.hoveredIndex === index);
      const { x, y, w: cw, h: ch } = rect;

      // Card Base Box
      ctx.save();
      ctx.shadowColor = isHovered ? 'rgba(212, 160, 56, 0.45)' : 'rgba(12, 10, 9, 0.12)';
      ctx.shadowBlur = isHovered ? 36 : 20;
      ctx.shadowOffsetY = isHovered ? 6 : 8;

      ctx.fillStyle = isHovered ? '#FFFFFF' : '#FCFAF7';
      this.roundRect(ctx, x, y, cw, ch, 20);
      ctx.fill();
      ctx.restore();

      // Card Border
      ctx.lineWidth = isHovered ? 4 : 2;
      ctx.strokeStyle = isHovered ? '#D4A038' : 'rgba(120, 83, 30, 0.22)';
      this.roundRect(ctx, x, y, cw, ch, 20);
      ctx.stroke();

      // Project Header Row: Tag & Live Indicator
      ctx.save();
      ctx.textAlign = 'left';

      // Left Category Tag
      ctx.fillStyle = proj.color || '#0284C7';
      ctx.font = '700 24px "Outfit", "Plus Jakarta Sans", sans-serif';
      ctx.fillText(proj.tag, x + 36, y + 55);

      // Right Live Pill
      ctx.textAlign = 'right';
      ctx.fillStyle = '#10B981';
      ctx.font = '700 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`●  ${proj.badge}`, x + cw - 36, y + 55);
      ctx.restore();

      // Project Title
      ctx.save();
      ctx.textAlign = 'left';
      ctx.fillStyle = '#0A0908';
      ctx.font = '800 42px "Outfit", "Plus Jakarta Sans", sans-serif';
      ctx.fillText(proj.title, x + 36, y + 115);

      // Project Description
      ctx.fillStyle = '#57534E';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      this.wrapText(ctx, proj.desc, x + 36, y + 165, cw - 72, 34);

      // Tech Stack
      ctx.fillStyle = '#0284C7';
      ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(proj.tech, x + 36, y + ch - 42);
      ctx.restore();

      // Launch Button in Bottom Right of Card
      const btnW = 210;
      const btnH = 56;
      const btnX = x + cw - btnW - 36;
      const btnY = y + ch - btnH - 24;

      ctx.save();
      ctx.fillStyle = isHovered ? '#0A0908' : '#10B981';
      this.roundRect(ctx, btnX, btnY, btnW, btnH, 14);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 24px "Outfit", "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Launch Live ↗', btnX + btnW / 2, btnY + 36);
      ctx.restore();
    });

    // Slide dots indicator at the bottom
    ctx.save();
    const dotY = h - 55;
    const dotSpacing = 30;
    const dotStartX = w / 2 - dotSpacing / 2;

    for (let d = 0; d < 2; d++) {
      ctx.fillStyle = this.currentSlide === d ? '#D4A038' : 'rgba(120, 83, 30, 0.28)';
      ctx.beginPath();
      ctx.arc(dotStartX + d * dotSpacing, dotY, this.currentSlide === d ? 8 : 6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    if (this.texture) this.texture.needsUpdate = true;
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let currY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, currY);
        line = words[n] + ' ';
        currY += lineHeight;
        if (currY > y + lineHeight * 2) break; // Limit to 2 lines
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currY);
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
        this.cardRects.forEach((rect, index) => {
          const { x, y, w, h } = rect;
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

        const pageOffset = this.currentSlide * 2;
        const currentProjects = [
          this.projects[(pageOffset + 0) % this.projects.length],
          this.projects[(pageOffset + 1) % this.projects.length],
          this.projects[(pageOffset + 2) % this.projects.length],
          this.projects[(pageOffset + 3) % this.projects.length]
        ];

        this.cardRects.forEach((rect, index) => {
          const { x, y, w, h } = rect;
          if (canvasX >= x && canvasX <= x + w && canvasY >= y && canvasY <= y + h) {
            const proj = currentProjects[index];
            if (proj && proj.url) {
              if (this.experience.sounds) {
                this.experience.sounds.playClick();
              }
              window.open(proj.url, '_blank');
            }
          }
        });
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown);
  }

  update(delta, elapsed) {
    // Canvas texture updates dynamically when slide changes or hovered
  }
}
