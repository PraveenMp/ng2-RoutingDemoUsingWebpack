import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {HeroesRoutingModule} from './heroes.routing'
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './heroes.service';

@NgModule({
    imports: [CommonModule,FormsModule,HeroesRoutingModule],
    declarations: [HeroListComponent,HeroDetailComponent],
    providers: [HeroService],
})
export class HeroesModule { }
