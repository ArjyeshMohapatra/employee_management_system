import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpBasicDetailsComponent } from './emp-basic-details.component';

const routes: Routes = [
  {
    path: '',
    component: EmpBasicDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpBasicDetailsRoutingModule { }
