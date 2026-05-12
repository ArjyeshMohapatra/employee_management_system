import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from "@angular/cdk/table";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CdkTableModule,
    MatToolbarModule
],
  exports: [
    PageLayoutComponent
  ]
})
export class PageLayoutModule { }