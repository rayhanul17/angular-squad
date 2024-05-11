import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrafComponentComponent } from './draf-component/draf-component.component';
import { FormsModule } from '@angular/forms';
import { DrafComponent2Component } from './draf-component2/draf-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    DrafComponentComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DrafComponent2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
