import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {AppLoaderService} from '../../../shared/services/app-loader/app-loader.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

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
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signin() {
    this.loader.open();
    this.authService.loginEmail(this.signinForm.getRawValue().email, this.signinForm.getRawValue().password)
      .then((res) => {
        this.loader.close();
        this.router.navigate(['/']);
      }).catch((err) => {
        this.loader.close();
        this.flashMessage.show(err.message, {cssClass: 'alert-danger', timeout: 10000});
    });
  }
}
