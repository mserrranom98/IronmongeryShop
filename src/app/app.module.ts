import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormsModule } from 'ng2-validation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MainLayoutComponent} from './components/shared/main-layout/main-layout.component';
import {MainMenuComponent} from './components/shared/main-menu/main-menu.component';
import { SessionLayoutComponent } from './components/shared/session-layout/session-layout.component';
import {MaterialModule} from './material.module';
import {AppLoaderService} from './shared/services/app-loader/app-loader.service';
import {AppLoaderComponent} from './components/others/app-loader/app-loader.component';
import {NotfoundpageComponent} from './components/others/notfoundpage/notfoundpage.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AuthGuard} from './shared/services/auth/auth.guard';
import {FlexLayoutModule} from '@angular/flex-layout';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainMenuComponent,
    SessionLayoutComponent,
    AppLoaderComponent,
    NotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    MaterialModule,
    FlashMessagesModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(
      environment.configFirebase
    ),
    AngularFireDatabaseModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    AppLoaderService,
    AuthGuard,
    FlashMessagesService
  ],
  entryComponents: [
    AppLoaderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
