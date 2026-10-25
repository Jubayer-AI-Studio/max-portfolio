import SkyStudio from './SkyStudio.js';
import Floor from './Floor.js';
import Turntable from './Turntable.js';
import StudioScreen from './StudioScreen.js';
import ProjectsScreen from './ProjectsScreen.js';
import SocialScreen from './SocialScreen.js';
import Environment from './Environment.js';
import Car from './Car.js';
import Hotspots from './Hotspots.js';
import ExplodedCallouts from './ExplodedCallouts.js';

export default class World {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;

    this.skyStudio = new SkyStudio(this.experience);
    this.floor = new Floor(this.experience);
    this.turntable = new Turntable(this.experience);
    this.studioScreen = new StudioScreen(this.experience);
    this.projectsScreen = new ProjectsScreen(this.experience);
    this.socialScreen = new SocialScreen(this.experience);
    this.environment = new Environment(this.experience);
    this.car = new Car(this.experience);
    this.hotspots = new Hotspots(this.experience);
    this.explodedCallouts = new ExplodedCallouts(this.experience);
  }

  update(delta, elapsed) {
    if (this.car) {
      this.car.update(delta);
    }
    if (this.turntable) {
      this.turntable.update(delta);
    }
    if (this.studioScreen) {
      this.studioScreen.update(delta, elapsed);
    }
    if (this.projectsScreen) {
      this.projectsScreen.update(delta, elapsed);
    }
    if (this.socialScreen) {
      this.socialScreen.update(delta, elapsed);
    }
    if (this.hotspots) {
      this.hotspots.update();
    }
    if (this.explodedCallouts) {
      this.explodedCallouts.update();
    }
  }
}
