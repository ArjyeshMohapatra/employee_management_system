import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveMgmtRoutingModule } from './leave-mgmt-routing.module';
import { LeaveMgmtComponent } from './leave-mgmt.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutComponent } from 'src/app/shared/ui/page-layout/page-layout.component';

@NgModule({
  declarations: [
    LeaveMgmtComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    LeaveMgmtRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LeaveMgmtModule { }
