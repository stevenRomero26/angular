import { JesusComponent } from './jesus/jesus.component';
import { Component } from '@angular/core';
import personajeArchivo from 'src/assets/json/archivos.json';

@Component({
  selector: 'app-console', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Agencia';
  personaje: any = personajeArchivo;
  
}
