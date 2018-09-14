import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
})
export class NavbarMenuComponent implements OnInit {

  menuVisible: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setMenuVisible() {
    if (screen.width >= 1024) {
      return this.menuVisible = true;
    }

    if (screen.width < 1024) {
      return this.menuVisible = false;
    }
  }

  onWindowResize() {
    this.setMenuVisible();
  }

  toggleMenuVisible() {
    this.menuVisible = !this.menuVisible;
  }

  menuStyle() {
    if (this.menuVisible) {
      document.getElementById('menu').classList.add('open');
    } else {
      document.getElementById('menu').classList.remove('open');
    }
  }

  goTo(id) {
    const element = document.getElementById(id)

    if (!element) {
      return this.router.navigate(['/'], {fragment: id});
    }

    window.scrollTo({top: element.offsetTop, behavior: 'smooth'});
  }
}
