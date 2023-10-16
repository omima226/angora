import jwt_decode from 'jwt-decode';

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading: boolean = false
  errorMessage: string = ""


  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
  ) {

  }


  loginForm: FormGroup = new FormGroup({

    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),

  })


  login(loginForm: FormGroup) {
    console.log(loginForm);

    if (loginForm.valid) {
      this.errorMessage = ""
      if (!this.isLoading) {
        this.isLoading = true
        this._AuthService.login(loginForm.value).subscribe({
          next: (res) => {
            // localStorage.setItem(environment.userData, jwt_decode)
            console.log(res);
            localStorage.setItem(environment.localStorageName, res.token)
            this._AuthService.isUserLoggedIn.next(true)
            this._Router.navigate(['/'])
            this.isLoading = false
          },
          error: (err) => {
            console.log(err.error.message);
            this.errorMessage = err.error.message
            this.isLoading = false
          }
        })
      }

    } else {
      this.loginForm.markAllAsTouched()
    }
  }
}
