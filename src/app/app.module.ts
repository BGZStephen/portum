import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';

import * as components from 'app/components/components-barrel';

@NgModule({
  declarations: [
    AppComponent,
    components.HomeViewComponent,
    components.ViewWrapperComponent,
    components.NavbarViewComponent,
    components.NavbarMenuComponent,
    components.CarouselComponent,
    components.HomeAboutComponent,
    components.HomeServicesComponent,
    components.HomePortfolioComponent,
    components.HomeTestimonialsComponent,
    components.HomeExpertiseComponent,
    components.HomeTeamComponent,
    components.HomePricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
