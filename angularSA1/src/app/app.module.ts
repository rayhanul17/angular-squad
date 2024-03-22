import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCard } from './main-card/mainCard.component';
import { NavBar } from './nav-bar/navBar.component';
import { MainFooter } from './main-footer/mainFooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCard,   
    NavBar,
    MainFooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
