import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) {

  }


  verifyCodeForm: FormGroup = new FormGroup({

    code: new FormControl('', [Validators.required]),

  })


  verifyCode(verifyCodeForm: FormGroup) {

  }


}
