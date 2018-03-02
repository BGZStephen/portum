import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
})
export class HomeViewComponent implements OnInit {
  carouselOptions: object;
  activeSlide: number;
  slideOverride: number;

  constructor(
  ) {
    this.carouselOptions = {
      slides: [
        {
          image: '/assets/img/slider-img-01.jpg'
        },
        {
          image: '/assets/img/slider-img-02.jpg'
        },
        {
          image: '/assets/img/slider-img-03.jpg'
        },
      ]
    }
  }

  ngOnInit() {

  }

  onSlideOverride(index) {
    this.slideOverride = index;
  }

  onSlideChange(slideIndex) {
    this.activeSlide = slideIndex;
    console.log(slideIndex)
  }

}
