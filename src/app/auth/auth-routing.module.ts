import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
    path: 'login',
    component: LoginComponent,
    },
    {
      path: 'registration',
      component: RegistrationComponent,
    },
    {
      path: 'chnage-password',
      component: ChangePasswordComponent,
    },
    {
      path: 'confirm-password',
      component: ConfirmPasswordComponent,
    },
    {
      path: 'forget-password',
      component: ForgetPasswordComponent,
    },
    {
      path: 'account',
      component: AccountComponent,
    },
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
