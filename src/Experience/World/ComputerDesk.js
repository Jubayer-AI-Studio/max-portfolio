import * as THREE from 'three';

export default class ComputerDesk {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;

    this.group = new THREE.Group();
    // Symmetrically placed on right-rear side opposite to the portrait signboard
    this.group.position.set(3.8, 0, -1.6);
    this.group.rotation.y = -Math.PI / 3.4; // ~-53 degrees facing showroom center
    this.scene.add(this.group);

    this.canvasWidth = 2048;
    this.canvasHeight = 1024;
    this.drawn = false;

    this.setupCanvas();
    this.setDesk();
    this.setMonitor();
    this.setPeripherals();
    this.setLighting();
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

    this.drawScreen();
  }

  setDesk() {
    // Luxury Modern Materials
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x181c24, // Slate 900 dark titanium
      metalness: 0.92,
      roughness: 0.24
    });

    const walnutMat = new THREE.MeshStandardMaterial({
      color: 0x271e18, // Rich deep dark walnut
      metalness: 0.15,
      roughness: 0.45
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038, // Warm Amber Gold
      metalness: 0.85,
      roughness: 0.28
    });

    const deskWidth = 2.4;
    const deskDepth = 1.0;
    const deskHeight = 0.06;
    const deskY = 0.76;

    // 1. Desk Top (Beveled Solid Walnut & Carbon Surface)
    const deskGeo = new THREE.BoxGeometry(deskWidth, deskHeight, deskDepth);
    const deskMesh = new THREE.Mesh(deskGeo, walnutMat);
    deskMesh.position.set(0, deskY, 0);
    deskMesh.castShadow = true;
    deskMesh.receiveShadow = true;
    this.group.add(deskMesh);

    // Front Brushed Gold Trim Bevel
    const trimGeo = new THREE.BoxGeometry(deskWidth + 0.01, 0.015, 0.015);
    const trimMesh = new THREE.Mesh(trimGeo, goldAccentMat);
    trimMesh.position.set(0, deskY, deskDepth / 2 + 0.005);
    this.group.add(trimMesh);

    // 2. Leather & Felt Stitched Large Desk Pad
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Slate 900
      roughness: 0.85,
      metalness: 0.05
    });
    const padGeo = new THREE.BoxGeometry(1.65, 0.006, 0.68);
    const padMesh = new THREE.Mesh(padGeo, padMat);
    padMesh.position.set(0, deskY + deskHeight / 2 + 0.003, 0.06);
    padMesh.receiveShadow = true;
    this.group.add(padMesh);

    // 3. Dual Motorized Standing Desk Legs
    const legWidth = 0.08;
    const legDepth = 0.12;
    const legHeight = deskY - deskHeight / 2;
    const legGeo = new THREE.BoxGeometry(legWidth, legHeight, legDepth);

    // Left Leg
    const leftLeg = new THREE.Mesh(legGeo, titaniumMat);
    leftLeg.position.set(-0.85, legHeight / 2, 0);
    leftLeg.castShadow = true;
    this.group.add(leftLeg);

    // Right Leg
    const rightLeg = new THREE.Mesh(legGeo, titaniumMat);
    rightLeg.position.set(0.85, legHeight / 2, 0);
    rightLeg.castShadow = true;
    this.group.add(rightLeg);

    // Left Foot Stabilizer
    const footGeo = new THREE.BoxGeometry(0.12, 0.03, 0.75);
    const leftFoot = new THREE.Mesh(footGeo, titaniumMat);
    leftFoot.position.set(-0.85, 0.015, 0);
    this.group.add(leftFoot);

    // Right Foot Stabilizer
    const rightFoot = new THREE.Mesh(footGeo, titaniumMat);
    rightFoot.position.set(0.85, 0.015, 0);
    this.group.add(rightFoot);

    // Gold Collar Rings on legs
    const collarGeo = new THREE.BoxGeometry(legWidth + 0.02, 0.04, legDepth + 0.02);
    const collar1 = new THREE.Mesh(collarGeo, goldAccentMat);
    collar1.position.set(-0.85, 0.42, 0);
    this.group.add(collar1);

    const collar2 = new THREE.Mesh(collarGeo, goldAccentMat);
    collar2.position.set(0.85, 0.42, 0);
    this.group.add(collar2);

    // 4. Subtle Under-Desk Warm LED Neon Glow Strip
    const stripGeo = new THREE.BoxGeometry(deskWidth - 0.2, 0.01, 0.015);
    const stripMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xffaa00,
      emissiveIntensity: 1.8
    });
    const stripMesh = new THREE.Mesh(stripGeo, stripMat);
    stripMesh.position.set(0, deskY - deskHeight / 2 - 0.005, deskDepth / 2 - 0.02);
    this.group.add(stripMesh);
  }

  setMonitor() {
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x11141a,
      metalness: 0.94,
      roughness: 0.18
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.85,
      roughness: 0.25
    });

    // 1. Articulated Heavy-Duty Monitor Arm Stanchion
    const armBaseGeo = new THREE.CylinderGeometry(0.06, 0.07, 0.03, 24);
    const armBase = new THREE.Mesh(armBaseGeo, titaniumMat);
    armBase.position.set(0, 0.79 + 0.015, -0.32);
    this.group.add(armBase);

    const armPostGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.42, 16);
    const armPost = new THREE.Mesh(armPostGeo, titaniumMat);
    armPost.position.set(0, 0.79 + 0.21, -0.32);
    this.group.add(armPost);

    // 2. Ultrawide Curved Display Chassis
    const monitorWidth = 1.48;
    const monitorHeight = 0.65;
    const monitorDepth = 0.05;
    const monitorY = 1.28;
    const monitorZ = -0.15;

    const monitorChassisGeo = new THREE.BoxGeometry(monitorWidth, monitorHeight, monitorDepth);
    const monitorChassis = new THREE.Mesh(monitorChassisGeo, titaniumMat);
    monitorChassis.position.set(0, monitorY, monitorZ);
    monitorChassis.castShadow = true;
    this.group.add(monitorChassis);

    // Gold Bezel Frame Border
    const frameGeo = new THREE.BoxGeometry(monitorWidth + 0.016, monitorHeight + 0.016, 0.012);
    const frameMesh = new THREE.Mesh(frameGeo, goldAccentMat);
    frameMesh.position.set(0, monitorY, monitorZ + 0.022);
    this.group.add(frameMesh);

    // 3. Screen Display Face (Canvas Texture)
    const screenGeo = new THREE.PlaneGeometry(monitorWidth - 0.02, monitorHeight - 0.02);
    this.screenMat = new THREE.MeshBasicMaterial({
      map: this.texture,
      toneMapped: false,
      side: THREE.FrontSide
    });
    this.screenMesh = new THREE.Mesh(screenGeo, this.screenMat);
    this.screenMesh.position.set(0, monitorY, monitorZ + 0.028);
    this.group.add(this.screenMesh);

    // Interactive pointer handling on the screen
    this.screenMesh.cursor = 'pointer';
  }

  setPeripherals() {
    const darkMetal = new THREE.MeshStandardMaterial({
      color: 0x1e2430,
      metalness: 0.85,
      roughness: 0.3
    });

    const keycapMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.6,
      metalness: 0.2
    });

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4a038,
      metalness: 0.9,
      roughness: 0.2
    });

    const deskY = 0.79;

    // 1. Mechanical 75% Keyboard
    const kbBaseGeo = new THREE.BoxGeometry(0.42, 0.018, 0.16);
    const kbBase = new THREE.Mesh(kbBaseGeo, darkMetal);
    kbBase.position.set(-0.06, deskY + 0.01, 0.14);
    this.group.add(kbBase);

    // Keycaps cluster
    const keysGeo = new THREE.BoxGeometry(0.40, 0.012, 0.14);
    const keys = new THREE.Mesh(keysGeo, keycapMat);
    keys.position.set(-0.06, deskY + 0.022, 0.14);
    this.group.add(keys);

    // 2. Ergonomic Wireless Mouse
    const mouseGeo = new THREE.BoxGeometry(0.08, 0.024, 0.13);
    const mouse = new THREE.Mesh(mouseGeo, darkMetal);
    mouse.position.set(0.32, deskY + 0.014, 0.14);
    this.group.add(mouse);

    // 3. Studio Monitor Speakers (Left & Right)
    const speakerWidth = 0.18;
    const speakerHeight = 0.30;
    const speakerDepth = 0.20;
    const speakerY = deskY + speakerHeight / 2;

    const speakerGeo = new THREE.BoxGeometry(speakerWidth, speakerHeight, speakerDepth);

    // Left Speaker
    const leftSpeaker = new THREE.Mesh(speakerGeo, darkMetal);
    leftSpeaker.position.set(-0.95, speakerY, -0.16);
    leftSpeaker.rotation.y = Math.PI / 12; // Angled towards user
    leftSpeaker.castShadow = true;
    this.group.add(leftSpeaker);

    // Left Speaker Gold Driver Cone
    const driverGeo = new THREE.CylinderGeometry(0.05, 0.04, 0.01, 24);
    const leftDriver = new THREE.Mesh(driverGeo, goldMat);
    leftDriver.rotation.x = Math.PI / 2;
    leftDriver.position.set(-0.95, speakerY - 0.03, -0.055);
    this.group.add(leftDriver);

    // Right Speaker
    const rightSpeaker = new THREE.Mesh(speakerGeo, darkMetal);
    rightSpeaker.position.set(0.95, speakerY, -0.16);
    rightSpeaker.rotation.y = -Math.PI / 12;
    rightSpeaker.castShadow = true;
    this.group.add(rightSpeaker);

    // Right Speaker Gold Driver Cone
    const rightDriver = new THREE.Mesh(driverGeo, goldMat);
    rightDriver.rotation.x = Math.PI / 2;
    rightDriver.position.set(0.95, speakerY - 0.03, -0.055);
    this.group.add(rightDriver);
  }

  setLighting() {
    // Warm overhead workstation desk light
    this.deskLight = new THREE.SpotLight(0xfff7ed, 2.8, 8.0, Math.PI / 3.5, 0.4, 1.5);
    this.deskLight.position.set(0, 2.6, 0.3);
    this.deskLight.target.position.set(0, 0.8, 0);
    this.group.add(this.deskLight);
    this.group.add(this.deskLight.target);
  }

  update(delta, elapsed) {
    if (!this.drawn) {
      this.drawScreen();
      this.drawn = true;
      if (this.texture) this.texture.needsUpdate = true;
    }
  }

  drawScreen() {
    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;

    // 1. Dark Developer Studio IDE Background (#0B0F19)
    ctx.fillStyle = '#0B0F19';
    ctx.fillRect(0, 0, w, h);

    // Subtle Grid pattern
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // 2. Top macOS Window Header Bar
    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, w, 68);

    // Traffic light window buttons
    ctx.beginPath();
    ctx.arc(42, 34, 11, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444'; // Red close
    ctx.fill();

    ctx.beginPath();
    ctx.arc(76, 34, 11, 0, Math.PI * 2);
    ctx.fillStyle = '#f59e0b'; // Yellow minimize
    ctx.fill();

    ctx.beginPath();
    ctx.arc(110, 34, 11, 0, Math.PI * 2);
    ctx.fillStyle = '#10b981'; // Green maximize
    ctx.fill();

    // Window Title
    ctx.fillStyle = '#E2E8F0';
    ctx.font = '600 26px "Outfit", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('jubayer@dev-studio: ~/portfolio/special-agent-one (zsh)', 160, 42);

    // Live Indicator in Top Right
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(w - 220, 34, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#34D399';
    ctx.font = '700 22px "Outfit", sans-serif';
    ctx.fillText('VERCEL: ONLINE', w - 198, 42);

    // 3. Inner Border & Vertical Divider
    ctx.strokeStyle = '#D4A038';
    ctx.lineWidth = 3;
    ctx.strokeRect(18, 18, w - 36, h - 36);

    ctx.strokeStyle = 'rgba(212, 160, 56, 0.35)';
    ctx.beginPath();
    ctx.moveTo(w * 0.48, 68);
    ctx.lineTo(w * 0.48, h - 18);
    ctx.stroke();

    // ==========================================
    // LEFT PANE: Syntax Highlighted Production Code
    // ==========================================
    const codeX = 50;
    let lineY = 130;
    const lineHeight = 42;

    const codeLines = [
      { num: '01', text: '// Jubayer Ahmad — Full-Stack Developer & AI Architect', color: '#94A3B8' },
      { num: '02', text: 'import { GoogleVeo, GeminiFlash } from "@google/genai";', color: '#F472B6' },
      { num: '03', text: 'import { Next15Engine, ThreeWebGL } from "@studio/core";', color: '#F472B6' },
      { num: '04', text: '', color: '#fff' },
      { num: '05', text: 'export async function getLiveDeployment() {', color: '#60A5FA' },
      { num: '06', text: '  const agent = new AutonomousAgent({', color: '#E2E8F0' },
      { num: '07', text: '    slug: "special-agent-one",', color: '#FDE047' },
      { num: '08', text: '    url:  "https://special-agent-one.vercel.app",', color: '#34D399' },
      { num: '09', text: '    speed: "60 FPS WebGL • 0ms Latency"', color: '#FDE047' },
      { num: '10', text: '  });', color: '#E2E8F0' },
      { num: '11', text: '', color: '#fff' },
      { num: '12', text: '  return await agent.deployToProduction();', color: '#FBBF24' },
      { num: '13', text: '}', color: '#60A5FA' },
      { num: '14', text: '', color: '#fff' },
      { num: '15', text: 'console.log("⚡ Systems Calibrated & Verified by Jubayer");', color: '#38BDF8' }
    ];

    codeLines.forEach((cl) => {
      ctx.fillStyle = '#64748B';
      ctx.font = '500 24px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(cl.num, codeX + 35, lineY);

      ctx.fillStyle = cl.color;
      ctx.font = '600 26px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(cl.text, codeX + 60, lineY);

      lineY += lineHeight;
    });

    // ==========================================
    // RIGHT PANE: Live Deployed Apps & Verified Social Hub
    // ==========================================
    const rightX = w * 0.52;
    let cardY = 110;

    // Header Badge
    ctx.fillStyle = 'rgba(212, 160, 56, 0.15)';
    ctx.fillRect(rightX, cardY, 420, 44);
    ctx.strokeStyle = '#D4A038';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(rightX, cardY, 420, 44);

    ctx.fillStyle = '#FDE047';
    ctx.font = '800 22px "Outfit", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('FEATURED LIVE APPLICATION (VERCEL)', rightX + 18, cardY + 29);

    // Card 1: Special Agent One
    cardY += 60;
    ctx.fillStyle = '#131B2E';
    ctx.fillRect(rightX, cardY, w - rightX - 50, 200);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.lineWidth = 2;
    ctx.strokeRect(rightX, cardY, w - rightX - 50, 200);

    // Card 1 Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 38px "Outfit", sans-serif';
    ctx.fillText('Special Agent One', rightX + 30, cardY + 54);

    // Vercel Live Tag
    ctx.fillStyle = '#10B981';
    ctx.font = '700 22px "Outfit", sans-serif';
    ctx.fillText('LIVE DEMO: special-agent-one.vercel.app', rightX + 30, cardY + 95);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Next.js 15 • AI Automation System • Fully Live & Accessible', rightX + 30, cardY + 130);

    // 1-Click Launch Button on canvas
    ctx.fillStyle = '#D4A038';
    ctx.fillRect(rightX + 30, cardY + 148, 300, 38);
    ctx.fillStyle = '#000000';
    ctx.font = '800 20px "Outfit", sans-serif';
    ctx.fillText('CLICK TO LAUNCH LIVE APP ↗', rightX + 46, cardY + 174);

    // Card 2: Verified Freelancer & Social Profiles
    cardY += 225;
    ctx.fillStyle = '#131B2E';
    ctx.fillRect(rightX, cardY, w - rightX - 50, 260);
    ctx.strokeStyle = 'rgba(212, 160, 56, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(rightX, cardY, w - rightX - 50, 260);

    ctx.fillStyle = '#FDE047';
    ctx.font = '800 28px "Outfit", sans-serif';
    ctx.fillText('Verified Professional Profiles', rightX + 30, cardY + 48);

    // Upwork row
    ctx.fillStyle = '#14A800'; // Official Upwork Green
    ctx.font = '800 24px "Outfit", sans-serif';
    ctx.fillText('Upwork Freelancer: Top Rated & Available for Hire', rightX + 30, cardY + 95);

    // Facebook row
    ctx.fillStyle = '#1877F2'; // Official Facebook Blue
    ctx.font = '800 24px "Outfit", sans-serif';
    ctx.fillText('Facebook Profile & Official Studio Page Connected', rightX + 30, cardY + 140);

    // GitHub row
    ctx.fillStyle = '#E2E8F0';
    ctx.font = '700 24px "Outfit", sans-serif';
    ctx.fillText('GitHub: 22+ Open-Source & Enterprise Repositories', rightX + 30, cardY + 185);

    // Bottom Action Banner
    ctx.fillStyle = 'rgba(254, 224, 71, 0.12)';
    ctx.fillRect(rightX + 20, cardY + 206, w - rightX - 90, 40);
    ctx.fillStyle = '#FDE047';
    ctx.font = '700 20px "Outfit", sans-serif';
    ctx.fillText('TAP OR SELECT "3D WORKSTATION" TO EXPLORE ALL LIVE SITES', rightX + 35, cardY + 233);
  }
}
