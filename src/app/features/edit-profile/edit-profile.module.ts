import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutModule } from 'src/app/shared/ui/page-layout/page-layout.module';
import { ErrorControlComponent } from 'src/app/shared/error-control/error-control.component';
import { ErrorMsgPipe } from 'src/app/core/pipes/error-msg.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    EditProfileComponent,
    ErrorControlComponent,
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PageLayoutModule,
    ErrorMsgPipe,
    MatButtonModule,
    MatFormFieldModule
]
})
export class EditProfileModule { }
