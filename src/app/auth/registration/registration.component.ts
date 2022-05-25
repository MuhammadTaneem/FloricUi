import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { faUnlock , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  pass = faEyeSlash;
  public isLoading = false;
  public hide = true;
  registerFrom = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),  
    date_of_birth: new FormControl('', [Validators.required]),
    gender: new FormControl('male', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),    
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
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
    let first_name = this.registerFrom.value['first_name'];
    let last_name = this.registerFrom.value['last_name'];
    let phone = this.registerFrom.value['phone'];
    let date_of_birth = this.registerFrom.value['date_of_birth'];
    let gender = this.registerFrom.value['gender'];
    let city = this.registerFrom.value['city'];
    let address = this.registerFrom.value['address'];
    let email = this.registerFrom.value['email'];
    let password = this.registerFrom.value['password'];
    this.authService.createUser (first_name,last_name,phone,date_of_birth ,gender, city, address ,email,password);
    console.log(this.registerFrom);
    this.registerFrom.reset();
    
    console.log(email);
  }

}
