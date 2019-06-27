import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {AppLoaderService} from '../../../shared/services/app-loader/app-loader.service';
import {AlertService} from 'ngx-alerts';
import {Validator} from '../../../shared/services/validator/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private loader: AppLoaderService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validator.password
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validator.password
      ])
    });
  }

  signup() {
    if (this.validateForm()) {
      this.loader.open();
      this.authService.registerUser(this.signupForm.getRawValue().email, this.signupForm.getRawValue().password)
        .then((res) => {
          this.loader.close();
          console.log(res);
        }).catch((err) => {
        this.loader.close();
        console.log(err);
      });
    }
  }

  validateForm(): any {
    if (this.signupForm.status === 'VALID') {
      return true;
    }
    if (
      this.signupForm.controls['email'].hasError('required') ||
      this.signupForm.controls['password'].hasError('required') ||
      this.signupForm.controls['confirmPassword'].hasError('required')) {
      this.alertService.danger('Check that all data is entered');
    } else if (this.signupForm.getRawValue().password !== this.signupForm.getRawValue().confirmPassword) {
      this.alertService.danger('The passwords do not match');
    } else {
      this.alertService.danger('The data entered are not valid');
    }
    return false;
  }

}
