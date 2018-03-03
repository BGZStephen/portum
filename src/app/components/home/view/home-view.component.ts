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
          image: '/assets/img/slider-img-01.jpg',
          header: 'Grow your business with portum',
          content: 'From zero to hero along with you'
        },
        {
          image: '/assets/img/slider-img-02.jpg',
          header: 'Apogee of the business',
          content: 'From zero to hero along with you'
        },
        {
          image: '/assets/img/slider-img-03.jpg',
          header: 'Maintaining the business',
          content: 'Keep your time, grow your business'
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
  }

}
