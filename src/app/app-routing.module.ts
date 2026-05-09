import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { RegistrationGuard } from './core/guards/registration.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./auth/signup/signup.module')
      .then(m => m.SignupModule),
    canActivate: [GuestGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./auth/forget-password/forget-password.module')
      .then(m => m.ForgetPasswordModule),
    canActivate: [GuestGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./layout/dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    canActivate: [AuthGuard, RegistrationGuard]
  },
  {
    path: 'emp-basic-regis',
    loadChildren: () =>
      import('./layout/emp-basic-details/emp-basic-details.module')
        .then(m => m.EmpBasicDetailsModule),
    canActivate: [AuthGuard, RegistrationGuard]
  },
  {
    path:'employees-details',
    loadChildren: () =>
      import('./features/employees-details/employees-details.module')
        .then(m => m.EmployeesDetailsModule),
    canActivate: [AuthGuard, RegistrationGuard]
  },
  {
    path: 'edit-profile',
    loadChildren: () =>
      import('./features/edit-profile/edit-profile.module')
        .then(m => m.EditProfileModule),
    canActivate: [AuthGuard, RegistrationGuard]
  },
  {
    path: 'attendance-mgmt',
    loadChildren: () =>
      import('./features/attendance-mgmt/attendance-mgmt.module')
        .then(m => m.AttendanceMgmtModule),
    canActivate: [AuthGuard, RegistrationGuard]
  },
  {
    path: 'leave-mgmt',
    loadChildren: () =>
      import('./features/leave-mgmt/leave-mgmt.module')
        .then(m => m.LeaveMgmtModule),
    canActivate: [AuthGuard, RegistrationGuard]
  },
  {
    path: 'hr-portal',
    loadChildren: () =>
      import('./features/hr-portal/hr-portal.module')
        .then(m => m.HRPortalModule),
    canActivate: [AuthGuard, RegistrationGuard]  
  },
  {
    path: '**',
    loadChildren: () =>
      import('./shared/not-found/not-found.module')
        .then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}