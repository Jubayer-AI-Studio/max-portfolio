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

    // All 8 verified live production deployments displayed simultaneously (no rotating slideshow)
    this.projects = [
      {
        id: 'special-agent',
        title: 'Special Agent One',
        tag: 'AI AUTONOMOUS AGENT',
        desc: 'Autonomous Remote Job Hunter & Pitch Engine with terminal reasoning loops and multi-tool scheduling.',
        url: 'https://special-agent-one.vercel.app',
        tech: 'Next.js 15 • Python • Multi-Agent',
        badge: 'LIVE ON VERCEL',
        accentColor: '#10B981'
      },
      {
        id: 'electronics-importers',
        title: 'Electronics Importers BD',
        tag: 'B2B COMMERCIAL PORTAL',
        desc: 'Enterprise commercial electronics import directory, product search, and verified supplier matchmaking portal.',
        url: 'https://electronics-importers-bd.vercel.app',
        tech: 'Next.js 15 • React • Tailwind CSS',
        badge: 'LIVE ON VERCEL',
        accentColor: '#0284C7'
      },
      {
        id: 'affan-labib',
        title: 'Affan Labib Editorial Blog',
        tag: 'CONTENT PUBLICATION',
        desc: 'High-performance modern publication with MDX engine, edge caching, and rich typography.',
        url: 'https://affan-labib-blog.vercel.app',
        tech: 'Next.js 15 • Cloudflare • Tailwind',
        badge: 'LIVE ON VERCEL',
        accentColor: '#7C3AED'
      },
      {
        id: 'mesk-studio',
        title: 'Mesk Creative Studio',
        tag: 'DIGITAL AGENCY',
        desc: 'Agency showcase with dynamic project reels, modern UI architecture, and responsive layouts.',
        url: 'https://mesk-nine.vercel.app',
        tech: 'Next.js 15 • WebGL • TypeScript',
        badge: 'LIVE ON VERCEL',
        accentColor: '#D97706'
      },
      {
        id: 'ibrahim-profile',
        title: 'Ibrahim Portfolio Showcase',
        tag: 'EXECUTIVE SHOWCASE',
        desc: 'Modern personal portfolio with client deliverables, testimonials, and verified skill matrix.',
        url: 'https://ibrahim-jade.vercel.app',
        tech: 'React 19 • Tailwind CSS • Vercel Edge',
        badge: 'LIVE ON VERCEL',
        accentColor: '#2563EB'
      },
      {
        id: 'world-platform',
        title: 'World 3D Spatial Canvas',
        tag: '3D WEBGL PLATFORM',
        desc: 'Interactive 3D geospatial environment visualization with real-time camera physics.',
        url: 'https://world-flame.vercel.app',
        tech: 'Three.js • WebGL • GSAP',
        badge: 'LIVE ON VERCEL',
        accentColor: '#059669'
      },
      {
        id: 'hasan-app',
        title: 'Hasan Production App',
        tag: 'PRODUCTION WEB APP',
        desc: 'Full-stack production dynamic web platform with cloud integration and responsive controls.',
        url: 'https://hasan-nine-flame.vercel.app',
        tech: 'Next.js • React • Cloudflare',
        badge: 'LIVE ON VERCEL',
        accentColor: '#DC2626'
      },
      {
        id: 'jubayer-studio',
        title: 'Jubayer Ahmad Studio',
        tag: 'VIP PORTFOLIO',
        desc: 'Digital identity showcase featuring software architecture deliverables and engineering blueprints.',
        url: 'https://jubayer-portfolio-delta.vercel.app',
        tech: 'Full-Stack • Modern UI • Responsive',
        badge: 'LIVE ON VERCEL',
        accentColor: '#B45309'
      }
    ];

    // 2 rows x 4 columns grid coordinates for all 8 cards on the 2048x1152 canvas
    const marginX = 70;
    const gapX = 24;
    const cardW = 459;
    const rowY0 = 205;
    const gapY = 24;
    const cardH = 439;
    const rowY1 = rowY0 + cardH + gapY; // 668

    this.cardRects = [
      { x: marginX + 0 * (cardW + gapX), y: rowY0, w: cardW, h: cardH },
      { x: marginX + 1 * (cardW + gapX), y: rowY0, w: cardW, h: cardH },
      { x: marginX + 2 * (cardW + gapX), y: rowY0, w: cardW, h: cardH },
      { x: marginX + 3 * (cardW + gapX), y: rowY0, w: cardW, h: cardH },
      { x: marginX + 0 * (cardW + gapX), y: rowY1, w: cardW, h: cardH },
      { x: marginX + 1 * (cardW + gapX), y: rowY1, w: cardW, h: cardH },
      { x: marginX + 2 * (cardW + gapX), y: rowY1, w: cardW, h: cardH },
      { x: marginX + 3 * (cardW + gapX), y: rowY1, w: cardW, h: cardH }
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
    // Showroom dark titanium material
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917,
      metalness: 0.92,
      roughness: 0.22
    });

    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.85,
      roughness: 0.25
    });

    // 1. Showroom floor pedestal base
    const baseGeo = new THREE.BoxGeometry(1.8, 0.04, 0.7);
    const base = new THREE.Mesh(baseGeo, metalMat);
    base.position.y = 0.02;
    base.receiveShadow = true;
    this.group.add(base);

    const chassisWidth = 2.6;
    const chassisHeight = 1.46; // 16:9 cinematic ratio
    const chassisDepth = 0.08;
    const chassisY = 1.52;
    const chassisBottomY = chassisY - chassisHeight / 2;

    // 2. Twin Support Stanchions
    const pillarHeight = chassisBottomY;
    const pillarGeo = new THREE.CylinderGeometry(0.045, 0.045, pillarHeight, 24);

    const pillar1 = new THREE.Mesh(pillarGeo, metalMat);
    pillar1.position.set(-0.7, pillarHeight / 2, 0);
    this.group.add(pillar1);

    const pillar2 = new THREE.Mesh(pillarGeo, metalMat);
    pillar2.position.set(0.7, pillarHeight / 2, 0);
    this.group.add(pillar2);

    // Warm Ochre accent collar rings
    const ringGeo = new THREE.CylinderGeometry(0.055, 0.055, 0.03, 24);
    const ring1 = new THREE.Mesh(ringGeo, bezelMat);
    ring1.position.set(-0.7, 0.42, 0);
    this.group.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, bezelMat);
    ring2.position.set(0.7, 0.42, 0);
    this.group.add(ring2);

    // Rear A-Frame strut brace
    const rearBraceGeo = new THREE.CylinderGeometry(0.022, 0.022, 1.1, 16);
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
      bezelMat
    );
    topBar.position.set(0, chassisY + chassisHeight / 2 + borderThickness / 2, borderZ);
    this.group.add(topBar);

    const bottomBar = new THREE.Mesh(
      new THREE.BoxGeometry(chassisWidth + borderThickness * 2, borderThickness, borderDepth),
      bezelMat
    );
    bottomBar.position.set(0, chassisY - chassisHeight / 2 - borderThickness / 2, borderZ);
    this.group.add(bottomBar);

    const leftBar = new THREE.Mesh(
      new THREE.BoxGeometry(borderThickness, chassisHeight, borderDepth),
      bezelMat
    );
    leftBar.position.set(-chassisWidth / 2 - borderThickness / 2, chassisY, borderZ);
    this.group.add(leftBar);

    const rightBar = new THREE.Mesh(
      new THREE.BoxGeometry(borderThickness, chassisHeight, borderDepth),
      bezelMat
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

    const backEmblemGeo = new THREE.RingGeometry(0.12, 0.15, 32);
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

    // 1. Organic Warm Linen Parchment Background (Matching StudioScreen & Showroom)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#F8F4EC');
    bgGrad.addColorStop(0.5, '#EFE4D2');
    bgGrad.addColorStop(1, '#E4D5BC');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle warm bloom in upper header
    const radial = ctx.createRadialGradient(w * 0.5, 100, 40, w * 0.5, 180, w * 0.6);
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

    // 2. HEADER SECTION (Compact, elegant, high legibility)
    ctx.save();
    ctx.textAlign = 'center';

    // Top Category Pill
    ctx.fillStyle = '#9A3412';
    ctx.font = '700 24px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('FEATURED PRODUCTION DEPLOYMENTS (8) • VERIFIED LIVE PLATFORMS', w / 2, 85);

    // Main Title
    ctx.fillStyle = '#0A0908';
    ctx.font = '800 48px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Engineered & Deployed by Jubayer Ahmad', w / 2, 142);

    // Subtitle instruction
    ctx.fillStyle = '#78531E';
    ctx.font = '500 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('All 8 live applications active simultaneously • Click any project card to launch directly in a new tab', w / 2, 178);

    ctx.restore();

    // Subtle header divider
    ctx.strokeStyle = 'rgba(212, 160, 56, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(70, 192);
    ctx.lineTo(w - 70, 192);
    ctx.stroke();

    // 3. RENDER ALL 8 PROJECT CARDS SIMULTANEOUSLY (2x4 Grid)
    this.projects.forEach((proj, index) => {
      const rect = this.cardRects[index];
      if (!rect) return;

      const isHovered = this.hoveredIndex === index;
      this.drawProjectCard(ctx, proj, rect, isHovered);
    });

    if (this.texture) {
      this.texture.needsUpdate = true;
    }
  }

  drawProjectCard(ctx, proj, rect, isHovered) {
    const { x, y, w, h } = rect;

    ctx.save();

    // Card Background
    if (isHovered) {
      ctx.shadowColor = 'rgba(212, 160, 56, 0.45)';
      ctx.shadowBlur = 24;
      ctx.fillStyle = '#FFFFFF';
    } else {
      ctx.shadowColor = 'rgba(10, 9, 8, 0.08)';
      ctx.shadowBlur = 12;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.88)';
    }

    this.roundRect(ctx, x, y, w, h, 14);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Card Border
    if (isHovered) {
      ctx.strokeStyle = '#D4A038';
      ctx.lineWidth = 3.5;
    } else {
      ctx.strokeStyle = 'rgba(212, 160, 56, 0.35)';
      ctx.lineWidth = 1.5;
    }
    this.roundRect(ctx, x, y, w, h, 14);
    ctx.stroke();

    // Subtle Top Accent Highlight Line on Card
    ctx.fillStyle = isHovered ? '#D4A038' : 'rgba(212, 160, 56, 0.4)';
    ctx.fillRect(x + 24, y + 2, w - 48, 3);

    // A. Card Top Metadata (Category Tag & Live Pulse Badge)
    // Tag pill
    ctx.fillStyle = isHovered ? '#78350F' : '#9A3412';
    ctx.font = '700 13px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(proj.tag, x + 24, y + 36);

    // Live Badge (Emerald Dot + LIVE text)
    const badgeX = x + w - 24;
    ctx.textAlign = 'right';

    ctx.beginPath();
    ctx.arc(badgeX - 78, y + 32, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#10B981';
    ctx.fill();

    ctx.fillStyle = '#065F46';
    ctx.font = '700 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('LIVE ON VERCEL', badgeX, y + 36);
    ctx.textAlign = 'left';

    // B. Project Title
    ctx.fillStyle = '#0A0908';
    ctx.font = '800 24px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(proj.title, x + 24, y + 78);

    // C. Tech Stack Badge Pill
    const techY = y + 104;
    ctx.fillStyle = '#FDF6E2';
    this.roundRect(ctx, x + 24, techY, w - 48, 28, 6);
    ctx.fill();
    ctx.strokeStyle = 'rgba(212, 160, 56, 0.4)';
    ctx.lineWidth = 1;
    this.roundRect(ctx, x + 24, techY, w - 48, 28, 6);
    ctx.stroke();

    ctx.fillStyle = '#854D0E';
    ctx.font = '600 13px "Plus Jakarta Sans", monospace';
    ctx.fillText(proj.tech, x + 34, techY + 19);

    // D. Description (Multi-line)
    ctx.fillStyle = '#4B463D';
    ctx.font = '400 15px "Plus Jakarta Sans", sans-serif';
    this.wrapText(ctx, proj.desc, x + 24, y + 165, w - 48, 22, 3);

    // E. Bottom Action Button
    const btnY = y + h - 58;
    const btnH = 42;
    const btnW = w - 48;

    if (isHovered) {
      const gradBtn = ctx.createLinearGradient(x + 24, btnY, x + 24 + btnW, btnY);
      gradBtn.addColorStop(0, '#B45309');
      gradBtn.addColorStop(1, '#D4A038');
      ctx.fillStyle = gradBtn;
      this.roundRect(ctx, x + 24, btnY, btnW, btnH, 8);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 15px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('LAUNCH APPLICATION ↗', x + 24 + btnW / 2, btnY + 26);
    } else {
      ctx.fillStyle = '#F4EDE2';
      this.roundRect(ctx, x + 24, btnY, btnW, btnH, 8);
      ctx.fill();

      ctx.strokeStyle = 'rgba(212, 160, 56, 0.45)';
      ctx.lineWidth = 1.2;
      this.roundRect(ctx, x + 24, btnY, btnW, btnH, 8);
      ctx.stroke();

      ctx.fillStyle = '#0A0908';
      ctx.font = '600 14px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Launch Project ↗', x + 24 + btnW / 2, btnY + 26);
    }

    ctx.restore();
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
    const words = text.split(' ');
    let line = '';
    let currY = y;
    let linesDrawn = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, currY);
        line = words[n] + ' ';
        currY += lineHeight;
        linesDrawn++;
        if (linesDrawn >= maxLines - 1) {
          // Truncate remaining
          let rest = words.slice(n).join(' ');
          while (ctx.measureText(rest + '...').width > maxWidth && rest.length > 0) {
            rest = rest.substring(0, rest.length - 1);
          }
          ctx.fillText(rest + '...', x, currY);
          return;
        }
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

        this.cardRects.forEach((rect, index) => {
          const { x, y, w, h } = rect;
          if (canvasX >= x && canvasX <= x + w && canvasY >= y && canvasY <= y + h) {
            const proj = this.projects[index];
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
    // Canvas texture updates dynamically when hovered
  }
}
