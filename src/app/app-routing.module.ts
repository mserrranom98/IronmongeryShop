import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './shared/services/auth/auth.guard';
import {MainLayoutComponent} from './components/shared/main-layout/main-layout.component';
import {SessionLayoutComponent} from './components/shared/session-layout/session-layout.component';
import {NotfoundpageComponent} from './components/others/notfoundpage/notfoundpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },

  {
    path: '',
    component: SessionLayoutComponent,
    children: [
      {
        path: 'session',
        loadChildren: './components/session/session.module#SessionModule',
        data: {title: 'Session'}
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main',
        loadChildren: './components/main/main.module#MainModule',
        data: {title: 'Main', breadcrumb: 'MAIN'}
      }
    ]
  },
  {
    path: '**',
    component: NotfoundpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
