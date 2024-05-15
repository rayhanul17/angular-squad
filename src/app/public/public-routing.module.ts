import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { UsersComponent } from '../users/users.component';
import { DrafComponentComponent } from '../draf-component/draf-component.component';
import { DrafComponent2Component } from '../draf-component2/draf-component2.component';

const routes: Routes = [
  { 
    path: '', 
    component: PublicComponent 
  },
  {
    path: 'b1',
    component: DrafComponentComponent
  },
  {
    path: 'b2',
    component: DrafComponent2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
