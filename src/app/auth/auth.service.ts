import { User } from './auth.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

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
  redirectUrl :string| null= '';

  constructor(
    private http: HttpClient,
    private snacbar: MatSnackBar,
    private router: Router,
    private location: Location,
  ) {}

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
            this.snacbar.open('login success ', 'X', { duration: 2000 });

            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + this.tokenTimeDuration * 1000
            );

            this.Loading.next(false);
            localStorage.setItem('token', loginData.access);
            // localStorage.setItem('uid', loginData.user.id);
            localStorage.setItem('expiration', expirationDate.toISOString());
            this.loadId(loginData.access);

            // this.loadMe();
          }
        },
        (error) => {
          this.Loading.next(false);
          let err = JSON.stringify(error.error);
          err = err.split(':')[1];
          // err = err.slice(2, -4);
          this.snacbar.open(err, 'X');
        }
      );
  }


  // invokeMe(){
  //   this.http.get<User>(this.BACKEND_URL+'user/me/').subscribe((myData)=>{
  //     console.log(myData)
  //   })
  // }

  loadId(access: string) {
    const headers = new HttpHeaders().set('Authorization', `jwt ${access}`);
    this.http
      .get<{ id: string; email: string }>(this.BACKEND_URL + 'users/me/', {
        headers: headers,
      })
      .subscribe((profileData) => {
        localStorage.setItem('uid', profileData.id);
        this.uid = profileData.id;
        // this.backClicked()
        console.log(this.redirectUrl);
        // this.redirectUrl = localStorage.getItem('redirectUrl');
        console.log(localStorage.getItem('redirectUrl'))
        this.router.navigate([localStorage.getItem('redirectUrl')]);
      });
  }

  getToken(){
    return this.token;

  }

  getId(){
    return this.uid;
  }

  authenticationStatus() {
    return this.isAuthenticated;
  }

  haveTokenLisenter() {
    return this.haveToken.asObservable();
  }


  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.uid = authInformation.uid;
      this.isAuthenticated = true;
      this.haveToken.next(true);
      // this.setAuthTimer(expiresIn / 1000);
      this.setAuthTimer(expiresIn);
    }
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logOut();
    }, 3600 * 24 * 1000);
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    let expirationDate = localStorage.getItem('expiration');
    const uid = localStorage.getItem('uid');

    if (!token || !expirationDate) {
      return false;
    }
    return {
      token: token,
      uid: uid,
      expirationDate: new Date(expirationDate),
    };
  }

  logOut() {
    clearTimeout(this.tokenTimer);
    this.isAuthenticated = false;
    this.token = null;
    this.uid = null;
    localStorage.clear();
    this.haveToken.next(false);
    this.router.navigate(['/']);
    this.snacbar.open('you are logged out  ', 'X', { duration: 2000 });
  }
  backClicked() {
    this.location.back();
  }

  forgetpass(email:string){}

  changePass(form: any) {
    this.http
      .post<{}>(this.BACKEND_URL + 'users/set_password/', form)
      .subscribe(
        (HttpResponse) => {
          this.snacbar.open('successfully changed your password ', 'X', {
            duration: 2000,
          });
          this.router.navigate(['/']);
        },
        (error) => {
          let err = JSON.stringify(error.error);
          err = err.split(':')[1];
          err = err.slice(1, -4);
          this.snacbar.open(err, 'X');
        }
      );
  }
  forgetPassConfirm(pass1:string,pass2:string){}
  createUser(first_name: string,last_name: string,phone:number,date_of_birth:string ,gende: string, city: string, address: string ,email: string,password: string 
  ){}
}
