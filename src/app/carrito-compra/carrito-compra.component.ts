import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/product.model';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: Producto[] = []
  productosCarrito: Producto[] = []
  id: number = 0;
  cantidad: number = 0;
  total: number = 0;
  

  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.carritoService.getProductos().forEach(producto => {
      this.productos.push(producto)
    })
  }

  addCart(event: any){
    this.id = event.target.id;
    this.productos.forEach(producto => {
      if(producto.id == this.id){
        if(this.productosCarrito.find(productoCarrito => productoCarrito.id == this.id)){
          alert('El producto ya esta en el carrito')
        }else{
          this.productosCarrito.push(producto)
          this.total += producto.precio
        }
     
      }
    })
    console.log(this.productosCarrito)

  }

  aumentarCantida(event: any){
    this.id = event.target.id;
    this.productosCarrito.forEach(p => {
      if(p.id = this.id){
        this.total += p.precio
      }
    })
  }

}
