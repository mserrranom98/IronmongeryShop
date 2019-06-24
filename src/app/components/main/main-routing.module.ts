import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../../shared/services/auth/auth.guard';
import {ShopsComponent} from './shops/shops.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {title: 'Home', breadcrumb: 'HOME'}
  },
  {
    path: 'shops',
    component: ShopsComponent,
    canActivate: [AuthGuard],
    data: {title: 'Shops', breadcrumb: 'SHOPS'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
