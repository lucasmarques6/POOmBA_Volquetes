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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _volqueteService: VolqueteService,
    private actRouter: ActivatedRoute
  ) {
    this.volqueteForm = this.fb.group({
      numero: [''],
      cliente: [''],
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
        }, error: err => {
          console.log(err);
        }
      })
    }
  }
}

