import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class MainModule { }
