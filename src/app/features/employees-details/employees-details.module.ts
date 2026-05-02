import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesDetailsRoutingModule } from './employees-details-routing.module';
import { EmployeesDetailsComponent } from './employees-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutComponent } from 'src/app/shared/ui/page-layout/page-layout.component';

@NgModule({
  declarations: [
    EmployeesDetailsComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    EmployeesDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeesDetailsModule { }