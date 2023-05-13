import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from 'src/app/SERVICES/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItems:any[]=[1,2]
  constructor(public cart:ShoppingCartServiceService) { }

  ngOnInit(): void {
    this.shoppingCartItems=this.cart.getShoppingCartItems()
    console.log(this.shoppingCartItems)
  }
}
