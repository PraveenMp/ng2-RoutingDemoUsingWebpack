import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrisisCenter } from './crisiscenter'
import { CrisisCenterService } from './crisiscenter.service'

@Component({
  template: `
  <div *ngIf="crisis">
    <h3>"{{ crisis.name }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}
    </div>
    <div>
      <label>Name: </label>{{ crisis.name }}
      <label>Name: </label>
    </div>
    <p>
      <button (click)="cancel()">GoBack</button>
    </p>
  </div>`
})
export class CrisisCenterDetailComponent implements OnInit {
  crisis: CrisisCenter;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisCenterService
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { crisis: CrisisCenter }) => {
        this.crisis = data.crisis;
      });
  }

  cancel() {
    this.gotoCrises();
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
  }
}