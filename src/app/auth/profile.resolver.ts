import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolver implements Resolve<boolean> {
  id: any;
  post: any = [];

  constructor(
    private profileService: ProfileService,
    private authService:AuthService,
    ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | any {
    // if (route.paramMap.has('id')) {
    //   this.id = route.paramMap.get('id');
    //   // this.profileService.getProfile(this.id);
    //   // console.log(route.paramMap.get('id'));
    // }
    this.id = this.authService.getId();
    

    // const user = this.profileService.getProfile(this.id);
    // console.log(user);
    this.profileService.getProfile(this.id).subscribe(d=>{
      console.log(this.id)
      console.log(d)
    });

    return this.profileService.getProfile(this.id);

    // return this.profileService.receiveProfile();
  }
}
