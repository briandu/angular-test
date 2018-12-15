import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeEstimateComponent } from './home-estimate/home-estimate.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { MapPinsComponent } from './map-pins/map-pins.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeEstimateComponent,
    SearchBarComponent,
    ListingCardComponent,
    SearchFilterComponent,
    MapPinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
