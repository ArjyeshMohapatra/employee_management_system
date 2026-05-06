import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile.component';
import { EditProfileDeactivateGuard } from 'src/app/core/guards/edit-profile-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: EditProfileComponent,
    canDeactivate: [EditProfileDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProfileRoutingModule { }
