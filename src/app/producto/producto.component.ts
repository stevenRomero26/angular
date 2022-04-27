import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  constructor(
  
  ) { }

  ngOnInit(): void {
  
  }

}
