// TODO
// unique carousel id on init, assign to id and store as variable for class assignment

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
  validators: object;
  animations: object;
  currentSlide: number;
  slideContainerWidth: string;
  slideWidth: string;

  constructor() {
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

    this.currentSlide = 0;
  }

  ngOnInit() {
    this.validateOptions();
    this.initCarousel();
    this.initSlideContainer();
    this.initSlides();

    setInterval(this.animateSlide, this.options.animationSpeed || 10000)
  }

  initCarousel = () => {
    const carousel = document.getElementById('carousel')
    carousel.style.width = `${this.options.width}px` || '100vw';
    carousel.style.height = `${this.options.height}px` || '100vh';
  }

  initSlideContainer = () => {
    this.slideContainerWidth = `${100 * this.options.slides.length}%`
  }

  initSlides = () => {
    this.slideWidth = `${100 / this.options.slides.length}%`
  }

  slideContainerStyle = () => {
    return {'width': this.slideContainerWidth, 'left': `-${this.currentSlide * 100}%`}
  }

  slidesStyle = () => {
    return {'width': this.slideWidth}
  }

  animateSlide = () => {
    this.nextSlide();
  }

  nextSlide = () => {
    this.currentSlide + 1 === this.options.slides.length ? this.currentSlide = 0 : this.currentSlide += 1;
  }

  validateOptions = () => {
    if (!this.options) {
      throw new Error('Please provide an options configuration object to the carousel component');
    }

    for (const option of Object.keys(this.options)) {
      this.validators[option].call()
    }
  }

  validateHeight = () => {
    if (typeof this.options.height !== 'number') {
      throw new Error('Height must be a number');
    }
  }

  validateWidth = () => {
    if (typeof this.options.width !== 'number') {
      throw new Error('Width must be a number');
    }
  }

  validateAnimation = () => {
    if (!this.animations[this.options.animation]) {
      throw new Error('Invalid animation');
    }
  }

  validateAnimationSpeed = () => {
    if (typeof this.options.animationSpeed !== 'number') {
      throw new Error('Animation speed must be a number');
    }
  }

  validateDelayActive = () => {
    if (typeof this.options.delayActive !== 'boolean') {
      throw new Error('Delay active must be either true or false boolean values');
    }
  }

  validateSlides = () => {
    if (!Array.isArray(this.options.slides)) {
      throw new Error('Please provide slides as an array');
    }
  }
}
