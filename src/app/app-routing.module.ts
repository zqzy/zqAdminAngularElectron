import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: '../app/user-login/user-login.module#UserLoginModule'
  },
  {
    path: 'pages',
    loadChildren: '../app/pages/pages.module#PagesModule'
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
