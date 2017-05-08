import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing'; //TODO: Create app.routing

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }
