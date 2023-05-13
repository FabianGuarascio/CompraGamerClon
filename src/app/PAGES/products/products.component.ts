import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  element:any
  constructor() { }

  ngOnInit(): void {
    this.element = document.getElementById('product_list')
  }

  showElement(){
    this.element.classList.toggle('show')
  }
}
