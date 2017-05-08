import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable }            from 'rxjs/Observable';
import {CrisisCenter} from './crisiscenter'
import {CrisisCenterService} from './crisiscenter.service'

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises"
        (click)="onSelect(crisis)"
        [class.selected]="isSelected(crisis)">
          <span class="badge">{{ crisis.id }}</span>
          {{ crisis.name }}
      </li>
    </ul>
    <router-outlet></router-outlet>`
})
export class CrisisCenterListComponent implements OnInit {
  crises: CrisisCenter[];
  selectedId: number;

  constructor(
    private service: CrisisCenterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  isSelected(crisis: CrisisCenter) {
    return crisis.id == this.selectedId;
  }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        this.selectedId = +params['id'];
      });
      this.service.getallCrises().subscribe(crises=>this.crises=crises)
  }

  onSelect(crisis: CrisisCenter) {
    this.selectedId = crisis.id;
    // Navigate with relative link
    this.router.navigate(['/crisis-center',crisis.id]);
  }
}