import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AgregarServicioComponent } from './agregar-servicio/agregar-servicio.component';
import { ListadoDeVolquetesComponent } from './listado-de-volquetes/listado-de-volquetes.component';
import { FooterComponent } from './footer/footer.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NosotrosComponent,
    AgregarServicioComponent,
    ListadoDeVolquetesComponent,
    FooterComponent,
    DetalleServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
