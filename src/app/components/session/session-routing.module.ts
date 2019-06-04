import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
    {
      path: 'signin',
      component: LoginComponent,
      data: {title: 'Signin'}
    },
    {
      path: 'signup',
      component: RegisterComponent,
      data: {title: 'Signup'}
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
