import { Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AccountPageComponent } from './Components/account-page/account-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { WeeklyDealsComponent } from './Components/weekly-deals/weekly-deals.component';
import { BundlesPageComponent } from './Components/bundles-page/bundles-page.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomePageComponent, title: 'Home', },
  { path: 'home', component: HomePageComponent, title: 'Home', },
  { path: 'account', component: AccountPageComponent, title: 'Account login/Signup', },
  { path: 'cart', component: CartPageComponent, title: 'Cart', },
  { path: 'weeklyDeals', component: WeeklyDealsComponent, title: 'Weekly Deals', },
  { path: 'bundles', component: BundlesPageComponent, title: 'Bundles', },
  { path: 'allProducts', component: AllProductsComponent, title: 'Store | All Products', },
  { path: 'contactUs', component: ContactUsComponent, title: 'Contact Us', },
  { path: 'signUp', component: SignupComponent, title: 'Sign Up Please', },
  { path: 'login', component: LoginComponent, title: 'Login here Please', },
];
