import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) {

  }

  sendEmailForm: FormGroup = new FormGroup({

    userName: new FormControl('', [Validators.required]),

  })


  sendEmail(sendEmailForm: FormGroup) {

  }

}
