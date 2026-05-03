import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageLayoutComponent
  ]
})
export class PageLayoutModule { }