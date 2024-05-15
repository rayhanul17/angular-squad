import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './app/courses/courses.component';
import { UsersComponent } from './app/users/users.component';
import { PublicComponent } from './app/public/public.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./app/courses/courses.module').then((m) => m.CoursesModule)
  },
  {
    path:'users',
    loadChildren: () => import('./app/users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'public', 
    loadChildren: () => import('./app/public/public.module').then(m => m.PublicModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
