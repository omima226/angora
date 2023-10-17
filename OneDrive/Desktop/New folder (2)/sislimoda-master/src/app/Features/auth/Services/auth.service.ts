import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import jwt_decode from "jwt-decode";
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false)
  userInfo: BehaviorSubject<any> = new BehaviorSubject({})
  userToken: string = ""
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    this.checkLocalStorage()

    window.addEventListener('storage', (event: StorageEvent) => {
      this.checkLocalStorage()
    });


  }

  checkLocalStorage() {
    if (localStorage.getItem(environment.localStorageName) != null) {
      this.userToken = localStorage.getItem(environment.localStorageName) || ""
      try {
        this.isUserLoggedIn.next(true)
        var decoded = jwt_decode(this.userToken)
        console.log(decoded);

      } catch (error) {
        this.isUserLoggedIn.next(false)
        localStorage.removeItem(environment.localStorageName)
        console.log(error);
      }
    } else {
      this.isUserLoggedIn.next(false)
      this._Router.navigate(['/auth'])
    }
  }

  login(loginObject: any): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + `/api/Auth/LoginAdmin?userName=${loginObject.userName}&password=${loginObject.password}`, {})
  }

  logout() {
    this.isUserLoggedIn.next(false);
    localStorage.removeItem(environment.localStorageName)
    this._Router.navigate(['/auth/login'])
  }


  forgetPassword(userName: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + '/api/Auth/ForgetPassword?userName=' + userName, {})
  }

  resetPassword(userName: string, resetToken: string, newpassword: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + `/api/Auth/ForgetPasswordConfirm?userName=${userName}&resetToken=${resetToken}&Newpassword=${newpassword}`, {})
  }

}
