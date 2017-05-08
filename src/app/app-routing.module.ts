import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent }    from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  /*{
    path: 'crisis-center',
    loadChildren: './app/crisis-center/crisiscenter.module#CrisisCenterModule'
  },*/
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
