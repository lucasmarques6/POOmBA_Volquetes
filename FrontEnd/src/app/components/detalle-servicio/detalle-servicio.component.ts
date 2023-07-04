import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Volquete } from 'src/app/models/volquete';
import { VolqueteService } from 'src/app/services/volquete.service';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {
  
  volqueteForm: FormGroup;
  id: string | null;
  direccion: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _volqueteService: VolqueteService,
    private actRouter: ActivatedRoute
  ) {
    this.direccion = ""
    this.volqueteForm = this.fb.group({
      numero: ['', Validators.required],
      cliente: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      tamanio: ['', Validators.required],
      chofer: ['', Validators.required],
      ubicacion: ['', Validators.required]
    })
    this.id = this.actRouter.snapshot.paramMap.get('id');
    console.log("el id es: " + this.id)
  }

  ngOnInit(): void {
    this.verDetalle();
  }

  verDetalle() {
    console.log("ingreso a editar-servicio")
    if (this.id !== null) {
      this._volqueteService.getVolquete(this.id).subscribe({
        next: data => {
          console.log(data)
          this.volqueteForm.setValue({
            numero: data.numero,
            cliente: data.cliente,
            precio: data.precio,
            cantidad: data.cantidad,
            tamanio: data.tamanio,
            chofer: data.chofer,
            ubicacion: data.ubicacion
          })
          this.direccion = this.crearUrlMap(data.ubicacion);
          //console.log(this.direccion)
        
        }, error: err => {
          console.log(err);
        }
      })
    }
  }

  crearUrlMap(dir: string) {
    let direccion = dir.replace(/\s+/g, '\+');
    console.log(direccion);
    return `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${direccion}!6i13`;
  }
}

