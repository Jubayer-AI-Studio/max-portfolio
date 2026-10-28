import * as THREE from 'three';

export default class ExplodedCallouts {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.sizes = this.experience.sizes;

    this.visible = false;

    this.cards = [
      {
        id: 'engine',
        targetId: 'hood',
        anchor: new THREE.Vector3(0, 1.2, 1.35),
        badge: 'V8 ENGINE BAY',
        badgeBg: '#FDE68A',
        badgeText: '#451A03',
        title: 'Full-Stack & Cloud Architecture',
        desc: 'Next.js 15 • React 19 • TypeScript • PostgreSQL • Drizzle ORM • Microservices',
        screenOffset: { x: -220, y: -130 }
      },
      {
        id: 'cockpit',
        targetId: 'driver',
        anchor: new THREE.Vector3(-1.25, 1.15, 0.15),
        badge: 'DRIVER COCKPIT',
        badgeBg: '#FDE68A',
        badgeText: '#451A03',
        title: 'Jubayer Ahmad (Lead Developer)',
        desc: 'Full-Stack Developer • AI Content Creator • System Architect • Creative Lead',
        screenOffset: { x: -250, y: 40 }
      },
      {
        id: 'trunk',
        targetId: 'trunk',
        anchor: new THREE.Vector3(0, 1.35, -1.45),
        badge: 'CARGO VAULT',
        badgeBg: '#FDE68A',
        badgeText: '#451A03',
        title: '28+ GitHub Repositories',
        desc: 'NoorHub SaaS • 2D/3D Games • AI Automations • Open-World Racing Engines',
        screenOffset: { x: 210, y: -70 }
      },
      {
        id: 'cinema',
        targetId: 'dashboard',
        anchor: new THREE.Vector3(1.25, 1.15, 0.15),
        badge: 'AI CONTENT & VFX',
        badgeBg: '#A7F3D0',
        badgeText: '#064E3B',
        title: 'AI Content & Autonomous Agents',
        desc: 'Google Veo 3.1 & Gemini 3.7 • Autonomous Video & Content Engines • Shono AI Jarvis',
        screenOffset: { x: 220, y: 80 }
      }
    ];

    this.setupDOM();
  }

  setupDOM() {
    this.container = document.createElement('div');
    this.container.className = 'exploded-callouts-container';
    this.container.style.display = 'none';

    // SVG canvas for connector tether lines
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('class', 'exploded-lines-svg');
    this.container.appendChild(this.svg);

    this.cards.forEach((item) => {
      // Beacon DOM
      const beacon = document.createElement('div');
      beacon.className = 'exploded-beacon';
      beacon.innerHTML = `<span class="beacon-pulse"></span><span class="beacon-core"></span>`;
      this.container.appendChild(beacon);
      item.beaconEl = beacon;

      // Card DOM
      const card = document.createElement('div');
      card.className = 'exploded-card';
      card.dataset.target = item.targetId;
      card.innerHTML = `
        <div class="exploded-card-badge" style="background:${item.badgeBg}; color:${item.badgeText};">${item.badge}</div>
        <div class="exploded-card-title">${item.title}</div>
        <div class="exploded-card-desc">${item.desc}</div>
        <div class="exploded-card-action"><span>Explore Details &nearr;</span></div>
      `;

      card.addEventListener('click', () => {
        if (this.experience.ui) {
          this.experience.ui.openModal(item.targetId);
          this.experience.ui.navigateToTarget(item.targetId);
        }
      });

      this.container.appendChild(card);
      item.cardEl = card;

      // Line element in SVG
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', 'exploded-tether-line');
      this.svg.appendChild(line);
      item.lineEl = line;
    });

    document.body.appendChild(this.container);
  }

  show() {
    this.visible = true;
    this.container.style.display = 'block';
    this.container.classList.add('active');
    this.update();
  }

  hide() {
    this.visible = false;
    this.container.classList.remove('active');
    setTimeout(() => {
      if (!this.visible) {
        this.container.style.display = 'none';
      }
    }, 400);
  }

  toggle() {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
    return this.visible;
  }

  update() {
    if (!this.visible) return;

    const w = this.sizes.width;
    const h = this.sizes.height;

    this.cards.forEach((item) => {
      const pos = item.anchor.clone();
      pos.project(this.camera);

      // Check if behind camera
      if (pos.z > 1) {
        item.beaconEl.style.display = 'none';
        item.cardEl.style.display = 'none';
        item.lineEl.setAttribute('visibility', 'hidden');
        return;
      }

      item.beaconEl.style.display = 'block';
      item.cardEl.style.display = 'block';
      item.lineEl.setAttribute('visibility', 'visible');

      const anchorX = (pos.x * 0.5 + 0.5) * w;
      const anchorY = (-pos.y * 0.5 + 0.5) * h;

      item.beaconEl.style.left = `${anchorX}px`;
      item.beaconEl.style.top = `${anchorY}px`;

      const cardX = anchorX + item.screenOffset.x;
      const cardY = anchorY + item.screenOffset.y;

      // Keep cards comfortably on-screen
      const clampedX = Math.max(140, Math.min(w - 140, cardX));
      const clampedY = Math.max(120, Math.min(h - 100, cardY));

      item.cardEl.style.left = `${clampedX}px`;
      item.cardEl.style.top = `${clampedY}px`;

      // Update tether line from beacon to card edge
      item.lineEl.setAttribute('x1', anchorX);
      item.lineEl.setAttribute('y1', anchorY);
      item.lineEl.setAttribute('x2', clampedX);
      item.lineEl.setAttribute('y2', clampedY);
    });
  }
}
