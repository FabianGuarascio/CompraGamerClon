import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  shopping_cart_items:any[]=[]
  constructor() { }

  addProduct =(product:any)=>{
    let item = this.getShoppingCartItems()
    if(item){
      item.push(product)
      localStorage.setItem('shopping_cart',JSON.stringify(item)) 
    }else{
      this.shopping_cart_items.push(product)
      localStorage.setItem('shopping_cart',JSON.stringify(this.shopping_cart_items))
    }
  }

  getShoppingCartItems = ()=>{
    let item = localStorage.getItem('shopping_cart')
    return JSON.parse(item)
  }

  getShoppingCartLength=()=>{
    let items = this.getShoppingCartItems()
    return items?this.getShoppingCartItems().length:0
  }

  getTotal= ()=>{
    let items= this.getShoppingCartItems()
    return items?.reduce((acc:any,item:any)=>acc + item.price ,0)
  }
}
