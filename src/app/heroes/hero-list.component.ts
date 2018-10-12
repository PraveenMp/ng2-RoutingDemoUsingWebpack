import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import {Hero} from './hero';
import {HeroService} from './heroes.service'
import { Observable } from 'rxjs/Observable';

@Component({
    template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>

    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class HeroListComponent implements OnInit {
    heroes:Hero[];
    selectedID:number;
    username: string;
    password: string;

    constructor(
        private service: HeroService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() { 
         this.route.params.subscribe(params => {
            this.selectedID = +params['id'];
         });
         this.service.getallHeroes().subscribe(heroes=>this.heroes=heroes);
    }

    isSelected(hero:Hero){
        return (hero.id==this.selectedID);
    }

    onSelect(hero:Hero){
        this.router.navigate(['/hero',hero.id]);
    }
}
