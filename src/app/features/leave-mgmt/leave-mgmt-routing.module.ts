import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveMgmtComponent } from './leave-mgmt.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveMgmtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveMgmtRoutingModule { }
