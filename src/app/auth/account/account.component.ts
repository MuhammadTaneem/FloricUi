import { ProfileService } from './../profile.service';
import { Component, OnInit , CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  user: any;
  userSubscribe: any;
  uid: any;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.userSubscribe = this.route.data.subscribe((data) => {
      this.user = data['data'][0];
      console.log(this.user);
    });
    // this.uid = this.authService.getUid();
  }

  ngOnDestroy(): void {
    this.userSubscribe.unsubscribe();
  }

  

}
