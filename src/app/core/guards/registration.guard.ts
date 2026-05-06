import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isRegistered = localStorage.getItem('isRegistered') === 'true';

      if (isRegistered) return true;
    
      if (state.url === '/emp-basic-regis') return true;
    
      return this.router.parseUrl('/emp-basic-regis');
  }
  
}
