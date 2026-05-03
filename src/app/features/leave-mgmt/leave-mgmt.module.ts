import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveMgmtRoutingModule } from './leave-mgmt-routing.module';
import { LeaveMgmtComponent } from './leave-mgmt.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutModule } from 'src/app/shared/ui/page-layout/page-layout.module';
import { TableModule } from 'src/app/shared/table/table.module';

@NgModule({
  declarations: [
    LeaveMgmtComponent,
  ],
  imports: [
    CommonModule,
    LeaveMgmtRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PageLayoutModule,
    TableModule
  ]
})
export class LeaveMgmtModule { }
