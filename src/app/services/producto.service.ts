import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 private productos: any =  [
    {
      "id": 1,
       "nombre": "zapatos",
       "valor": 1599,
       "img": "./img/pokemon-plata.jpg"
    },
    {
      "id": 1,
       "nombre": "zapatos",
       "valor": 1599,
       "img": "./img/pokemon-plata.jpg"
    },
    
    {
      "id": 1,
       "nombre": "zapatos",
       "valor": 1599,
       "img": "./img/pokemon-plata.jpg"
    },
    {
      "id": 1,
       "nombre": "zapatos",
       "valor": 1599,
       "img": "./img/pokemon-plata.jpg"
    },
    
    {
      "id": 1,
       "nombre": "zapatos",
       "valor": 1599,
       "img": "./img/pokemon-plata.jpg"
    }
  ]

  constructor() { }

  getProductos(){
    return this.productos;
  }
}
