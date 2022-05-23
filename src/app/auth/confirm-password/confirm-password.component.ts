import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { faUnlock , faEyeSlash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {

  pass = faEyeSlash;
  public isLoading = false;
  public hide = true;
  changePassForm = new FormGroup({
    // email: new FormControl('', [Validators.required]),
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
    let pass1 = this.changePassForm.value['password1'];
    let pass2 = this.changePassForm.value['password2'];

    this.authService.forgetPassConfirm( pass1, pass2);
    console.log( pass1, pass2);
    this.changePassForm.reset();
    console.log(this.changePassForm);

  }

}
