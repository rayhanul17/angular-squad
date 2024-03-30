import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details.component';
import { FirstCourseComponent } from '../cards/first-course/first-course.component';
import { SecondCourseComponent } from '../cards/second-course/second-course.component';

const routes: Routes = [ 
  {
    path: 'first-course',
    component: FirstCourseComponent
  },
  {
    path: 'second-course',
    component: SecondCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailsRoutingModule { }
