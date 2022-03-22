import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerLoadingRoutingModule } from './eager-loading-routing.module';
import { EagerLoadingHomeComponent } from './eager-loading-home/eager-loading-home.component';



@NgModule({
  declarations: [
    EagerLoadingHomeComponent

  ],
  imports: [
    CommonModule,
    EagerLoadingRoutingModule
  ]
})
export class EagerLoadingModule { }
