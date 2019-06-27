import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AlertModule} from 'ngx-alerts';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot({maxMessages: 1, timeout: 4000, position: 'right'}),
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class SessionModule { }
