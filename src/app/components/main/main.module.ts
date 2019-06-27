import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {HomeComponent} from './home/home.component';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '../../material.module';
import { ShopsComponent } from './shops/shops.component';
import {FlexModule} from '@angular/flex-layout';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {DetailComponent} from '../others/detail/detail.component';
import {AlertModule} from 'ngx-alerts';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateModule,
    MaterialModule,
    AlertModule.forRoot({maxMessages: 1, timeout: 4000, position: 'right'}),
    FlexModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    HomeComponent,
    ShopsComponent,
    DetailComponent
  ],
  entryComponents: [
    DetailComponent
  ]
})
export class MainModule { }
