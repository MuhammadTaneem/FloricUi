import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  BACKEND_URL = environment.apiUrl;
  

  constructor(private authService: AuthService) {}


  freeurl: string[] = [
    this.BACKEND_URL + 'auth/jwt/create/',
    this.BACKEND_URL + 'auth/users/',
    this.BACKEND_URL + 'users/me/',
    this.BACKEND_URL + 'auth/users/reset_password/',
    this.BACKEND_URL + 'auth/users/resend_activation/',
    this.BACKEND_URL + 'auth/users/activation/',
    this.BACKEND_URL + 'auth/users/reset_password_confirm/',
    this.BACKEND_URL + 'api/products/list/',
    this.BACKEND_URL + 'api/products/list/:id',
    this.BACKEND_URL + 'api/products/category/',
    this.BACKEND_URL + 'api/ratting/',
  ];

  usedUrl:string[] =[
    this.BACKEND_URL+'api/cart/',
    this.BACKEND_URL+'api/profile/',
    this.BACKEND_URL+'api/orders/',
    this.BACKEND_URL+'auth/users/set_password/'
    // this.BACKEND_URL+'api/ratting/',
    // this.BACKEND_URL+'api/cart/',
    // this.BACKEND_URL+'api/cart/',

  ]

  isfree(url: string) {
    let mainUrl = url.split('?')[0]
    for (let i = 0; i < this.usedUrl.length; i++) {
      if (mainUrl == this.usedUrl[i]) {
        return true;
      }
    }
    return false;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isfree(request.url)) {
      const authtoken = this.authService.getToken();
      request = request.clone({
        setHeaders: {
          Authorization: `jwt ${authtoken}`,
        },
      });
    }

    return next.handle(request);
  }
}
