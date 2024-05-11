import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule)
  },
  {
    path:'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'public', 
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
