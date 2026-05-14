import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { EmpBasicDetailsComponent } from 'src/app/layout/emp-basic-details/emp-basic-details.component';
import { CheckRegistrationService } from '../services/check-registration.service';
import { take, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpBasicRegisDeactivateGuard
  implements CanDeactivate<EmpBasicDetailsComponent> {

  constructor(
    private router: Router,
    private crs: CheckRegistrationService
  ) { }

  canDeactivate(
    component: EmpBasicDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean {

    return this.crs.checkRegistrationStatus().pipe(
      take(1),
      map(isRegistered => {
        if (isRegistered) {
          return true; // Allow leaving if successfully registered
        }
        
        // If not registered, they must stay unless they are logout-ing
        return false;
      })
    );
  }
}