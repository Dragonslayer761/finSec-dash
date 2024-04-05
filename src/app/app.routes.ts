import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { authGuard } from './Gaurd/auth.guard';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { PolicyComponent } from './Component/policy/policy.component';
import { ReportsComponent } from './Component/reports/reports.component';

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
        path: 'policy',
        component: PolicyComponent,
        canActivate: [authGuard]
      },
      {
        path: 'reports',
        component: ReportsComponent,
        canActivate: [authGuard],
      },
    ],
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route redirects to login
  { path: '**', redirectTo: '/home/dashboard', pathMatch: 'full' },
];
