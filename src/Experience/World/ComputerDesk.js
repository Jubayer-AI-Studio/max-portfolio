import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export default class ComputerDesk {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;

    this.group = new THREE.Group();
    // Positioned symmetrically opposite to portrait signboard facing showroom center
    this.group.position.set(3.6, 0, -1.6);
    this.group.rotation.y = -Math.PI / 3.4; // Facing towards car turntable
    this.scene.add(this.group);

    this.canvasWidth = 2048;
    this.canvasHeight = 1024;
    this.interactiveMeshes = [];

    this.setupCanvas();
    this.loadModel();
    this.setLighting();
    this.setupRaycasting();
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

  loadModel() {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);

    loader.load(
      './models/gaming_pc_with_curved_monitor.glb',
      (gltf) => {
        this.model = gltf.scene;

        // Ensure grounded perfectly at Y = 0
        const box = new THREE.Box3().setFromObject(this.model);
        const yOffset = -box.min.y;
        this.model.position.set(0, yOffset, 0);

        // Enhance PBR materials & attach active screen texture
        this.model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            this.interactiveMeshes.push(child);

            const mat = Array.isArray(child.material) ? child.material[0] : child.material;
            const matName = mat ? mat.name : '';

            // 1. Map Live Dynamic Screen Texture onto MonitorScreen
            if (matName === 'MonitorScreen') {
              this.screenMaterial = new THREE.MeshStandardMaterial({
                map: this.texture,
                emissive: 0xffffff,
                emissiveMap: this.texture,
                emissiveIntensity: 1.15,
                roughness: 0.18,
                metalness: 0.08
              });
              child.material = this.screenMaterial;
            }

            // 2. Enhance Curved Monitor Plastic Frame
            else if (matName === 'MonitorPlastic' || matName === 'buttons') {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x111622,
                roughness: 0.25,
                metalness: 0.85
              });
            }

            // 3. Enhance Luxury Desk Table Wood
            else if (matName.includes('Wood')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x221a14, // Rich Dark Smoked Walnut
                roughness: 0.42,
                metalness: 0.12
              });
            }

            // 4. Enhance Smoked Glass Table Inset
            else if (matName.includes('Glass')) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x0a101d,
                roughness: 0.08,
                metalness: 0.2,
                transparent: true,
                opacity: 0.78
              });
            }

            // 5. Enhance Gaming PC Tower Case & Internal RGB
            else if (matName.includes('gamingPC')) {
              if (matName.includes('cover')) {
                // Tempered glass side panel
                child.material = new THREE.MeshStandardMaterial({
                  color: 0x050c18,
                  roughness: 0.05,
                  metalness: 0.15,
                  transparent: true,
                  opacity: 0.65
                });
              } else if (matName.includes('insides')) {
                // Glowing internal GPU/Cooler RGB
                child.material = new THREE.MeshStandardMaterial({
                  color: 0x00f0ff,
                  emissive: 0x00d4ff,
                  emissiveIntensity: 0.85,
                  roughness: 0.3,
                  metalness: 0.7
                });
              } else {
                // Slate black brushed metal chassis
                child.material = new THREE.MeshStandardMaterial({
                  color: 0x141a24,
                  roughness: 0.22,
                  metalness: 0.92
                });
              }
            }

            // 6. Mechanical Keyboard & Mouse
            else if (matName.includes('Keyboard') || matName.includes('keys') || matName === 'wheel') {
              if (matName.includes('keys')) {
                child.material = new THREE.MeshStandardMaterial({
                  color: 0x182030,
                  roughness: 0.45,
                  metalness: 0.25,
                  emissive: 0x38bdf8,
                  emissiveIntensity: 0.2
                });
              } else {
                child.material = new THREE.MeshStandardMaterial({
                  color: 0x0f1520,
                  roughness: 0.35,
                  metalness: 0.8
                });
              }
            }
          }
        });

        this.group.add(this.model);

        // Preload complete signal
        if (this.experience.preloader) {
          this.experience.preloader.onItemLoaded('computer');
        }
      },
      undefined,
      (error) => {
        console.error('Error loading 3D Computer Model:', error);
      }
    );
  }

  setLighting() {
    // 1. Under-Desk Amber Gold Neon Glow
    this.underglow = new THREE.PointLight(0xffd700, 1.4, 3.8);
    this.underglow.position.set(0, 0.45, 0);
    this.group.add(this.underglow);

    // 2. Monitor Screen Forward Ambient Glow (illuminates desk pad & keyboard)
    this.screenLight = new THREE.PointLight(0x38bdf8, 1.2, 2.5);
    this.screenLight.position.set(0, 1.05, 0.2);
    this.group.add(this.screenLight);

    // 3. PC Tower Internal Cyan RGB Light
    this.towerLight = new THREE.PointLight(0x00f0ff, 1.0, 1.8);
    this.towerLight.position.set(0.65, 0.9, 0);
    this.group.add(this.towerLight);
  }

  setupRaycasting() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    const onPointerDown = (event) => {
      // Don't trigger if modal or Virtual PC is already active
      if (document.body.classList.contains('pc-mode-active') || document.body.classList.contains('modal-open')) {
        return;
      }

      const clientX = event.clientX || (event.touches && event.touches[0] ? event.touches[0].clientX : 0);
      const clientY = event.clientY || (event.touches && event.touches[0] ? event.touches[0].clientY : 0);

      this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.experience.camera.instance);
      const intersects = this.raycaster.intersectObjects(this.interactiveMeshes, true);

      if (intersects.length > 0) {
        if (this.experience.virtualPC) {
          this.experience.virtualPC.open();
        }
      }
    };

    window.addEventListener('click', onPointerDown);
    window.addEventListener('touchend', onPointerDown);
  }

  update(delta, elapsed) {
    // Subtle pulsating glow on the gaming PC internals
    if (this.towerLight) {
      this.towerLight.intensity = 1.0 + Math.sin(elapsed * 2.8) * 0.35;
    }
  }

  drawScreen() {
    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;

    // 1. Dark Slate Cyber-Studio Terminal Canvas
    ctx.fillStyle = '#060B14';
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
      { num: '01', text: '// Jubayer Ahmad — Full-Stack Developer & AI Specialist', color: '#94A3B8' },
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
      { num: '15', text: 'console.log("Systems Calibrated & Verified by Jubayer");', color: '#38BDF8' }
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
    ctx.fillText('TAP COMPUTER TO LAUNCH INTERACTIVE OS & APPS', rightX + 35, cardY + 233);
  }
}
