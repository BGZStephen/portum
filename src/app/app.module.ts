import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';

import * as components from 'app/components/components-barrel';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    components.HomeViewComponent,
    components.ViewWrapperComponent,
    components.NavbarViewComponent,
    components.NavbarMenuComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
