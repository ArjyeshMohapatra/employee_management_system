import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesDetailsRoutingModule } from './employees-details-routing.module';
import { EmployeesDetailsComponent } from './employees-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutModule } from 'src/app/shared/ui/page-layout/page-layout.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { SearchBarModule } from 'src/app/shared/ui/search-bar/search-bar.module';

@NgModule({
  declarations: [
    EmployeesDetailsComponent,
  ],
  imports: [
    CommonModule,
    EmployeesDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PageLayoutModule,
    TableModule,
    SearchBarModule
  ]
})
export class EmployeesDetailsModule { }