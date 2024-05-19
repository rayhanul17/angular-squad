import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
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
