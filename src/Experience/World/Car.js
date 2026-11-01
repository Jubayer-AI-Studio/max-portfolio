import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export default class Car {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.loader = new GLTFLoader();
    this.loader.setMeshoptDecoder(MeshoptDecoder);

    this.animations = {};
    this.state = {
      doorOpen: false,
      doorRFOpen: false,
      hoodOpen: false,
      trunkOpen: false,
      fuelOpen: false,
      allOpen: false,
      wheelsSpinning: true
    };

    this.wheelPivots = [];
    this.wheelRotationSpeed = 8.5; // rad/s for dynamic wheel spin

    this.setModel();
  }

  setupHolographicProxy() {
    // Deprecated wireframe proxy removed to guarantee pristine showroom aesthetics
  }

  setModel() {
    console.log('[PERF] Car.setModel started:', Math.round(performance.now()) + 'ms');
    this.loader.load(
      './models/mercedes-benz_slk_55_amg_2012.glb',
      (gltf) => {
        console.log('[PERF] GLTF loaded callback:', Math.round(performance.now()) + 'ms');
        this.model = gltf.scene;

        // Ground the car perfectly on the turntable stage
        const box = new THREE.Box3().setFromObject(this.model);
        const heightOffset = -box.min.y;
        this.model.position.set(0, heightOffset + 0.04, 0);

        // Setup Animation Mixer
        this.mixer = new THREE.AnimationMixer(this.model);
        
        gltf.animations.forEach((clip) => {
          const action = this.mixer.clipAction(clip);
          action.clampWhenFinished = true;
          action.loop = THREE.LoopOnce;
          this.animations[clip.name] = action;
        });

        // Loop speedometer needle for idle pulse
        if (this.animations['speedometer']) {
          this.animations['speedometer'].clampWhenFinished = false;
          this.animations['speedometer'].loop = THREE.LoopPingPong;
          this.animations['speedometer'].play();
        }

        // Setup Wheel Pivots for live spinning animation
        this.setupWheelPivots();

        // High-Performance Unified Automotive Materials (Eliminates all 82 GLTF extension shaders)
        const sharedPaintMat = new THREE.MeshStandardMaterial({
          color: 0xcfd6dc, // Sleek Iridium Silver Metallic AMG Paint
          metalness: 0.88,
          roughness: 0.15,
          envMapIntensity: 2.2
        });

        const sharedChromeMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.98,
          roughness: 0.08,
          envMapIntensity: 2.4
        });

        const sharedGlassMat = new THREE.MeshStandardMaterial({
          color: 0x111622,
          transparent: true,
          opacity: 0.52,
          metalness: 0.12,
          roughness: 0.04,
          envMapIntensity: 2.5
        });

        const sharedTireMat = new THREE.MeshStandardMaterial({
          color: 0x181a1d,
          metalness: 0.02,
          roughness: 0.92,
          envMapIntensity: 0.2
        });

        const sharedInteriorMat = new THREE.MeshStandardMaterial({
          color: 0x242428,
          metalness: 0.08,
          roughness: 0.85,
          envMapIntensity: 0.4
        });

        const sharedEngineMat = new THREE.MeshStandardMaterial({
          color: 0x484850,
          metalness: 0.82,
          roughness: 0.32,
          envMapIntensity: 1.4
        });

        const sharedRotorMat = new THREE.MeshStandardMaterial({
          color: 0xd8d8d8,
          metalness: 0.94,
          roughness: 0.18,
          envMapIntensity: 1.8
        });

        const sharedEmissiveMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: new THREE.Color(0xd8f0ff),
          emissiveIntensity: 0.95,
          roughness: 0.2,
          metalness: 0.1
        });

        // Fast unified material assignment: Every single mesh gets a shared fast material
        this.model.traverse((child) => {
          if (child.isMesh) {
            const matName = (child.material?.name || '').toLowerCase();
            const meshName = (child.name || '').toLowerCase();

            let isTire = false;
            let curr = child;
            while (curr) {
              if (curr.name && /tyre|tire/i.test(curr.name)) {
                isTire = true;
                break;
              }
              curr = curr.parent;
            }

            const isBody = matName.includes('carpaint') || matName.includes('paint') || matName.includes('body');
            const isGlass = matName.includes('glass') || matName.includes('windshield');
            const isChrome = matName.includes('chrome') || matName.includes('badge') || matName.includes('screw');
            const isRotor = matName.includes('rotor') || matName.includes('aluminum') || matName.includes('machined') || meshName.includes('rim_');
            const isInterior = matName.includes('leather') || matName.includes('alcantara') || matName.includes('carpet') || matName.includes('fabric');
            const isEngine = matName.includes('engine') || matName.includes('motor') || matName.includes('pipe');
            const isEmissive = !isTire && !meshName.includes('rim_') && (matName.includes('lbk_led') || matName.includes('gaugeface') || matName.includes('int_symbols_emissive') || meshName.includes('headlight') || meshName.includes('taillight'));

            // Cast shadow ONLY on main exterior parts (speeds up shadow map rendering by 10x!)
            child.castShadow = isBody || isTire || isGlass;
            child.receiveShadow = true;

            if (isTire) {
              child.material = sharedTireMat;
            } else if (isGlass) {
              child.material = sharedGlassMat;
            } else if (isChrome) {
              child.material = sharedChromeMat;
            } else if (isRotor) {
              child.material = sharedRotorMat;
            } else if (isEmissive) {
              child.material = sharedEmissiveMat;
            } else if (isEngine) {
              child.material = sharedEngineMat;
            } else if (isInterior) {
              child.material = sharedInteriorMat;
            } else if (isBody) {
              child.material = sharedPaintMat;
            } else {
              // Any other small parts get interior/chassis material
              child.material = sharedInteriorMat;
            }
          }
        });

        if (this.proxyGroup) {
          this.scene.remove(this.proxyGroup);
          this.proxyGroup = null;
        }

        console.log('[PERF] Car mesh traversal done:', Math.round(performance.now()) + 'ms');
        this.scene.add(this.model);
        console.log('[PERF] Car added to scene:', Math.round(performance.now()) + 'ms');

        if (this.experience.preloader) {
          this.experience.preloader.onItemLoaded('car');
        }
      },
      (xhr) => {
        if (this.experience.preloader) {
          this.experience.preloader.onProgress('car', xhr.loaded, xhr.total);
        }
      },
      (error) => {
        console.error('Error loading car model:', error);
        if (this.experience.preloader) {
          this.experience.preloader.onItemLoaded('car');
        }
      }
    );
  }

  setupWheelPivots() {
    // Exact hub centers computed from GLTF vertex accessors
    const wheelDefinitions = [
      { key: 'RF', center: new THREE.Vector3(-0.7483, 0.1882, 1.1912), regex: /rim_RF|tyre_RF/i },
      { key: 'LF', center: new THREE.Vector3( 0.7483, 0.1882, 1.1912), regex: /rim_LF|tyre_LF/i },
      { key: 'RR', center: new THREE.Vector3(-0.7513, 0.1840, -1.2346), regex: /rim_RR|tyre_RR/i },
      { key: 'LR', center: new THREE.Vector3( 0.7513, 0.1840, -1.2346), regex: /rim_LR|tyre_LR/i }
    ];

    this.wheelPivots = [];

    wheelDefinitions.forEach(def => {
      const pivot = new THREE.Group();
      pivot.position.copy(def.center);
      this.model.add(pivot);

      // Find matching top-level nodes for this wheel
      const matchedNodes = [];
      this.model.traverse(child => {
        if (def.regex.test(child.name)) {
          matchedNodes.push(child);
        }
      });

      // Reparent top-level wheel root nodes to the pivot
      matchedNodes.forEach(node => {
        if (node.parent && node.parent !== pivot && !def.regex.test(node.parent.name)) {
          node.position.sub(def.center);
          pivot.add(node);
        }
      });

      this.wheelPivots.push(pivot);
    });
  }

  // --- Wheel Spin Control ---

  toggleWheelSpin() {
    this.state.wheelsSpinning = !this.state.wheelsSpinning;
    return this.state.wheelsSpinning;
  }

  // --- Flawless Pair Action Execution (Prevents Three.js Action Weight Locking) ---

  playPairAction(openClip, closeClip, shouldOpen) {
    if (!this.animations) return;
    const openAction = this.animations[openClip];
    const closeAction = this.animations[closeClip];

    if (!openAction || !closeAction) return;

    if (shouldOpen) {
      // 1. Immediately kill the opposing close action so weights never conflict
      closeAction.stop();
      closeAction.reset();

      // 2. Play the open action cleanly to its clamped end frame
      openAction.reset();
      openAction.clampWhenFinished = true;
      openAction.loop = THREE.LoopOnce;
      openAction.play();
    } else {
      // 1. Immediately kill the opposing open action
      openAction.stop();
      openAction.reset();

      // 2. Play the close action cleanly to its clamped end frame
      closeAction.reset();
      closeAction.clampWhenFinished = true;
      closeAction.loop = THREE.LoopOnce;
      closeAction.play();
    }
  }

  // --- Driver Door (Left Front) ---

  openDoor() {
    this.state.doorOpen = true;
    this.playPairAction('doorLF_open', 'doorLF_close', true);
    if (this.experience.sounds) {
      this.experience.sounds.playDoorOpen();
    }
    this.updateAllOpenStatus();
  }

  closeDoor() {
    this.state.doorOpen = false;
    this.playPairAction('doorLF_open', 'doorLF_close', false);
    if (this.experience.sounds) {
      this.experience.sounds.playDoorClose();
    }
    this.updateAllOpenStatus();
  }

  toggleDoor() {
    if (this.state.doorOpen) {
      this.closeDoor();
    } else {
      this.openDoor();
    }
    return this.state.doorOpen;
  }

  // --- Passenger Door (Right Front) ---

  openDoorRF() {
    this.state.doorRFOpen = true;
    this.playPairAction('doorRF_open', 'doorRF_close', true);
  }

  closeDoorRF() {
    this.state.doorRFOpen = false;
    this.playPairAction('doorRF_open', 'doorRF_close', false);
  }

  // --- Hood / Bonnet ---

  openHood() {
    this.state.hoodOpen = true;
    this.playPairAction('hood_open', 'hood_close', true);
    if (this.experience.sounds) {
      this.experience.sounds.playDoorOpen();
    }
    this.updateAllOpenStatus();
  }

  closeHood() {
    this.state.hoodOpen = false;
    this.playPairAction('hood_open', 'hood_close', false);
    if (this.experience.sounds) {
      this.experience.sounds.playDoorClose();
    }
    this.updateAllOpenStatus();
  }

  toggleHood() {
    if (this.state.hoodOpen) {
      this.closeHood();
    } else {
      this.openHood();
    }
    return this.state.hoodOpen;
  }

  // --- Trunk / Boot ---

  openTrunk() {
    this.state.trunkOpen = true;
    this.playPairAction('trunk_open', 'trunk_close', true);
    if (this.experience.sounds) {
      this.experience.sounds.playDoorOpen();
    }
    this.updateAllOpenStatus();
  }

  closeTrunk() {
    this.state.trunkOpen = false;
    this.playPairAction('trunk_open', 'trunk_close', false);
    if (this.experience.sounds) {
      this.experience.sounds.playDoorClose();
    }
    this.updateAllOpenStatus();
  }

  toggleTrunk() {
    if (this.state.trunkOpen) {
      this.closeTrunk();
    } else {
      this.openTrunk();
    }
    return this.state.trunkOpen;
  }

  // --- Fuel Cap ---

  toggleFuel() {
    this.state.fuelOpen = !this.state.fuelOpen;
    if (this.animations['fuel']) {
      const act = this.animations['fuel'];
      act.reset();
      act.clampWhenFinished = true;
      act.loop = THREE.LoopOnce;
      act.play();
    }
    if (this.experience.sounds) {
      this.experience.sounds.playClick();
    }
    return this.state.fuelOpen;
  }

  // --- EXPLODED VIEW: OPEN ALL PARTS IN SYNCHRONIZED HARMONY ---

  openAll() {
    this.state.allOpen = true;
    this.state.doorOpen = true;
    this.state.doorRFOpen = true;
    this.state.hoodOpen = true;
    this.state.trunkOpen = true;

    // Trigger all open clips simultaneously
    this.playPairAction('doorLF_open', 'doorLF_close', true);
    this.playPairAction('doorRF_open', 'doorRF_close', true);
    this.playPairAction('hood_open', 'hood_close', true);
    this.playPairAction('trunk_open', 'trunk_close', true);

    if (this.experience.sounds) {
      this.experience.sounds.playExplodeOpen();
    }
    return true;
  }

  closeAll() {
    this.state.allOpen = false;
    this.state.doorOpen = false;
    this.state.doorRFOpen = false;
    this.state.hoodOpen = false;
    this.state.trunkOpen = false;
    this.state.fuelOpen = false;

    // Trigger all close clips simultaneously
    this.playPairAction('doorLF_open', 'doorLF_close', false);
    this.playPairAction('doorRF_open', 'doorRF_close', false);
    this.playPairAction('hood_open', 'hood_close', false);
    this.playPairAction('trunk_open', 'trunk_close', false);

    if (this.experience.sounds) {
      this.experience.sounds.playExplodeClose();
    }
    return false;
  }

  toggleAll() {
    if (this.state.allOpen) {
      return this.closeAll();
    } else {
      return this.openAll();
    }
  }

  updateAllOpenStatus() {
    this.state.allOpen = (this.state.doorOpen && this.state.hoodOpen && this.state.trunkOpen);
  }

  update(delta) {
    if (this.mixer) {
      this.mixer.update(delta * 0.001);
    }

    // Live wheel spinning animation around wheel hub pivots
    if (this.state.wheelsSpinning && this.wheelPivots.length > 0) {
      const rotDelta = delta * 0.001 * this.wheelRotationSpeed;
      for (let i = 0; i < this.wheelPivots.length; i++) {
        this.wheelPivots[i].rotation.x += rotDelta;
      }
    }
  }
}
