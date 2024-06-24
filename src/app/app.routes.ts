import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { authGuard } from './Gaurd/auth.guard';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { LoginSkeletonComponent } from './Component/login-skeleton/login-skeleton.component';
import { SellComponent } from './Component/sell/sell.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { SupportComponent } from './Component/support/support.component';
import { CustomerDetailsComponent } from './Component/customer-details/customer-details.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'support',
        component: SupportComponent,
        canActivate: [authGuard],
      },
      {
        path: 'sale',
        component: SellComponent,
        canActivate: [authGuard],
      },
      {
        path: 'customer',
        component: CustomerComponent,
        canActivate: [authGuard],
      },
      {
        path: 'showCustomer/:id',
        component: CustomerDetailsComponent,
        canActivate: [authGuard],
      },
    ],
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    component:LoginSkeletonComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'forget', component: ForgetPasswordComponent },
    ],
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Default route redirects to login
  { path: '**', redirectTo: '/home/dashboard', pathMatch: 'full' },
];
