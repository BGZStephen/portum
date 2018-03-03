import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';

import * as components from 'app/components/components-barrel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeAboutComponent } from './components/home/about/home-about.component';
import { HomeServicesComponent } from './components/home/services/home-services.component';
import { HomePortfolioComponent } from './components/home/portfolio/home-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    components.HomeViewComponent,
    components.ViewWrapperComponent,
    components.NavbarViewComponent,
    components.NavbarMenuComponent,
    CarouselComponent,
    HomeAboutComponent,
    HomeServicesComponent,
    HomePortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
