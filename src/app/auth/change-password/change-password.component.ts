import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { faUnlock , faEyeSlash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  pass = faEyeSlash;
  public isLoading = false;
  public hide = true;
  changePassForm = new FormGroup({
    // email: new FormControl('', [Validators.required]),
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password1: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    public authService: AuthService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let opass = this.changePassForm.value['oldPassword'];
    let pass1 = this.changePassForm.value['password1'];
    let pass2 = this.changePassForm.value['password2'];

    this.authService.changePass(opass, pass1, pass2);
    console.log(opass, pass1, pass2);
    this.changePassForm.reset();
    console.log(this.changePassForm);

  }

}
