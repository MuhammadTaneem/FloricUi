import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BACKEND_URL = environment.apiUrl + 'auth/';

  isAuthenticated = false;
  uid!: any;
  token!: any;
  tokenTimer: any;
  haveToken = new Subject<boolean>();
  Loading = new Subject<boolean>();
  created = new Subject<boolean>();
  tokenTimeDuration = 60*60*24*30;

  constructor(  
    private http: HttpClient,
    ) { }

  // login(email:string, pass:string){}


  login(email: string, password: string) {
    this.http
      .post<{ access: string; refresh: string }>(
        this.BACKEND_URL + 'jwt/create/',
        {
          email,
          password,
        }
      )
      .subscribe(
        (loginData) => {
          if (loginData.access) {
            // this.snacbar.open('login success ', 'X', { duration: 2000 });

            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + this.tokenTimeDuration * 1000
            );

            this.Loading.next(false);
            localStorage.setItem('token', loginData.access);
            // localStorage.setItem('uid', loginData.user.id);
            localStorage.setItem('expiration', expirationDate.toISOString());

            // this.loadMe(loginData.access);
          }
        },
        (error) => {
          this.Loading.next(false);
          let err = JSON.stringify(error.error);
          err = err.split(':')[1];
          // err = err.slice(2, -4);
          // this.snacbar.open(err, 'X');
        }
      );
  }

  forgetpass(email:string){}
  changePass(opass:string,pass1:string,pass2:string){}
  forgetPassConfirm(pass1:string,pass2:string){}
}
