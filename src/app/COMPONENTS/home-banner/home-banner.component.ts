import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  bannerImages:String[]=[
    "https://compragamer.net/bannersPrincipal/Geil%20banner.jpg",
    "https://compragamer.net/bannersPrincipal/Banner%20monitor%20asus%20ROG%20Marzo.png",
    "https://compragamer.net/bannersPrincipal/Banner%20TForce%20Febrero%2022.jpg",
    "https://compragamer.net/bannersPrincipal/banner%20monitor%20cooler.jpg"
  ]
  constructor() {  
     
  }  

  ngOnInit(): void {
  }

}
