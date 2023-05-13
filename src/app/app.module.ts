import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './PAGES/home/home.component';
import { ProductsComponent } from './PAGES/products/products.component';
import { ArmatupcComponent } from './PAGES/armatupc/armatupc.component';
import { AyudaComponent } from './PAGES/ayuda/ayuda.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { HomeBannerComponent } from './COMPONENTS/home-banner/home-banner.component';
import { ProductBannerComponent } from './COMPONENTS/product-banner/product-banner.component';
import { ProductComponent } from './COMPONENTS/product/product.component';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductListComponent } from './COMPONENTS/product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './PAGES/shopping-cart/shopping-cart.component';
import { ShoppingCartProductsComponent } from './COMPONENTS/shopping-cart-products/shopping-cart-products.component';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ArmatupcComponent,
    AyudaComponent,
    HeaderComponent,
    HomeBannerComponent,
    ProductBannerComponent,
    ProductComponent,
    FooterComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ShoppingCartProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    HttpClientModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
