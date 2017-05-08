import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {AuthGuard} from '../authguard.service'

const AdminRoutes: Routes = [
  { path: 'admin', component: AdminComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminRoutingModule { }
