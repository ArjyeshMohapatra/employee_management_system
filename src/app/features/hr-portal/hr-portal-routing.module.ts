import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRPortalComponent } from './hr-portal.component';

const routes: Routes = [
  {
    path: '',
    component: HRPortalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRPortalRoutingModule { }
