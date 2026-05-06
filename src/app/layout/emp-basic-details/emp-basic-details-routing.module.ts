import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpBasicDetailsComponent } from './emp-basic-details.component';
import { EmpBasicRegisDeactivateGuard } from 'src/app/core/guards/emp-basic-regis-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: EmpBasicDetailsComponent,
    canDeactivate: [EmpBasicRegisDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpBasicDetailsRoutingModule { }
