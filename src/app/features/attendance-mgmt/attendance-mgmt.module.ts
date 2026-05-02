import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceMgmtRoutingModule } from './attendance-mgmt-routing.module';
import { AttendanceMgmtComponent } from './attendance-mgmt.component';


@NgModule({
  declarations: [
    AttendanceMgmtComponent
  ],
  imports: [
    CommonModule,
    AttendanceMgmtRoutingModule
  ]
})
export class AttendanceMgmtModule { }
