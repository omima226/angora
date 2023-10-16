import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) {

  }


  changePasswordForm: FormGroup = new FormGroup({

    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    rePassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),

  })


  changePassword(changePasswordForm: FormGroup){
    
  }
}
