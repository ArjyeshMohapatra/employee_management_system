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
    path: 'employees-details',
    component: EmployeesDetailsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'attendance-mgmt',
    component: AttendanceMgmtComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'leave-mgmt',
    component: LeaveMgmtComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'hr-portal',
    component: HRPortalComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}