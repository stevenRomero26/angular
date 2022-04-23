import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from '../cargar-script.service';

@Component({
  selector: 'app-jesus',
  templateUrl: './jesus.component.html',
  styleUrls: ['./jesus.component.css']
})



 
export class JesusComponent implements OnInit {



  

  
  
  constructor(private _cargaScript:CargarScriptService) { 
       _cargaScript.cargarScripts(["codigo"]);
  } 

  ngOnInit(): void {
   
  }

}
