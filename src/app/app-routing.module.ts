import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmatupcComponent } from './PAGES/armatupc/armatupc.component';
import { AyudaComponent } from './PAGES/ayuda/ayuda.component';
import { HomeComponent } from './PAGES/home/home.component';
import { ProductsComponent } from './PAGES/products/products.component';
import { ShoppingCartComponent } from './PAGES/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"productos",component:ProductsComponent},
  {path:"ayuda",component:AyudaComponent},
  {path:"arma_tu_pc",component:ArmatupcComponent},
  {path:"shopping_cart",component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
