import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LeaveService } from '../services/leave.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HrPortalGuard implements CanActivate {

  constructor(
    private leaveService: LeaveService,
    private router: Router,
    private notify: NotificationService
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.leaveService.getLeavesByStatus('PENDING').pipe(
      map(() => true),
      catchError((err) => {
        if (err.status === 403) {
          localStorage.setItem('hrPortalBlocked', 'true');
          this.notify.showWarning(
            'Permission denied',
            'You have to be an admin or HR in order to access this page.'
          );
          return of(this.router.parseUrl('/dashboard'));
        }

        return of(this.router.parseUrl('/login'));
      })
    );
  }
}