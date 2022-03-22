import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingHomeComponent } from './lazy-loading-home/lazy-loading-home.component';

const routes: Routes = [


  {
    path: "", 
    component: LazyLoadingHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
