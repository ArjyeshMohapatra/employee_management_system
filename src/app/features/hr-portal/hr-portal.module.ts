import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRPortalRoutingModule } from './hr-portal-routing.module';
import { HRPortalComponent } from './hr-portal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutModule } from 'src/app/shared/ui/page-layout/page-layout.module';
import { TableModule } from 'src/app/shared/table/table.module';

@NgModule({
  declarations: [
    HRPortalComponent,
  ],
  imports: [
    CommonModule,
    HRPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PageLayoutModule,
    TableModule
  ]
})
export class HRPortalModule { }
