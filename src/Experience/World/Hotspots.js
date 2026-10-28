import * as THREE from 'three';

export default class Hotspots {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.sizes = this.experience.sizes;

    this.points = [
      {
        id: 'projects',
        name: 'Live Vercel Projects',
        position: new THREE.Vector3(0, 2.38, -4.5),
        camPos: { x: 0, y: 1.52, z: -2.05 },
        camTarget: { x: 0, y: 1.52, z: -4.6 },
        action: 'projects'
      },
      {
        id: 'driver',
        name: 'About Jubayer',
        position: new THREE.Vector3(-4.2, 2.3, -1.8),
        camPos: { x: -1.7, y: 1.5, z: 0.2 },
        camTarget: { x: -4.2, y: 1.5, z: -1.8 },
        action: 'signboard'
      },
      {
        id: 'social',
        name: 'Social Media',
        position: new THREE.Vector3(3.4, 1.65, -1.2),
        camPos: { x: 1.45, y: 1.15, z: 0.1 },
        camTarget: { x: 3.4, y: 1.12, z: -1.2 },
        action: 'social'
      },
      {
        id: 'hood',
        name: 'Full-Stack Core',
        position: new THREE.Vector3(0, 0.95, 1.45),
        camPos: { x: 1.2, y: 1.6, z: 2.8 },
        camTarget: { x: 0, y: 0.85, z: 1.1 },
        action: 'hood'
      },
      {
        id: 'dashboard',
        name: 'AI & Content Stack',
        position: new THREE.Vector3(-0.5, 1.05, 0.1),
        camPos: { x: -1.6, y: 1.35, z: 0.8 },
        camTarget: { x: -0.2, y: 0.9, z: 0.1 },
        action: 'dashboard'
      },
      {
        id: 'trunk',
        name: 'GitHub Repos (22)',
        position: new THREE.Vector3(0, 0.95, -1.45),
        camPos: { x: -1.0, y: 1.6, z: -2.8 },
        camTarget: { x: 0, y: 0.8, z: -1.1 },
        action: 'trunk'
      }
    ];

    this.container = document.createElement('div');
    this.container.className = 'hotspots-container';
    document.body.appendChild(this.container);

    this.createElements();
  }

  createElements() {
    this.points.forEach((point) => {
      const pin = document.createElement('div');
      pin.className = 'hotspot-pin';
      pin.dataset.id = point.id;

      pin.innerHTML = `
        <div class="hotspot-inner">
          <span class="hotspot-beacon"></span>
          <span>${point.name}</span>
        </div>
      `;

      pin.addEventListener('click', () => {
        this.onHotspotClick(point);
      });

      this.container.appendChild(pin);
      point.element = pin;
    });
  }

  onHotspotClick(point) {
    if (this.experience.sounds) {
      this.experience.sounds.playWhoosh();
    }

    // Trigger matching vehicle animation
    if (this.experience.world && this.experience.world.car) {
      const car = this.experience.world.car;
      if (!car.state.allOpen) {
        if (point.action === 'door') {
          car.openDoor();
        } else {
          car.closeDoor();
        }

        if (point.action === 'hood') {
          car.openHood();
        } else {
          car.closeHood();
        }

        if (point.action === 'trunk') {
          car.openTrunk();
        } else {
          car.closeTrunk();
        }

        if (point.action === 'fuel') {
          car.toggleFuel();
        }
      }
    }

    // Smooth camera transition
    this.experience.camera.transitionTo(point.camPos, point.camTarget);

    // If focusing on a 3D billboard, enter pristine focus mode (no overlapping drawers or headers!)
    // For vehicle parts without a 3D board (hood, dashboard, trunk), open tech stack drawer
    if (this.experience.ui) {
      if (['projects', 'driver', 'social'].includes(point.id)) {
        this.experience.ui.enterFocusMode(point.id);
      } else {
        this.experience.ui.openModal(point.id);
      }
    }
  }

  update() {
    this.points.forEach((point) => {
      if (!point.element) return;

      const screenPos = point.position.clone();
      screenPos.project(this.camera);

      // Check if point is behind camera
      const isBehind = screenPos.z > 1;

      if (isBehind) {
        point.element.style.display = 'none';
      } else {
        point.element.style.display = 'block';
        const translateX = (screenPos.x * 0.5 + 0.5) * this.sizes.width;
        const translateY = (-screenPos.y * 0.5 + 0.5) * this.sizes.height;
        point.element.style.left = `${translateX}px`;
        point.element.style.top = `${translateY}px`;
      }
    });
  }

  setVisible(visible) {
    this.container.style.display = visible ? 'block' : 'none';
  }
}
