import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesDetailsRoutingModule } from './employees-details-routing.module';
import { EmployeesDetailsComponent } from './employees-details.component';

@NgModule({
  declarations: [
    EmployeesDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeesDetailsRoutingModule
  ]
})
export class EmployeesDetailsModule { }