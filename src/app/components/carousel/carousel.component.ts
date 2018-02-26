import { Component, OnInit, Input } from '@angular/core';

interface Options {
  height?: number,
  width?: number,
  animation?: string,
  animationSpeed?: number,
  delayActive?: boolean,
  slides?: Array<Slide>,
}

interface Slide {
  image?: string,
  content?: string,
  contentClass?: string,
  contentActiveClass?: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() options: Options;

  constructor(
    private validators: object,
    private animations: object,
  ) {
    this.validators = {
      height: this.validateHeight,
      width: this.validateWidth,
      animation: this.validateAnimation,
      animationSpeed: this.validateAnimationSpeed,
      delayActive: this.validateDelayActive,
      slides: this.validateSlides,
    }

    this.animations = {
      slide: () => null,
      fade: () => null,
    }
  }

  ngOnInit() {
    this.validateOptions();
  }

  validateOptions() {
    if (!this.options) {
      throw new Error('Please provide an options configuration object to the carousel component');
    }

    for (const option of Object.keys(this.options)) {
      this.validators[option].call()
    }
  }

  validateHeight() {
    if (typeof this.options.height !== 'number') {
      throw new Error('Height must be a number');
    }
  }

  validateWidth() {
    if (typeof this.options.width !== 'number') {
      throw new Error('Width must be a number');
    }
  }

  validateAnimation() {
    if (!this.animations[this.options.animation]) {
      throw new Error('Invalid animation');
    }
  }

  validateAnimationSpeed() {
    if (typeof this.options.animationSpeed !== 'number') {
      throw new Error('Animation speed must be a number');
    }
  }

  validateDelayActive() {
    if (typeof this.options.delayActive !== 'boolean') {
      throw new Error('Delay active must be either true or false boolean values');
    }
  }

  validateSlides() {
    if (!Array.isArray(this.options.slides)) {
      throw new Error('Please provide slides as an array');
    }
  }

  // add left 100% per slide in the carousel
  // at the end of the carousel, find a graceful way of restarting

}
