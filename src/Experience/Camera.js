import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

export default class Camera {
  constructor(experience) {
    this.experience = experience;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstance();
    this.setControls();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      45,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.updateFov();
    // Panoramic hero angle showcasing the car, 3D computer workstation, and sky penthouse
    this.instance.position.set(-4.8, 1.9, 4.4);
    this.scene.add(this.instance);
  }

  updateFov() {
    const aspect = this.sizes.width / this.sizes.height;
    if (aspect < 1.0) {
      // In portrait mobile, expand vertical FOV so horizontal coverage accommodates the car
      const targetHFov = 58 * Math.PI / 180;
      const calculatedFov = 2 * Math.atan(Math.tan(targetHFov / 2) / aspect) * (180 / Math.PI);
      this.instance.fov = Math.min(70, Math.max(45, calculatedFov));
    } else {
      this.instance.fov = 45;
    }
    this.instance.updateProjectionMatrix();
  }

  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.rotateSpeed = 0.85;
    
    // Strict boundaries so camera NEVER gets lost
    this.controls.maxDistance = 9.5;
    this.controls.minDistance = 2.0;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.04; // Never clip under floor
    this.controls.minPolarAngle = 0.15; // Clean top angle
    
    // Disable panning so the car always stays in the exact center
    this.controls.enablePan = false;
    this.controls.target.set(0, 0.65, 0);

    // Subtle idle auto-rotation
    this.controls.autoRotate = false;
    this.controls.autoRotateSpeed = 0.8;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.updateFov();
  }

  update() {
    this.controls.update();
  }

  /**
   * Smooth cinematic camera transition to preset coordinates
   */
  transitionTo(pos, target, duration = 1.4) {
    this.controls.enabled = false;

    const timeline = gsap.timeline({
      onComplete: () => {
        this.controls.enabled = true;
      }
    });

    timeline.to(this.instance.position, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: duration,
      ease: 'power2.inOut'
    }, 0);

    timeline.to(this.controls.target, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: duration,
      ease: 'power2.inOut'
    }, 0);

    return timeline;
  }
}
