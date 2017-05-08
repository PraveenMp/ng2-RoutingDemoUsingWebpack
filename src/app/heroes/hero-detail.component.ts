import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import {Hero} from './hero';
import {HeroService} from './heroes.service'

@Component({
    template: `
    <h2>HEROES</h2>
    <div *ngIf="hero">
        <h3>"{{ hero.name }}"</h3>
        <div>
        <label>Id: </label>{{ hero.id }}</div>
        <div>
        <label>Name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
        <p>
        <button (click)="gotoHeroes()">Back</button>
        </p>
    </div>`
})
export class HeroDetailComponent implements OnInit {
    hero:Hero;

    constructor(
        private service:HeroService,
        private route:ActivatedRoute,
        private router:Router
    ) { }

    ngOnInit() { 
        this.route.params
            .switchMap(params => this.service.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    gotoHeroes() {
        let heroId = this.hero ? this.hero.id : null;
        this.router.navigate(['/heroes', { id: heroId }]);
    }
}