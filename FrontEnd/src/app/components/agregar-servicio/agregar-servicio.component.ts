import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Volquete } from 'src/app/models/volquete'
import { VolqueteService } from 'src/app/services/volquete.service'

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.css']
})
export class AgregarServicioComponent {

  volqueteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _volqueteService: VolqueteService
  ) {
    this.volqueteForm = this.fb.group({
      numero: ['', Validators.required],
      cliente: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      tamanio: ['', Validators.required],
      chofer: ['', Validators.required],
      ubicacion: ['', Validators.required]
    })
  }

  agregarServicio() {
    const VOLQUETE: Volquete = {
      numero: this.volqueteForm?.value.numero,
      cliente: this.volqueteForm?.value.cliente,
      precio: this.volqueteForm?.value.precio,
      cantidad: this.volqueteForm?.value.cantidad,
      tamanio: this.volqueteForm?.value.tamanio,
      chofer: this.volqueteForm?.value.chofer,
      ubicacion: this.volqueteForm?.value.ubicacion
    }
    console.log(VOLQUETE);

    this._volqueteService.postVolquete(VOLQUETE).subscribe({
      next: data => {
        console.log("Servicio de volquete agregado correctamente");
        this.router.navigate(['/']) //con esto vuelve a la ruta raiz
      }, error: err => {
        console.log(err);
        this.volqueteForm.reset();
      }
    })
  }
}
