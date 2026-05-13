import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { CheckRegistrationService } from '../services/check-registration.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard implements CanActivate {
  constructor(
    private router: Router,
    private crs: CheckRegistrationService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.crs.checkRegistrationStatus().pipe(
      map(isRegistered => {
        const isRegisPath = state.url === '/emp-basic-regis';

        if (isRegistered) {
          // If already registered, don't let them stay on the registration page
          return isRegisPath ? this.router.parseUrl('/dashboard') : true;
        }

        // If not registered, they MUST be on the registration page
        return isRegisPath ? true : this.router.parseUrl('/emp-basic-regis');
      })
    );
  }
  
}
