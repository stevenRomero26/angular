import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JesusComponent } from './jesus/jesus.component';
import { ManuComponent } from './manu/manu.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PlanesComponent } from './planes/planes.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PlanesOfertasComponent } from './planes-ofertas/planes-ofertas.component';
import { LoginComponent } from './login/login.component';
import { CargarScriptService } from './cargar-script.service';
import { DetallePlanComponent } from './detalle-plan/detalle-plan.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { ProductoComponent } from './producto/producto.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    JesusComponent,
    ManuComponent,
    CuerpoComponent,
    FooterComponent,
    CuerpoComponent,
    PlanesComponent,
    HomeComponent,
    ServiciosComponent,
    PlanesOfertasComponent,
    LoginComponent,
    DetallePlanComponent,
    CarritoCompraComponent,
    ProductoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    CargarScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
