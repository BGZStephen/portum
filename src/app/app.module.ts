import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';

import * as components from 'app/components/components-barrel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeAboutComponent } from './components/home/about/home-about.component';
import { HomeServicesComponent } from './components/home/services/home-services.component';
import { HomePortfolioComponent } from './components/home/portfolio/home-portfolio.component';
import { HomeTestimonialsComponent } from './components/home/testimonials/home-testimonials.component';
import { HomeExpertiseComponent } from './components/home/expertise/home-expertise.component';
import { HomeTeamComponent } from './components/home/team/home-team.component';
import { HomePricingComponent } from './components/home/pricing/home-pricing.component';

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
    HomePortfolioComponent,
    HomeTestimonialsComponent,
    HomeExpertiseComponent,
    HomeTeamComponent,
    HomePricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
