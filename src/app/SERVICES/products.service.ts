import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  emitidor= new EventEmitter()
  
  listaDesdeServicio:any[];
  variable="DiscosRigidos"
  //esta Url es la url local para probar sin estar conectado en la nube
  // _url="http://192.168.0.19:8080/api/products/"

  //url alojada en heroku
  _url="https://clon-compra-gamer-back.herokuapp.com/api/products/"
  constructor(public http:HttpClient) { }

  
  getNotebooks():Observable<any>{
    return this.http.get(this._url + this.variable)
  }
  
  getProduct2(path?:String){
    return this.http.get(this._url + path)
  }
  
}




