import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './Components/auth/auth.component';
import { SendEmailComponent } from './Components/auth/Components/send-email/send-email.component';
import { VerifyCodeComponent } from './Components/auth/Components/verify-code/verify-code.component';
import { ChangePasswordComponent } from './Components/auth/Components/change-password/change-password.component';
import { RegisterComponent } from './Components/auth/Components/register/register.component';
import { LoginComponent } from './Components/auth/Components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    SendEmailComponent,
    VerifyCodeComponent,
    ChangePasswordComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    SharedModule

  ]
})
export class AuthModule { }
