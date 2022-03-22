import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { TeamComponent } from './core/components/team/team.component';

const routes: Routes = [

  {
    path: "lazy", 

    loadChildren: () => import('./core/features/lazy-loading/lazy-loading.module').then( m => m.LazyLoadingModule)
  },

  {path: "dashboard", component: DashboardComponent},
  {path: 'team', component: TeamComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
