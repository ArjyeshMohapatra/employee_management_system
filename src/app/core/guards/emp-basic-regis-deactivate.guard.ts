import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { EmpBasicDetailsComponent } from 'src/app/layout/emp-basic-details/emp-basic-details.component';

@Injectable({
  providedIn: 'root'
})
export class EmpBasicRegisDeactivateGuard
implements CanDeactivate<EmpBasicDetailsComponent> {

  constructor(private router: Router) {}

  canDeactivate(
    component: EmpBasicDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | UrlTree {

    const isRegistered =
      localStorage.getItem('isRegistered') === 'true';

    if (!isRegistered) {
      return false;
    }

    if (!nextState || nextState.url === '/dashboard') {
      return true;
    }

    return this.router.parseUrl('/dashboard');
  }
}