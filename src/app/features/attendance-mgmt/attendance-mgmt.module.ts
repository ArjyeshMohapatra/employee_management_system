import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceMgmtRoutingModule } from './attendance-mgmt-routing.module';
import { AttendanceMgmtComponent } from './attendance-mgmt.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutModule } from 'src/app/shared/ui/page-layout/page-layout.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { SearchBarModule } from 'src/app/shared/ui/search-bar/search-bar.module';

@NgModule({
  declarations: [
    AttendanceMgmtComponent,
  ],
  imports: [
    CommonModule,
    AttendanceMgmtRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PageLayoutModule,
    TableModule,
    SearchBarModule
  ]
})
export class AttendanceMgmtModule { }
