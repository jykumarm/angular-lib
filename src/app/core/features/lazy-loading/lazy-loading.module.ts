import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';

import { LazyLoadingHomeComponent } from './lazy-loading-home/lazy-loading-home.component';


@NgModule({
  declarations: [

    LazyLoadingHomeComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
