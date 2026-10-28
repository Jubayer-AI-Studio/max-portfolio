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

    // 10 Verified Production Deployments with Authentic Signature Brand Palettes
    this.projects = [
      {
        id: 'special-agent',
        title: 'Special Agent One',
        tag: 'AI MISSION CONTROL',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'special-agent-one.vercel.app',
        tagline: 'Autonomous AI Client Hunter & 24/7 Career Radar Engine',
        pills: ['Next.js 15', 'Python AI', 'Cloud Radar'],
        url: 'https://special-agent-one.vercel.app',
        accentGrad: ['#059669', '#10B981', '#34D399'],
        cardBg: '#081310'
      },
      {
        id: 'rihlah-gadget',
        title: 'Rihlah Gadget Shop',
        tag: 'E-COMMERCE PWA STORE',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'rihlah-gadget-shop.pages.dev',
        tagline: 'High-speed electronic gadget portal with edge cart & PWA',
        pills: ['Next.js 15', 'Cloudflare', 'PWA Store'],
        url: 'https://rihlah-gadget-shop.pages.dev',
        accentGrad: ['#D97706', '#F59E0B', '#FBBF24'],
        cardBg: '#151006'
      },
      {
        id: 'electronics-importers',
        title: 'Electronics Importers BD',
        tag: 'B2B COMMERCIAL PORTAL',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'electronics-importers-bd.vercel.app',
        tagline: 'Industrial wholesale component directory & verified import hub',
        pills: ['Next.js 15', 'React 19', 'B2B Wholesale'],
        url: 'https://electronics-importers-bd.vercel.app',
        accentGrad: ['#1D4ED8', '#0284C7', '#38BDF8'],
        cardBg: '#060E18'
      },
      {
        id: 'affan-labib',
        title: 'Affan Labib Editorial Blog',
        tag: 'LITERARY PUBLICATION',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'affan-labib-blog.vercel.app',
        tagline: 'High-performance literary publication with MDX & sub-350ms edge',
        pills: ['Astro v5', 'MDX Engine', 'Tailwind'],
        url: 'https://affan-labib-blog.vercel.app',
        accentGrad: ['#6D28D9', '#8B5CF6', '#C084FC'],
        cardBg: '#100A1A'
      },
      {
        id: 'mesk-studio',
        title: 'Mesk Creative Studio',
        tag: 'PUBLISHING & AI BOT',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'mesk-nine.vercel.app',
        tagline: 'Islamic literature platform with automated WhatsApp AI concierge',
        pills: ['Next.js 15', 'WhatsApp AI', 'TypeScript'],
        url: 'https://mesk-nine.vercel.app',
        accentGrad: ['#B91C1C', '#E11D48', '#FB7185'],
        cardBg: '#16080B'
      },
      {
        id: 'ibrahim-profile',
        title: 'Ibrahim Portfolio Showcase',
        tag: 'SCHOLAR & AUTHOR SHOWCASE',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'ibrahim-jade.vercel.app',
        tagline: 'Interactive author portfolio with publication reader & client matrix',
        pills: ['React 19', 'Tailwind CSS', 'Fast Edge'],
        url: 'https://ibrahim-jade.vercel.app',
        accentGrad: ['#1E40AF', '#3B82F6', '#60A5FA'],
        cardBg: '#070D19'
      },
      {
        id: 'kawsar-profile',
        title: 'Kawsar Ahmad Profile',
        tag: 'AUTHOR & TRANSLATOR',
        provider: 'VERCEL',
        badgeText: 'VERCEL LIVE',
        domain: 'kawsar-seven.vercel.app',
        tagline: 'Literary translator portfolio with article engine & book archives',
        pills: ['Next.js 15', 'Vercel Edge', 'Modern UI'],
        url: 'https://kawsar-seven.vercel.app',
        accentGrad: ['#0E7490', '#06B6D4', '#67E8F9'],
        cardBg: '#051114'
      },
      {
        id: 'hasan-app',
        title: 'Hasan Life Guide',
        tag: 'MENTORSHIP PLATFORM',
        provider: 'CLOUDFLARE',
        badgeText: 'CLOUDFLARE EDGE',
        domain: 'hasan-portfolio-avn.pages.dev',
        tagline: 'Personal development & mentorship app with cloud data sync',
        pills: ['TypeScript', 'Cloudflare Pages', 'PWA Ready'],
        url: 'https://hasan-portfolio-avn.pages.dev',
        accentGrad: ['#BE185D', '#EC4899', '#F472B6'],
        cardBg: '#15060E'
      },
      {
        id: 'smritir-canvas',
        title: 'Smritir Canvas (Maaz)',
        tag: 'LITERARY PORTFOLIO',
        provider: 'CLOUDFLARE',
        badgeText: 'CLOUDFLARE EDGE',
        domain: 'maaz-canvas.pages.dev',
        tagline: 'Bangla literary memoir & writer portal with rich book showcase',
        pills: ['HTML5', 'Cloudflare Pages', 'Web Audio'],
        url: 'https://maaz-canvas.pages.dev',
        accentGrad: ['#047857', '#10B981', '#6EE7B7'],
        cardBg: '#07130D'
      },
      {
        id: 'jubayer-studio',
        title: 'Jubayer Ahmad VIP Studio',
        tag: 'EXECUTIVE VIP PORTFOLIO',
        provider: 'DUAL',
        badgeText: 'CLOUDFLARE + VERCEL',
        domain: 'jubayer-portfolio.pages.dev',
        tagline: 'Master engineering showcase featuring 3D WebGL & 28+ GitHub repos',
        pills: ['Three.js', 'WebGL', 'Cloudflare Edge'],
        url: 'https://jubayer-portfolio.pages.dev',
        accentGrad: ['#B45309', '#F59E0B', '#FDE68A'],
        cardBg: '#140F05'
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
      color: 0x14161d,
      metalness: 0.94,
      roughness: 0.18
    });

    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Radiant 24K Royal Gold
      metalness: 0.90,
      roughness: 0.20
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
      color: 0x0c0e14,
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

    // 1. Hollywood Piano Black Obsidian OLED Master Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#06070A');
    bgGrad.addColorStop(0.5, '#0A0C13');
    bgGrad.addColorStop(1, '#0E1018');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Warm radial amber illumination in upper header
    const radial = ctx.createRadialGradient(w * 0.5, 95, 30, w * 0.5, 175, w * 0.65);
    radial.addColorStop(0, 'rgba(245, 158, 11, 0.22)');
    radial.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, w, h);

    // 24K Royal Gold Dual Perimeter Frame
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 4;
    ctx.strokeRect(32, 32, w - 64, h - 64);

    ctx.strokeStyle = 'rgba(245, 158, 11, 0.28)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(46, 46, w - 92, h - 92);

    // Corner Architectural Insets
    const cornerSize = 36;
    ctx.fillStyle = '#F59E0B';
    ctx.fillRect(28, 28, cornerSize, 4);
    ctx.fillRect(28, 28, 4, cornerSize);
    ctx.fillRect(w - 28 - cornerSize, 28, cornerSize, 4);
    ctx.fillRect(w - 32, 28, 4, cornerSize);
    ctx.fillRect(28, h - 32, cornerSize, 4);
    ctx.fillRect(28, h - 28 - cornerSize, 4, cornerSize);
    ctx.fillRect(w - 28 - cornerSize, h - 32, cornerSize, 4);
    ctx.fillRect(w - 32, h - 28 - cornerSize, 4, cornerSize);

    // 2. HEADER SECTION (Elite High-Contrast Editorial Typography)
    ctx.save();
    ctx.textAlign = 'center';

    // Top Category Pill
    ctx.fillStyle = '#F59E0B';
    ctx.font = '800 21px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('VERIFIED PRODUCTION DEPLOYMENTS (10) • CLOUDFLARE EDGE & VERCEL LIVE', w / 2, 78);

    // Main Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 48px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '0.01em';
    ctx.fillText('Engineered & Deployed by Jubayer Ahmad', w / 2, 134);

    // Subtitle instruction
    ctx.fillStyle = '#94A3B8';
    ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('All 10 production platforms live simultaneously • Click any project card to launch in a new tab', w / 2, 168);

    ctx.restore();

    // Subtle header divider
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(64, 186);
    ctx.lineTo(w - 64, 186);
    ctx.stroke();

    // 3. RENDER ALL 10 PROJECT CARDS (2x5 Grid)
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
    const [c1, c2, c3] = proj.accentGrad;

    ctx.save();

    // 1. Card Base Background
    if (isHovered) {
      ctx.shadowColor = c2;
      ctx.shadowBlur = 32;
      ctx.fillStyle = '#161924';
    } else {
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.shadowBlur = 18;
      ctx.fillStyle = proj.cardBg;
    }

    this.roundRect(ctx, x, y, w, h, 14);
    ctx.fill();
    ctx.shadowBlur = 0;

    // 2. Card Glowing Border
    if (isHovered) {
      ctx.strokeStyle = c2;
      ctx.lineWidth = 3.5;
    } else {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1.6;
    }
    this.roundRect(ctx, x, y, w, h, 14);
    ctx.stroke();

    // 3. MINI BROWSER HEADER BAR (Window controls + Live Cloud Provider)
    const browserBarY = y + 14;
    
    // Window control dots (Red, Yellow, Green)
    const dotColors = ['#EF4444', '#F59E0B', '#10B981'];
    dotColors.forEach((color, i) => {
      ctx.beginPath();
      ctx.arc(x + 20 + i * 14, browserBarY + 8, 4.2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });

    // Cloud Provider Pill (Aligned to Right with Zero Collision!)
    const badgeW = 158;
    const badgeH = 22;
    const badgeX = x + w - badgeW - 14;
    const badgeY = browserBarY - 2;

    ctx.fillStyle = proj.provider === 'DUAL' 
      ? 'rgba(16, 185, 129, 0.18)' 
      : (proj.provider === 'CLOUDFLARE' ? 'rgba(245, 158, 11, 0.18)' : 'rgba(2, 132, 199, 0.18)');
    this.roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 6);
    ctx.fill();

    ctx.strokeStyle = proj.provider === 'DUAL' 
      ? 'rgba(16, 185, 129, 0.45)' 
      : (proj.provider === 'CLOUDFLARE' ? 'rgba(245, 158, 11, 0.45)' : 'rgba(2, 132, 199, 0.45)');
    ctx.lineWidth = 1;
    this.roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 6);
    ctx.stroke();

    // Pulsing Status Dot inside Badge
    ctx.beginPath();
    ctx.arc(badgeX + 11, badgeY + badgeH / 2, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#10B981';
    ctx.fill();

    ctx.fillStyle = proj.provider === 'DUAL' ? '#34D399' : (proj.provider === 'CLOUDFLARE' ? '#FBBF24' : '#38BDF8');
    ctx.font = '700 11px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(proj.badgeText, badgeX + 20, badgeY + 15);

    // 4. SIGNATURE BRAND STRIPE
    const stripeGrad = ctx.createLinearGradient(x + 14, y + 42, x + w - 14, y + 42);
    stripeGrad.addColorStop(0, c1);
    stripeGrad.addColorStop(0.5, c2);
    stripeGrad.addColorStop(1, c3);
    ctx.fillStyle = stripeGrad;
    ctx.fillRect(x + 14, y + 42, w - 28, isHovered ? 4 : 3);

    // 5. CATEGORY TAG
    ctx.fillStyle = c2;
    ctx.font = '800 12.5px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(proj.tag, x + 18, y + 72);

    // 6. MAIN PROJECT TITLE (Pure White, 23px Bold, Ultra-Crisp)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 23px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(proj.title, x + 18, y + 106);

    // 7. OFFICIAL DOMAIN PILL (Prominent, High-Contrast Cyan)
    const domY = y + 124;
    const domW = w - 36;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
    this.roundRect(ctx, x + 18, domY, domW, 26, 6);
    ctx.fill();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.28)';
    ctx.lineWidth = 1;
    this.roundRect(ctx, x + 18, domY, domW, 26, 6);
    ctx.stroke();

    ctx.fillStyle = '#38BDF8';
    ctx.font = '700 12px "Plus Jakarta Sans", monospace';
    ctx.fillText('🔗 ' + proj.domain, x + 26, domY + 17);

    // 8. TECH PILLS ROW
    const pillY = y + 162;
    let currPillX = x + 18;
    ctx.font = '600 11.5px "Plus Jakarta Sans", monospace';

    proj.pills.forEach((pill) => {
      const pW = ctx.measureText(pill).width + 18;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      this.roundRect(ctx, currPillX, pillY, pW, 24, 6);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.lineWidth = 1;
      this.roundRect(ctx, currPillX, pillY, pW, 24, 6);
      ctx.stroke();

      ctx.fillStyle = '#E2E8F0';
      ctx.fillText(pill, currPillX + 9, pillY + 16);

      currPillX += pW + 8;
    });

    // 9. ONE-LINE PUNCHY TAGLINE (High-contrast, zero clutter)
    ctx.fillStyle = '#CBD5E1';
    ctx.font = '400 13.5px "Plus Jakarta Sans", sans-serif';
    this.wrapText(ctx, proj.tagline, x + 18, y + 215, w - 36, 20, 2);

    // 10. LUXURY ACTION BUTTON
    const btnY = y + h - 56;
    const btnH = 42;
    const btnW = w - 36;

    if (isHovered) {
      const btnGrad = ctx.createLinearGradient(x + 18, btnY, x + 18 + btnW, btnY);
      btnGrad.addColorStop(0, '#D97706');
      btnGrad.addColorStop(0.5, '#F59E0B');
      btnGrad.addColorStop(1, '#FDE68A');
      ctx.fillStyle = btnGrad;
      this.roundRect(ctx, x + 18, btnY, btnW, btnH, 8);
      ctx.fill();

      ctx.fillStyle = '#06070B';
      ctx.font = '800 14px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('EXPLORE LIVE SITE ↗', x + 18 + btnW / 2, btnY + 26);
    } else {
      ctx.fillStyle = 'rgba(245, 158, 11, 0.12)';
      this.roundRect(ctx, x + 18, btnY, btnW, btnH, 8);
      ctx.fill();

      ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
      ctx.lineWidth = 1.4;
      this.roundRect(ctx, x + 18, btnY, btnW, btnH, 8);
      ctx.stroke();

      ctx.fillStyle = '#F59E0B';
      ctx.font = '700 13.5px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Launch Project ↗', x + 18 + btnW / 2, btnY + 26);
    }

    ctx.restore();
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 2) {
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
    // STATIC ULTRA-SHARP TEXTURE: Zero continuous redrawing!
    // 100% eliminates any texture jitter, shimmering, or flicker ("ঝিরঝির")!
  }
}
