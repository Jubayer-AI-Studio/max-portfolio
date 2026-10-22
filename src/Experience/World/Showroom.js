import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Showroom {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.loader = new GLTFLoader();

    this.setModel();
  }

  setModel() {
    this.loader.load(
      './models/car-showroom_1.glb',
      (gltf) => {
        this.model = gltf.scene;
        this.model.position.set(0, 0, 0);

        this.model.traverse((child) => {
          if (child.isMesh) {
            child.receiveShadow = true;

            // Make room walls visible from inside
            if (child.material) {
              child.material.side = THREE.DoubleSide;

              // If mesh is the camera-facing front wall, hide it so the view is never obstructed
              if (child.parent && (child.parent.name.includes('Cube003') || child.parent.name.includes('Cube010'))) {
                child.material.transparent = true;
                child.material.opacity = 0.2;
              }

              // Ceiling truss and lighting
              if (child.name.includes('Gitter') || (child.parent && child.parent.name.includes('Gitter'))) {
                child.material.emissive = new THREE.Color(0x00f0ff);
                child.material.emissiveIntensity = 0.8;
              }
            }
          }
        });

        this.scene.add(this.model);
        if (this.experience.preloader) {
          this.experience.preloader.onItemLoaded('showroom');
        }
      },
      (xhr) => {
        if (this.experience.preloader) {
          this.experience.preloader.onProgress('showroom', xhr.loaded, xhr.total);
        }
      },
      (error) => {
        console.error('Error loading showroom model:', error);
        if (this.experience.preloader) {
          this.experience.preloader.onItemLoaded('showroom');
        }
      }
    );
  }
}
