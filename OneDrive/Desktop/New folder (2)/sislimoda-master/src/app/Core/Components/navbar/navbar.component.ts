import { Component } from '@angular/core';
import { AuthService } from 'src/app/Features/auth/Services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userInfo: any;

  constructor(private _AuthService: AuthService) {
    _AuthService.userInfo.subscribe((res) => {
      this.userInfo = res
      console.log(res);

    })
  }



  openLogoutModal() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.logout()
      }
    })
  }


  logout() {
    this._AuthService.logout()
  }


}
