import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { Aliado, AliadoService } from '../aliado.service';

// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-aliado-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './aliado-create-page.component.html',
  styleUrl: './aliado-create-page.component.css',
  providers: [AliadoService]
})
export class AliadoCreatePageComponent {

  aliadoForm: FormGroup;
  aliado: Aliado = {
    nit: 0,
    razon_social: '',
    nombre_contacto: '',
    correo: '',
    telefono: '',
    ciudad: ''
  };

  constructor(
    private aliadoService: AliadoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.aliadoForm = this.formBuilder.group({
      nit: ['', Validators.required],
      razon_social: ['', Validators.required],
      nombre_contacto: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }

  createAliado(): void {
    this.aliadoService.createAliado(this.aliado).subscribe({
      next: (data) => {
        console.log('Aliado creado', data);
        this.router.navigate(['/app/aliado']);
      },
      error: (error) => {
        console.error('Error al crear el aliado', error);
      }
    });
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {

    if (this.aliadoForm.valid) {
      this.aliado.nit = this.aliadoForm.value.nit;
      this.aliado.razon_social = this.aliadoForm.value.razon_social;
      this.aliado.nombre_contacto = this.aliadoForm.value.nombre_contacto;
      this.aliado.correo = this.aliadoForm.value.correo;
      this.aliado.telefono = this.aliadoForm.value.telefono;
      this.aliado.ciudad = this.aliadoForm.value.ciudad;
      this.createAliado();
    }
  }
}
