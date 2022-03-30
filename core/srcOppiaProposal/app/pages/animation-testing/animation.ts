import { Component } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';

@Component({
  selector: 'animation',
  templateUrl: './animation.html'
})
export class AnimationComponent {
  constructor(
        private joyride: JoyrideService
  ) { }

  start(): void {
    this.joyride.startTour(
      { steps: ['animation1', 'animation2',
        'animation3', 'animation0', 'animationBtn'] }
    );
  }
}
