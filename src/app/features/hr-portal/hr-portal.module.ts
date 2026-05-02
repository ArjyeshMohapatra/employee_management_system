import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRPortalRoutingModule } from './hr-portal-routing.module';
import { HRPortalComponent } from './hr-portal.component';

@NgModule({
  declarations: [
    HRPortalComponent
  ],
  imports: [
    CommonModule,
    HRPortalRoutingModule
  ]
})
export class HRPortalModule { }
