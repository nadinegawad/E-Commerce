import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SliderSectionComponent } from './slider-section/slider-section.component';
import { SliderComponent } from './slider/slider.component';
import { TrimPipe } from './trim.pipe';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component'
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { BrandInfoComponent } from './brand-info/brand-info.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { CategoryInfoComponent } from './category-info/category-info.component';
import { ForgetPasswwordComponent } from './forget-passwword/forget-passwword.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './loading.interceptor';
import { FooterComponent } from './footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    NavbarComponent,
    LogoutComponent,
    RegisterComponent,
    NotFoundComponent,
    LoginComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductInfoComponent,
    SliderSectionComponent,
    SliderComponent,
    TrimPipe,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    LoaderComponent,
    BrandInfoComponent,
    CategorySectionComponent,
    CategoryInfoComponent,
    ForgetPasswwordComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:HttpInterceptorInterceptor,
      multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
