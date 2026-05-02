import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PageLayoutComponent } from 'src/app/shared/ui/page-layout/page-layout.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
