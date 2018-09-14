import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
 } from '@angular/core';

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
  header?: string,
  content?: string,
  contentClass?: string,
  contentActiveClass?: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() options: Options;
  @Output() onSlideChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() slideOverride;
  currentSlide: number;
  validators: object;
  animations: object;
  slideContainerWidth: string;
  slideWidth: string;
  id: string;
  nextAnimationDelay: number;

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
  }

  ngOnInit() {
    this.id = this.generateId();
    this.validateOptions();
    this.initSlideContainer();
    this.initSlides();
    this.nextSlide(2);
    this.nextAnimationDelay = 10000;
    setInterval(this.animationCountdown, 1000)
  }

  ngAfterViewInit() {
    this.initCarousel();
    this.setSlideImages();
  }

  ngOnChanges(changes) {
    for (const propName in changes) {
      if (propName === 'slideOverride') {
        this.nextSlide(changes[propName].currentValue || 0);
      }
    }
  }

  animationCountdown = () => {
    this.nextAnimationDelay -= 1000;
    if (this.nextAnimationDelay <= 0) {
      this.nextSlide();
    }
  }

  generateId = () => {
    return String(((Math.random() * 10) * new Date().getTime())).slice(0, 4);
  }

  initCarousel = () => {
    const carousel = document.getElementById(`carousel-${this.id}`)
    carousel.style.width = this.options.width ? `${this.options.width}px` : '100vw'
    carousel.style.height = this.options.height ? `${this.options.height}px` : 'auto'
  }

  initSlideContainer = () => {
    this.slideContainerWidth = `${100 * this.options.slides.length}%`
  }

  initSlides = () => {
    this.slideWidth = `${100 / this.options.slides.length}%`
  }

  setSlideImages = () => {
    const carousel = document.getElementById(`carousel-${this.id}`);
    const slides = carousel.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i+= 1) {
      slides[i]['style'].backgroundImage = `url(${this.options.slides[i].image})`;
      slides[i]['style'].backgroundSize = 'cover';
      slides[i]['style'].backgroundPosition = 'center';
    }
  }

  slideContainerStyle = () => {
    return {'width': this.slideContainerWidth, 'left': `-${this.currentSlide * 100}%`}
  }

  slidesStyle = () => {
    return {'width': this.slideWidth}
  }

  animateSlide = (index) => {
    this.nextSlide();
    this.onSlideChange.emit(this.currentSlide);
  }

  nextSlide = (index?) => {
    this.nextAnimationDelay = 10000;
    if (index >= 0) {
      this.currentSlide = index;
    } else {
      this.currentSlide + 1 === this.options.slides.length ? this.currentSlide = 0 : this.currentSlide += 1;
    }
    this.onSlideChange.emit(this.currentSlide)
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
