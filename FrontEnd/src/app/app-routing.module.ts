import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarServicioComponent } from './components/agregar-servicio/agregar-servicio.component';
import { DetalleServicioComponent } from './components/detalle-servicio/detalle-servicio.component';
//import { FooterComponent } from './footer/footer.component';
import { ListadoDeVolquetesComponent } from './components/listado-de-volquetes/listado-de-volquetes.component';
//import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  { path: "", component: ListadoDeVolquetesComponent},
  { path:"agregar", component: AgregarServicioComponent },
  { path: "detalle", component: DetalleServicioComponent},
  { path:"nosotros", component: NosotrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
