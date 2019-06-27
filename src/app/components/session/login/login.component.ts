import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {AppLoaderService} from '../../../shared/services/app-loader/app-loader.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AlertService} from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private loader: AppLoaderService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signin() {
    if (this.validateForm()) {
      this.loader.open();
      this.authService.loginEmail(this.signinForm.getRawValue().email, this.signinForm.getRawValue().password)
        .then((res) => {
          this.loader.close();
          this.router.navigate(['/']);
        }).catch((err) => {
        this.loader.close();
        this.alertService.danger(err.message);
      });
    }
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
      .then((res) => {
        this.router.navigate(['/']);
      }).catch( err => this.alertService.danger(err.message));
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
      .then((res) => {
        this.router.navigate(['/']);
      }).catch( err => this.alertService.danger(err.message));
  }

  onClickTwitterLogin() {
    this.authService.loginTwitter()
      .then((res) => {
        this.router.navigate(['/']);
      }).catch (err => this.alertService.danger(err.message));
  }

  validateForm(): any {
    if (this.signinForm.status === 'VALID') {
      return true;
    }
    if (
      this.signinForm.controls['email'].hasError('required') ||
      this.signinForm.controls['password'].hasError('required')) {
      this.alertService.danger('Check that all data is entered');
    } else {
      this.alertService.danger('The data entered are not valid');
    }
    return false;
  }
}
