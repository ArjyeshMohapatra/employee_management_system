import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRPortalRoutingModule } from './hr-portal-routing.module';
import { HRPortalComponent } from './hr-portal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLayoutComponent } from 'src/app/shared/ui/page-layout/page-layout.component';

@NgModule({
  declarations: [
    HRPortalComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    HRPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HRPortalModule { }
