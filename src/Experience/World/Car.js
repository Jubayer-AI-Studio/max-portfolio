import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Car {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.loader = new GLTFLoader();

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

  setModel() {
    this.loader.load(
      './models/mercedes-benz_slk_55_amg_2012.glb',
      (gltf) => {
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

        // Enhance materials
        this.model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child.material) {
              child.material.envMapIntensity = 1.6;

              const matName = (child.material.name || '').toLowerCase();
              if (matName.includes('paint') || matName.includes('car') || matName.includes('body')) {
                child.material.roughness = 0.12;
                child.material.metalness = 0.85;
              }

              if (matName.includes('glass') || matName.includes('window')) {
                child.material.transparent = true;
                child.material.opacity = 0.65;
                child.material.roughness = 0.05;
              }

              if (matName.includes('light') || matName.includes('lamp') || matName.includes('led')) {
                child.material.emissive = new THREE.Color(0xddeeff);
                child.material.emissiveIntensity = 0.6;
              }
            }
          }
        });

        this.scene.add(this.model);

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
