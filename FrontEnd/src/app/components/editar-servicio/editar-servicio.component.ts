import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Volquete } from 'src/app/models/volquete';
import { VolqueteService } from 'src/app/services/volquete.service';

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent implements OnInit {
  
  volqueteForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _volqueteService: VolqueteService,
    private actRouter: ActivatedRoute
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
    this.id = this.actRouter.snapshot.paramMap.get('id');
    console.log("el id es: " + this.id)
  }

  ngOnInit(): void {
    this.editar();
  }

  editar() {
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

  editarServicio() {

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

    if(this.id !== null){
      this._volqueteService.putVolquete(this.id, VOLQUETE).subscribe({
        next: data => {
        this.router.navigate(['/'])
        }
      })
    }
  }
}
