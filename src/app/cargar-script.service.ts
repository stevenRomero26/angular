import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptService {

  constructor() { }

  cargarScripts(Archivos:String[]){

    for(let archivo of Archivos){
    
      let script = document.createElement(`script`);
       script.src = "/src/assets/js/" + archivo +"js";
       let body = document.getElementsByTagName("body")[0]; 
       body.appendChild(script);
      }
  }
}
