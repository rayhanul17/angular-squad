import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDetailsModule } from './course-details/course-details.module';
import { FirstCourseComponent } from './cards/first-course/first-course.component';
import { SecondCourseComponent } from './cards/second-course/second-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    UsersComponent,
    CourseDetailsComponent,
    FirstCourseComponent,
    SecondCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
