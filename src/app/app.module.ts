import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';


import * as components from 'app/components/components-barrel';
import { NavbarViewComponent } from './components/navbar/view/navbar-view.component';

@NgModule({
  declarations: [
    AppComponent,
    components.HomeViewComponent,
    components.ViewWrapperComponent,
    NavbarViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
