import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveMgmtRoutingModule } from './leave-mgmt-routing.module';
import { LeaveMgmtComponent } from './leave-mgmt.component';

@NgModule({
  declarations: [
    LeaveMgmtComponent
  ],
  imports: [
    CommonModule,
    LeaveMgmtRoutingModule
  ]
})
export class LeaveMgmtModule { }
