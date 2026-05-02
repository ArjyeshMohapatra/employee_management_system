import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceMgmtComponent } from './attendance-mgmt.component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceMgmtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceMgmtRoutingModule { }
