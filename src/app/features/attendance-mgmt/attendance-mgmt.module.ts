import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceMgmtRoutingModule } from './attendance-mgmt-routing.module';
import { AttendanceMgmtComponent } from './attendance-mgmt.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutComponent } from 'src/app/shared/ui/page-layout/page-layout.component';

@NgModule({
  declarations: [
    AttendanceMgmtComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    AttendanceMgmtRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AttendanceMgmtModule { }
