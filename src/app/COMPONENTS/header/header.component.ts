import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from 'src/app/SERVICES/shopping-cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  element:any
  constructor(public cart:ShoppingCartServiceService) { }

  ngOnInit(): void {
    this.element=document.querySelector('.header_subBar')
  }

  showElement(){
    this.element.classList.toggle('show')
  }
}
