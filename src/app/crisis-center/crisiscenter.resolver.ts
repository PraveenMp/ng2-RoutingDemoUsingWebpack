import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';
import { CrisisCenter } from './crisiscenter'
import { CrisisCenterService } from './crisiscenter.service'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CrisisDetailResolver implements Resolve<CrisisCenter> {
  constructor(private service: CrisisCenterService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CrisisCenter> {
     let id = route.params['id'];
     return this.service.getCrisisDetails(+id).map(crisis => {
      if (crisis) {
        return crisis;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return null;
      }
    }).first();
  }
}