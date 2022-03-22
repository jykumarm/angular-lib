import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JayaLibModule } from 'projects/jaya-lib/src/lib/jaya-lib.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerLoadingModule } from './core/features/eager-loading/eager-loading.module';
import { LazyLoadingModule } from './core/features/lazy-loading/lazy-loading.module';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { TeamComponent } from './core/components/team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JayaLibModule,
    EagerLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
