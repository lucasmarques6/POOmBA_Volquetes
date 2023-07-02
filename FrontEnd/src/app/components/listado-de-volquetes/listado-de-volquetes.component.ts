import { Component, OnInit } from '@angular/core';
import { Volquete } from 'src/app/models/volquete';
import { VolqueteService } from 'src/app/services/volquete.service';

@Component({
  selector: 'app-listado-de-volquetes',
  templateUrl: './listado-de-volquetes.component.html',
  styleUrls: ['./listado-de-volquetes.component.css']
})
export class ListadoDeVolquetesComponent implements OnInit {

  listVolquetes: Volquete[] = [];

  constructor(private _volqueteService:VolqueteService) {}

  ngOnInit(): void {
    this.obtenerVolquetes();
  }

  obtenerVolquetes() {
    this._volqueteService.getVolquetes().subscribe({
      next: data =>{
        console.log(data);
        this.listVolquetes = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  eliminarServicioVolquete(id:any){
    this._volqueteService.deleteVolquete(id).subscribe({
      next: data => {
        this.obtenerVolquetes()
        console.log(data);
        //this.listVolquetes = data;
      }, error: err => {
        console.log(err);
      }
    })
  }

}
