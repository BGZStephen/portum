import { Component, OnInit, Input } from '@angular/core';

interface Options {
  height?: number,
  width?: number,
  animation?: string,
  animationSpeed?: number,
  delayActive?: boolean,
  slide?: Array<Slide>,
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
  @Input() Options: Options;

  constructor() { }

  ngOnInit() {
  }

}
