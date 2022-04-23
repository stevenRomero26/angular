import { LoginComponent } from './login/login.component';
import { PlanesComponent } from './planes/planes.component';
import { JesusComponent } from './jesus/jesus.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PlanesOfertasComponent } from './planes-ofertas/planes-ofertas.component';
import { ManuComponent } from './manu/manu.component';
import { DetallePlanComponent } from './detalle-plan/detalle-plan.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component'; 


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'planes',component:PlanesComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'planesOfertas',component:PlanesOfertasComponent},
  {path:'menu',component:ManuComponent},
  {path:'DetallePlan',component:DetallePlanComponent},
  {path:'login',component:LoginComponent},
  {path:'carito',component:CarritoCompraComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
