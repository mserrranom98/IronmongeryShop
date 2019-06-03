import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public signupForm: FormGroup;
  public password = '';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [
        Validators.required
      ])
    });
  }

  signup() {
    if (!this.signupForm.valid) {
      return;
    }
    this.authService.registerUser(this.signupForm.getRawValue().email, this.signupForm.getRawValue().password)
      .then((res) => {
        console.log('bien');
        console.log(res);
      }).catch((err) => {
        console.log('error');
        console.log(err);
    });
  }

}
