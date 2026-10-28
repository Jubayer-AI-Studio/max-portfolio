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
    this.lastGlowUpdate = 0;
    this.glowPhase = 0;

    // All 10 Verified Live Production Deployments Across Cloudflare & Vercel
    this.projects = [
      {
        id: 'special-agent',
        title: 'Special Agent One',
        tag: 'AI AUTONOMOUS AGENT',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'special-agent-one.vercel.app',
        desc: 'Autonomous 24/7 client hunter & mission control with terminal reasoning and automated workflow dispatch.',
        url: 'https://special-agent-one.vercel.app',
        tech: 'Next.js 15 • Python • Multi-Agent',
        accentColor: '#10B981'
      },
      {
        id: 'rihlah-gadget',
        title: 'Rihlah Gadget Shop',
        tag: 'E-COMMERCE PWA STORE',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'rihlah-gadget-shop.pages.dev',
        desc: 'High-speed electronic gadget e-commerce portal with fast edge cart, PWA offline support, and verified billing.',
        url: 'https://rihlah-gadget-shop.pages.dev',
        tech: 'Next.js 15 • Cloudflare • Tailwind',
        accentColor: '#F59E0B'
      },
      {
        id: 'electronics-importers',
        title: 'Electronics Importers BD',
        tag: 'B2B COMMERCIAL PORTAL',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'electronics-importers-bd.vercel.app',
        desc: 'Enterprise commercial electronics import directory, product search, and verified supplier matchmaking portal.',
        url: 'https://electronics-importers-bd.vercel.app',
        tech: 'Next.js 15 • React • Cloudflare',
        accentColor: '#0284C7'
      },
      {
        id: 'affan-labib',
        title: 'Affan Labib Editorial Blog',
        tag: 'CONTENT PUBLICATION',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'affan-labib-blog.vercel.app',
        desc: 'High-performance modern publication with MDX engine, sub-350ms edge caching, and rich literary typography.',
        url: 'https://affan-labib-blog.vercel.app',
        tech: 'Astro v5 • Cloudflare • Tailwind',
        accentColor: '#8B5CF6'
      },
      {
        id: 'mesk-studio',
        title: 'Mesk Creative Studio',
        tag: 'PUBLISHING & AI BOT',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'mesk-nine.vercel.app',
        desc: 'Islamic publishing house & literature catalog with integrated WhatsApp AI customer support bot automation.',
        url: 'https://mesk-nine.vercel.app',
        tech: 'Next.js 15 • WhatsApp AI • TypeScript',
        accentColor: '#D97706'
      },
      {
        id: 'ibrahim-profile',
        title: 'Ibrahim Portfolio Showcase',
        tag: 'AUTHOR & SCHOLAR SHOWCASE',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'ibrahim-jade.vercel.app',
        desc: 'Personal author and scholar portal with interactive publication reader, client deliverables, and verified matrix.',
        url: 'https://ibrahim-jade.vercel.app',
        tech: 'React 19 • Cloudflare • Tailwind CSS',
        accentColor: '#3B82F6'
      },
      {
        id: 'kawsar-profile',
        title: 'Kawsar Ahmad Profile',
        tag: 'WRITER & TRANSLATOR',
        provider: 'VERCEL',
        badgeText: 'VERCEL LIVE',
        domain: 'kawsar-seven.vercel.app',
        desc: 'Author, thinker, and literary translator portfolio with dynamic articles, book showcase, and verified contact matrix.',
        url: 'https://kawsar-seven.vercel.app',
        tech: 'Next.js 15 • React • Vercel Edge',
        accentColor: '#06B6D4'
      },
      {
        id: 'hasan-app',
        title: 'Hasan Life Guide',
        tag: 'MENTORSHIP PLATFORM',
        provider: 'CLOUDFLARE',
        badgeText: 'CLOUDFLARE EDGE',
        domain: 'hasan-portfolio-avn.pages.dev',
        desc: 'Modern personal mentorship & life guidance web app featuring interactive modules, articles, and cloud sync.',
        url: 'https://hasan-portfolio-avn.pages.dev',
        tech: 'TypeScript • Cloudflare Pages • CSS3',
        accentColor: '#EC4899'
      },
      {
        id: 'smritir-canvas',
        title: 'Smritir Canvas (Maaz)',
        tag: 'LITERARY PORTFOLIO',
        provider: 'CLOUDFLARE',
        badgeText: 'CLOUDFLARE EDGE',
        domain: 'maaz-canvas.pages.dev',
        desc: 'Literary memoir & writer portfolio portal featuring Bengali typography, book archives, and smooth mobile UX.',
        url: 'https://maaz-canvas.pages.dev',
        tech: 'HTML5 • Cloudflare Pages • Web Audio',
        accentColor: '#10B981'
      },
      {
        id: 'jubayer-studio',
        title: 'Jubayer Ahmad VIP Studio',
        tag: 'EXECUTIVE VIP PORTFOLIO',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'jubayer-portfolio.pages.dev',
        desc: 'Principal engineer showcase featuring full-stack architecture, 3D WebGL physics, and 28+ verified GitHub repositories.',
        url: 'https://jubayer-portfolio.pages.dev',
        tech: 'Three.js • Cloudflare • Next.js 15',
        accentColor: '#E5C07B'
      }
    ];

    // Mathematical 2 rows x 5 columns grid: 10 uniform cards of exactly identical size
    const marginX = 64;
    const gapX = 20;
    const cardW = 368;
    const cardH = 434;
    const gapY = 24;
    const rowY0 = 208;
    const rowY1 = rowY0 + cardH + gapY; // 666

    this.cardRects = [];
    for (let i = 0; i < 10; i++) {
      const col = i % 5;
      const row = Math.floor(i / 5);
      this.cardRects.push({
        x: marginX + col * (cardW + gapX),
        y: row === 0 ? rowY0 : rowY1,
        w: cardW,
        h: cardH
      });
    }

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

    const baseGeo = new THREE.BoxGeometry(3.6, 0.05, 0.9);
    const base = new THREE.Mesh(baseGeo, metalMat);
    base.position.y = 0.025;
    base.receiveShadow = true;
    this.group.add(base);

    const chassisWidth = 4.2;
    const chassisHeight = 2.36;
    const chassisDepth = 0.08;
    const chassisY = 1.62;
    const chassisBottomY = chassisY - chassisHeight / 2;

    const pillarHeight = chassisBottomY;
    const pillarGeo = new THREE.CylinderGeometry(0.045, 0.045, pillarHeight, 24);

    const pillar1 = new THREE.Mesh(pillarGeo, metalMat);
    pillar1.position.set(-1.25, pillarHeight / 2, 0);
    this.group.add(pillar1);

    const pillar2 = new THREE.Mesh(pillarGeo, metalMat);
    pillar2.position.set(1.25, pillarHeight / 2, 0);
    this.group.add(pillar2);

    const ringGeo = new THREE.CylinderGeometry(0.056, 0.056, 0.03, 24);
    const ring1 = new THREE.Mesh(ringGeo, bezelMat);
    ring1.position.set(-1.25, 0.22, 0);
    this.group.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, bezelMat);
    ring2.position.set(1.25, 0.22, 0);
    this.group.add(ring2);

    const chassisGeo = new THREE.BoxGeometry(chassisWidth, chassisHeight, chassisDepth);
    const chassis = new THREE.Mesh(chassisGeo, metalMat);
    chassis.position.set(0, chassisY, 0);
    chassis.castShadow = true;
    this.group.add(chassis);

    const borderThickness = 0.024;
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
    this.screenLight = new THREE.PointLight(0xfef3c7, 1.4, 6.0, 1.8);
    this.screenLight.position.set(0, 1.5, 0.8);
    this.group.add(this.screenLight);
  }

  draw() {
    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;
    const glowIntensity = 0.5 + Math.sin(this.glowPhase) * 0.5;

    // 1. Hollywood Smoked Obsidian OLED Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#06070B');
    bgGrad.addColorStop(0.5, '#0B0D14');
    bgGrad.addColorStop(1, '#10131F');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Warm radial bloom in upper header
    const radial = ctx.createRadialGradient(w * 0.5, 100, 40, w * 0.5, 180, w * 0.6);
    radial.addColorStop(0, 'rgba(229, 192, 123, 0.18)');
    radial.addColorStop(1, 'rgba(229, 192, 123, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, w, h);

    // Warm Champagne Gold Hairline Frame
    ctx.strokeStyle = '#E5C07B';
    ctx.lineWidth = 4;
    ctx.strokeRect(32, 32, w - 64, h - 64);

    ctx.strokeStyle = 'rgba(229, 192, 123, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(46, 46, w - 92, h - 92);

    // Corner Architectural Accents
    const cornerSize = 36;
    ctx.fillStyle = '#E5C07B';
    ctx.fillRect(28, 28, cornerSize, 4);
    ctx.fillRect(28, 28, 4, cornerSize);
    ctx.fillRect(w - 28 - cornerSize, 28, cornerSize, 4);
    ctx.fillRect(w - 32, 28, 4, cornerSize);
    ctx.fillRect(28, h - 32, cornerSize, 4);
    ctx.fillRect(28, h - 28 - cornerSize, 4, cornerSize);
    ctx.fillRect(w - 28 - cornerSize, h - 32, cornerSize, 4);
    ctx.fillRect(w - 32, h - 28 - cornerSize, 4, cornerSize);

    // 2. HEADER SECTION (Ultra-Crisp 4K White & Gold Typography)
    ctx.save();
    ctx.textAlign = 'center';

    // Top Category Pill
    ctx.fillStyle = '#E5C07B';
    ctx.font = '700 22px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('VERIFIED PRODUCTION DEPLOYMENTS (10) • CLOUDFLARE EDGE & VERCEL LIVE', w / 2, 80);

    // Main Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 46px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Engineered & Deployed by Jubayer Ahmad', w / 2, 134);

    // Subtitle instruction
    ctx.fillStyle = '#94A3B8';
    ctx.font = '500 19px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('All 10 production platforms live simultaneously • Click any project card to launch in a new tab', w / 2, 170);

    ctx.restore();

    // Subtle header divider
    ctx.strokeStyle = 'rgba(229, 192, 123, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(64, 188);
    ctx.lineTo(w - 64, 188);
    ctx.stroke();

    // 3. RENDER ALL 10 PROJECT CARDS (2x5 Grid)
    this.projects.forEach((proj, index) => {
      const rect = this.cardRects[index];
      if (!rect) return;

      const isHovered = this.hoveredIndex === index;
      this.drawProjectCard(ctx, proj, rect, isHovered, glowIntensity);
    });

    if (this.texture) {
      this.texture.needsUpdate = true;
    }
  }

  drawProjectCard(ctx, proj, rect, isHovered, glowIntensity) {
    const { x, y, w, h } = rect;
    const isDual = proj.provider === 'DUAL';

    ctx.save();

    // Card Background (Smoked Dark Obsidian Glass with Real-Time Luminous Neon Glow)
    if (isHovered) {
      ctx.shadowColor = 'rgba(229, 192, 123, 0.65)';
      ctx.shadowBlur = 28;
      ctx.fillStyle = 'rgba(26, 31, 48, 0.98)';
    } else {
      ctx.shadowColor = isDual 
        ? `rgba(52, 211, 153, ${0.18 + 0.22 * glowIntensity})` 
        : `rgba(229, 192, 123, ${0.18 + 0.18 * glowIntensity})`;
      ctx.shadowBlur = 10 + 10 * glowIntensity;
      ctx.fillStyle = 'rgba(14, 17, 26, 0.93)';
    }

    this.roundRect(ctx, x, y, w, h, 14);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Card Glowing Border
    if (isHovered) {
      ctx.strokeStyle = '#E5C07B';
      ctx.lineWidth = 3;
    } else {
      ctx.strokeStyle = isDual
        ? `rgba(52, 211, 153, ${0.3 + 0.25 * glowIntensity})`
        : `rgba(229, 192, 123, ${0.3 + 0.25 * glowIntensity})`;
      ctx.lineWidth = 1.6;
    }
    this.roundRect(ctx, x, y, w, h, 14);
    ctx.stroke();

    // Top Glowing Accent Line
    const topGrad = ctx.createLinearGradient(x + 20, y + 2, x + w - 20, y + 2);
    if (isDual) {
      topGrad.addColorStop(0, '#10B981');
      topGrad.addColorStop(0.5, '#E5C07B');
      topGrad.addColorStop(1, '#0284C7');
    } else if (proj.provider === 'CLOUDFLARE') {
      topGrad.addColorStop(0, '#F59E0B');
      topGrad.addColorStop(1, '#E5C07B');
    } else {
      topGrad.addColorStop(0, '#0284C7');
      topGrad.addColorStop(1, '#38BDF8');
    }
    ctx.fillStyle = topGrad;
    ctx.fillRect(x + 20, y + 2, w - 40, isHovered ? 4 : 3);

    // A. Card Top Metadata (Tag + Live Animated Pulse Badge)
    ctx.fillStyle = isHovered ? '#FDE68A' : '#F3BA4F';
    ctx.font = '800 12px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(proj.tag, x + 20, y + 32);

    // Live Badge Pill on the Right
    const badgeX = x + w - 20;
    ctx.textAlign = 'right';

    // Animated Pulsing Emerald Dot
    const dotPulseRadius = 4 + 1.2 * glowIntensity;
    ctx.save();
    ctx.shadowColor = '#34D399';
    ctx.shadowBlur = 8 + 6 * glowIntensity;
    ctx.beginPath();
    const dotX = badgeX - (ctx.measureText(proj.badgeText).width + 16);
    ctx.arc(dotX, y + 27, dotPulseRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#10B981';
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = isDual ? '#34D399' : (proj.provider === 'CLOUDFLARE' ? '#FBBF24' : '#38BDF8');
    ctx.font = '700 11.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(proj.badgeText, badgeX, y + 31);
    ctx.textAlign = 'left';

    // B. Project Title (Pure Crisp White, WCAG AAA 19:1 Contrast)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 21px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(proj.title, x + 20, y + 70);

    // C. Live Domain URL (Prominent & Distinctive Branding)
    ctx.fillStyle = '#38BDF8';
    ctx.font = '600 12.5px "Plus Jakarta Sans", monospace';
    ctx.fillText(proj.domain, x + 20, y + 94);

    // D. Tech Stack Pill
    const techY = y + 114;
    ctx.fillStyle = 'rgba(229, 192, 123, 0.1)';
    this.roundRect(ctx, x + 20, techY, w - 40, 26, 6);
    ctx.fill();
    ctx.strokeStyle = 'rgba(229, 192, 123, 0.3)';
    ctx.lineWidth = 1;
    this.roundRect(ctx, x + 20, techY, w - 40, 26, 6);
    ctx.stroke();

    ctx.fillStyle = '#FDE68A';
    ctx.font = '600 12px "Plus Jakarta Sans", monospace';
    ctx.fillText(proj.tech, x + 28, techY + 17);

    // E. Description (Clean Multi-Line Wrap)
    ctx.fillStyle = '#CBD5E1';
    ctx.font = '400 13px "Plus Jakarta Sans", sans-serif';
    this.wrapText(ctx, proj.desc, x + 20, y + 168, w - 40, 20, 3);

    // F. Bottom Action Button
    const btnY = y + h - 54;
    const btnH = 40;
    const btnW = w - 40;

    if (isHovered) {
      const gradBtn = ctx.createLinearGradient(x + 20, btnY, x + 20 + btnW, btnY);
      gradBtn.addColorStop(0, '#D97706');
      gradBtn.addColorStop(1, '#E5C07B');
      ctx.fillStyle = gradBtn;
      this.roundRect(ctx, x + 20, btnY, btnW, btnH, 8);
      ctx.fill();

      ctx.fillStyle = '#06070B';
      ctx.font = '800 14px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('LAUNCH APPLICATION ↗', x + 20 + btnW / 2, btnY + 25);
    } else {
      ctx.fillStyle = 'rgba(229, 192, 123, 0.12)';
      this.roundRect(ctx, x + 20, btnY, btnW, btnH, 8);
      ctx.fill();

      ctx.strokeStyle = 'rgba(229, 192, 123, 0.4)';
      ctx.lineWidth = 1.2;
      this.roundRect(ctx, x + 20, btnY, btnW, btnH, 8);
      ctx.stroke();

      ctx.fillStyle = '#E5C07B';
      ctx.font = '700 13.5px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Launch Live ↗', x + 20 + btnW / 2, btnY + 25);
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
          const remaining = words.slice(n).join(' ');
          let truncated = remaining;
          while (ctx.measureText(truncated + '...').width > maxWidth && truncated.length > 0) {
            truncated = truncated.slice(0, -1);
          }
          ctx.fillText(truncated + '...', x, currY);
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
    this.glowPhase = elapsed * 3.5;
    // Real-time breathing luminescence update at smooth ~15fps rate
    if (elapsed - this.lastGlowUpdate > 0.065) {
      this.lastGlowUpdate = elapsed;
      this.draw();
    }
  }
}
