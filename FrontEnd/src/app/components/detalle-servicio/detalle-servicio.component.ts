import { Component, OnInit } from '@angular/core';
import { Volquete } from 'src/app/models/volquete';
import { VolqueteService } from 'src/app/services/volquete.service';


@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit{

  //TODO
  //traer objeto servicioVolquete y cargar vista detalle

  //servicio: Volquete;

  constructor(private _volqueteService:VolqueteService) {}

  ngOnInit(): void {

  }



}
