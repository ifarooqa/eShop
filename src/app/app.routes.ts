import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    title: 'Home',
  },
];
