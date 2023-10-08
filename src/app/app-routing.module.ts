import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { authSignGuard } from './auth-sign.guard';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { BrandInfoComponent } from './brand-info/brand-info.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { CategoryInfoComponent } from './category-info/category-info.component';
import { ForgetPasswwordComponent } from './forget-passwword/forget-passwword.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', canActivate: [authSignGuard], component: RegisterComponent, title: 'register' },
  { path: 'login', canActivate: [authSignGuard], component: LoginComponent, title: 'login' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent, title: 'home' },
  { path: 'about', canActivate: [authGuard], component: AboutComponent, title: 'about' },
  { path: 'products', canActivate: [authGuard], component: FeaturedProductsComponent, title: 'products' },
  { path: 'categories', canActivate: [authGuard], component: CategorySectionComponent, title: 'categories' },
  { path: 'category-info/:id', canActivate: [authGuard], component: CategoryInfoComponent, title: 'category-info' },
  { path: 'brands', canActivate: [authGuard], component: BrandsComponent, title: 'brands' },
  { path: 'brandInfo/:id', canActivate: [authGuard], component: BrandInfoComponent, title: 'brandInfo' },
  { path: 'productInfo/:id',canActivate: [authGuard], component: ProductInfoComponent, title: 'productInfo' },
  { path: 'cart',canActivate: [authGuard], loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'checkout', canActivate: [authGuard], component: CheckoutComponent, title: 'checkout' },
  { path: 'forgetPassword',  canActivate: [authGuard], component: ForgetPasswwordComponent, title: 'forgetPassword' },
  { path: 'forget',  component: ForgetPasswwordComponent, title: 'forgetPassword' },

  { path: 'allorders', canActivate: [authGuard], component: AllordersComponent, title: 'allorders' },
  { path: 'wishlist', loadChildren: () => import('./wishlist/wishlist.module').then(m => m.WishlistModule) },
  { path: '**', component: NotFoundComponent, title: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
