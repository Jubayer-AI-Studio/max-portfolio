import * as THREE from 'three';

export default class Hotspots {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.sizes = this.experience.sizes;

    this.points = [
      {
        id: 'workstation',
        name: '3D Workstation (PC)',
        position: new THREE.Vector3(3.2, 1.45, -1.3),
        camPos: { x: 3.8, y: 1.44, z: -0.62 },
        camTarget: { x: 3.8, y: 1.42, z: -1.6 },
        action: 'workstation'
      },
      {
        id: 'driver',
        name: 'About Jubayer (3D Signboard)',
        position: new THREE.Vector3(-3.4, 1.45, -1.6),
        camPos: { x: -0.7, y: 1.62, z: 0.9 }, // Museum gallery distance with generous editorial margins
        camTarget: { x: -3.8, y: 1.48, z: -1.8 },
        action: 'signboard'
      },
      {
        id: 'hood',
        name: 'Full-Stack Core',
        position: new THREE.Vector3(0, 1.05, 1.45),
        camPos: { x: 1.2, y: 1.6, z: 2.8 },
        camTarget: { x: 0, y: 0.85, z: 1.1 },
        action: 'hood'
      },
      {
        id: 'dashboard',
        name: 'AI & Content Stack',
        position: new THREE.Vector3(-0.5, 1.15, 0.1),
        camPos: { x: -1.6, y: 1.35, z: 0.8 },
        camTarget: { x: -0.2, y: 0.9, z: 0.1 },
        action: 'dashboard'
      },
      {
        id: 'trunk',
        name: 'GitHub Repos (22)',
        position: new THREE.Vector3(0, 1.05, -1.45),
        camPos: { x: -1.0, y: 1.6, z: -2.8 },
        camTarget: { x: 0, y: 0.8, z: -1.1 },
        action: 'trunk'
      },
      {
        id: 'fuel',
        name: 'Connect',
        position: new THREE.Vector3(1.1, 1.0, 1.2),
        camPos: { x: 2.2, y: 1.3, z: 1.4 },
        camTarget: { x: 0.8, y: 0.8, z: 1.0 },
        action: 'fuel'
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

    // Open Content Modal
    if (this.experience.ui) {
      this.experience.ui.openModal(point.id);
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
