import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { DrafComponentComponent } from './draf-component/draf-component.component';
import { FormsModule } from '@angular/forms';
import { DrafComponent2Component } from './draf-component2/draf-component2.component';
import { PublicModule } from './public/public.module';
import { UsersModule } from './users/users.module';
import { CommonModule, NgClass } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DrafComponentComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DrafComponent2Component,
    PublicModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
