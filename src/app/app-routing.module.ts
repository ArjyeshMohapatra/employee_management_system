import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { EmpBasicDetailsComponent } from './layout/emp-basic-details/emp-basic-details.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ForgotPasswordComponent } from './auth/forget-password/forgot-password.component';
import { EmployeesDetailsComponent } from './features/employees-details/employees-details.component';
import { EditProfileComponent } from './features/edit-profile/edit-profile.component';
import { AttendanceMgmtComponent } from './features/attendance-mgmt/attendance-mgmt.component';
import { LeaveMgmtComponent } from './features/leave-mgmt/leave-mgmt.component';
import { HRPortalComponent } from './features/hr-portal/hr-portal.component';
import { GuestGuard } from './core/guards/guest.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [GuestGuard]
  },
  {
    path: 'signup',
    component: SignUpComponent,
    // canActivate: [GuestGuard]
  },
  {
    path: 'emp-basic-regis',
    component: EmpBasicDetailsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    // canActivate: [GuestGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'employees-details',
    loadChildren: () =>
      import('./features/employees-details/employees-details.module')
        .then(m => m.EmployeesDetailsModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'edit-profile',
    loadChildren: () =>
      import('./features/edit-profile/edit-profile.module')
        .then(m => m.EditProfileModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'attendance-mgmt',
    loadChildren: () =>
      import('./features/attendance-mgmt/attendance-mgmt.module')
        .then(m => m.AttendanceMgmtModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'leave-mgmt',
    loadChildren: () =>
      import('./features/leave-mgmt/leave-mgmt.module')
        .then(m => m.LeaveMgmtModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'hr-portal',
    loadChildren: () =>
      import('./features/hr-portal/hr-portal.module')
        .then(m => m.HrPortalModule),
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}