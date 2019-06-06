import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {HomeComponent} from './home/home.component';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class MainModule { }
