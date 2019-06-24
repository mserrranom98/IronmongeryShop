import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  photoURL: string;
  email: string;

  opened = true;
  over = 'side';

  watcher: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    public translate: TranslateService,
    media: MediaObserver
  ) {
    this.translate.use('en');
    this.watcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });

    this.getUser();
  }

  getUser() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        console.log(auth);
        this.email = auth.email;
        this.photoURL = auth.photoURL;
      }
    });
  }

  logout() {
    console.log('salir');
    this.authService.logOut();
    this.router.navigate(['session/signin']);
  }

  setLang(language) {
    this.translate.use(language);
  }

}
