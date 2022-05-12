import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule } from './auth-routing.module';
import { AccountComponent } from './account/account.component';
import { CoreuiModule } from '../coreui/coreui.module';
import { AuthService } from './auth.service';




@NgModule({
  declarations: [
    ChangePasswordComponent,
    ConfirmPasswordComponent,
    ForgetPasswordComponent,
    RegistrationComponent,
    LoginComponent,
    AccountComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreuiModule,
  ],
  exports:[
    CommonModule,
    AuthRoutingModule,


  ],
  providers:[
    // DashbordService,
    AuthService,
  ]
})
export class AuthModule { }
