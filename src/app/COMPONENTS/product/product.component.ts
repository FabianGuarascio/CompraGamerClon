import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { ShoppingCartServiceService } from 'src/app/SERVICES/shopping-cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product:any=[]
  constructor(public http:ProductsService, public cart:ShoppingCartServiceService,) { }

  ngOnInit(): void {
    this.http.getNotebooks().subscribe(data=>{
      this.product = data;})
      
    this.http.emitidor.subscribe(e=>{this.CambiarLista(e)})
  }

  // CambiarLista(){
  //   this.http.getProduct2("Raedon").subscribe(data=>{
  //     this.product = data
  //   })
  // }
  
CambiarLista(path:String){
    this.http.getProduct2(path).subscribe(data=>{
      this.product = data
    })
  }



}
