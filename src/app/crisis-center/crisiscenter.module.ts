import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import {CrisisCenterRoutingModule} from './crisiscenter.routing'
import { CrisisCenterComponent } from './crisiscenter.component';
import { CrisisCenterListComponent } from './crisiscenter-list.component';
import { CrisisCenterDetailComponent } from './crisiscenter-detail.component';
import { CrisisCenterService } from './crisiscenter.service'

@NgModule({
    imports: [FormsModule,CommonModule,CrisisCenterRoutingModule],
    exports: [],
    declarations: [CrisisCenterComponent,CrisisCenterListComponent,CrisisCenterDetailComponent],
    providers: [CrisisCenterService],
})
export class CrisisCenterModule { }
