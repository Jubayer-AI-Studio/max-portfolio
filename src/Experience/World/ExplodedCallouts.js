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
    // Intrusive blocking card boxes permanently removed to guarantee pristine, unobstructed 3D vehicle view
    this.container = document.createElement('div');
    this.container.className = 'exploded-callouts-container';
    this.container.style.display = 'none';
    document.body.appendChild(this.container);
  }

  show() {
    this.visible = false;
    this.container.style.display = 'none';
  }

  hide() {
    this.visible = false;
    this.container.style.display = 'none';
  }

  toggle() {
    return false;
  }

  update() {
    // Zero clutter
  }
}
