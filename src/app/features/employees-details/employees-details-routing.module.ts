import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesDetailsComponent } from './employees-details.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesDetailsRoutingModule { }