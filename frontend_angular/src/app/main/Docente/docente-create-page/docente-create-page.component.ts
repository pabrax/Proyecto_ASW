import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// material
import {  MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButton } from '@angular/material/button';

// service

import { Docente, DocenteService } from '../docente.service';
// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-docente-create-page',
  standalone: true,
  imports: [
    AplicationNavbarComponent,
    AplicationHeaderComponent, 
    CommonModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatLabel,
    MatInput,
    MatSelect,
    MatOption,
    MatDatepicker,
    MatNativeDateModule,
    MatButton,
    MatError
  ],
  templateUrl: './docente-create-page.component.html',
  styleUrl: './docente-create-page.component.css',
  providers: [DocenteService]
})
export class DocenteCreatePageComponent {
  docenteForm: FormGroup;
  docente: Docente = {
    cedula: 0,
    nombres: '',
    apellidos: '',
    genero: '',
    cargo: '',
    fecha_nacimiento: new Date(),
    correo: '',
    telefono: '',
    url_cvlac: '',
    fecha_actualizacion: new Date(),
    escalafon: '',
    perfil: '',
    cat_minciencia: '',
    conv_minciencia: '',
    nacionalidad: '',
    linea_investigacion_principal: 0
  };

  constructor(
    private docenteService: DocenteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.docenteForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      genero: ['', Validators.required],
      cargo: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      url_cvlac: ['', Validators.required],
      fecha_actualizacion: ['', Validators.required],
      escalafon: ['', Validators.required],
      perfil: ['', Validators.required],
      cat_minciencia: ['', Validators.required],
      conv_minciencia: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      linea_investigacion_principal: ['', Validators.required]
    });
  }

  createDocente(): void {
    this.docenteService.createDocente(this.docente).subscribe(
      (data) => {
        console.log('Docente creado', data);
      },
      (error) => {
        console.error('Error al crear el docente', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.docenteForm.valid) {
      this.docenteService.createDocente(this.docente).subscribe(
        (data) => {
          console.log('Docente creado', data);
        },
        (error) => {
          console.error('Error al crear el docente', error);
        }
      );
    }
  }
}
