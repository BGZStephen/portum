import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
})
export class NavbarMenuComponent implements OnInit {

  menuVisible: boolean = false;

  constructor() { }

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

}
