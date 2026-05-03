import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutModule } from 'src/app/shared/ui/page-layout/page-layout.module';

@NgModule({
  declarations: [
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PageLayoutModule
  ]
})
export class EditProfileModule { }
