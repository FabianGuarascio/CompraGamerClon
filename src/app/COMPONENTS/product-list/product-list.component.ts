import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/SERVICES/products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public proudctService:ProductsService) { }

  ngOnInit(): void {
  }

  cambiar(path:any){
    this.proudctService.emitidor.emit(path)
    
  }

}
