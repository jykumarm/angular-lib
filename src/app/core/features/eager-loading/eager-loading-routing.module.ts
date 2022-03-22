import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerLoadingHomeComponent } from './eager-loading-home/eager-loading-home.component';

const routes: Routes = [

  {
    path: "eager-home", component: EagerLoadingHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerLoadingRoutingModule { }
