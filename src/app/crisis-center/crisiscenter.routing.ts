import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisCenterComponent } from './crisiscenter.component';
import { CrisisCenterListComponent } from './crisiscenter-list.component';
import { CrisisCenterDetailComponent } from './crisiscenter-detail.component';
import {CrisisDetailResolver} from './crisiscenter.resolver'
const routes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisCenterListComponent,
        children: [
          {
            path: ':id',
            component: CrisisCenterDetailComponent,
            resolve: {
              crisis: CrisisDetailResolver
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CrisisDetailResolver
  ]
})
export class CrisisCenterRoutingModule { }
