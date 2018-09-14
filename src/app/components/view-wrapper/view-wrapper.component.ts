import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-wrapper',
  templateUrl: './view-wrapper.component.html',
  styleUrls: ['./view-wrapper.component.scss']
})
export class ViewWrapperComponent implements OnInit, AfterViewInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  fragment: string;

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
}
