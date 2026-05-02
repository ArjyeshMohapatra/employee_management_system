import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpBasicDetailsRoutingModule } from './emp-basic-details-routing.module';
import { EmpBasicDetailsComponent } from './emp-basic-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmpBasicDetailsComponent
  ],
  imports: [
    CommonModule,
    EmpBasicDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpBasicDetailsModule { }
