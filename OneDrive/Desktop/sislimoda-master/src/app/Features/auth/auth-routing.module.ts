import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from './Routes/auth';
import { RegisterComponent } from './Components/auth/Components/register/register.component';
import { LoginComponent } from './Components/auth/Components/login/login.component';
import { AuthComponent } from './Components/auth/auth.component';
import { ChangePasswordComponent } from './Components/auth/Components/change-password/change-password.component';
import { VerifyCodeComponent } from './Components/auth/Components/verify-code/verify-code.component';
import { SendEmailComponent } from './Components/auth/Components/send-email/send-email.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      { path: '', redirectTo: AuthRoutes.login, pathMatch: 'full' },
      { path: AuthRoutes.login, component: LoginComponent },
      { path: AuthRoutes.register, component: RegisterComponent },
      { path: AuthRoutes.changePassword, component: ChangePasswordComponent },
      { path: AuthRoutes.verify, component: VerifyCodeComponent },
      { path: AuthRoutes.email, component: SendEmailComponent },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
