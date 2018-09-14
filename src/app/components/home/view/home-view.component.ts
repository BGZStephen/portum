import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
})
export class HomeViewComponent implements OnInit, AfterViewInit {
  carouselOptions: object;
  activeSlide: number;
  slideOverride: number;
  fragment: string;

  constructor(
    private route: ActivatedRoute,
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
    this.route.fragment.subscribe(fragment => { this.fragment = fragment });
  }

  ngAfterViewInit(): void {
    if (this.fragment) {
      this.goTo(this.fragment)
    }
  }

  goTo(id): void {
    const element = document.getElementById(id)

    if (element) {
      window.scrollTo({top: element.offsetTop, behavior: 'smooth'});
    }
  }

  onSlideOverride(index) {
    this.slideOverride = index;
  }

  onSlideChange(slideIndex) {
    this.activeSlide = slideIndex;
  }

}
