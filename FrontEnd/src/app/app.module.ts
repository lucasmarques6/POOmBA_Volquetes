import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AgregarServicioComponent } from './components/agregar-servicio/agregar-servicio.component';
import { ListadoDeVolquetesComponent } from './components/listado-de-volquetes/listado-de-volquetes.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetalleServicioComponent } from './components/detalle-servicio/detalle-servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarServicioComponent } from './components/editar-servicio/editar-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NosotrosComponent,
    AgregarServicioComponent,
    ListadoDeVolquetesComponent,
    FooterComponent,
    DetalleServicioComponent,
    EditarServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
