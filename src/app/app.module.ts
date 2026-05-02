import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './auth/signup/signup.component';
import { EmpBasicDetailsComponent } from './layout/emp-basic-details/emp-basic-details.component';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './auth/forget-password/forgot-password.component';
import { HeaderComponent } from './shared/ui/header/header.component';
import { SidebarComponent } from './shared/ui/sidebar/sidebar.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { PageLayoutComponent } from './shared/ui/page-layout/page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    EmpBasicDetailsComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    SidebarComponent,
    NotificationComponent,
    PageLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule, 
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
