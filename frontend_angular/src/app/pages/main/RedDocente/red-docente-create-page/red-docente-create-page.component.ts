import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { RedDocente, RedDocenteService } from '../../../../services/red-docente.service';
// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';
@Component({
  selector: 'app-red-docente-create-page',
  standalone: true,
  imports: [ AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './red-docente-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [RedDocenteService]
})
export class RedDocenteCreatePageComponent {
  redDocenteForm: FormGroup;
  redDocente: RedDocente = {
    docente_id: 0,
    departamento_id: 0,
    dedicacion: '',
    modalidad: '',
    fecha_ingreso: new Date(),
    fecha_salida: new Date()
  };

  constructor(
    private redDocenteService: RedDocenteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.redDocenteForm = this.formBuilder.group({
      docente_id: ['', Validators.required],
      departamento_id: ['', Validators.required],
      dedicacion: ['', Validators.required],
      modalidad: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_salida: ['', Validators.required]
    });
  }

  createRedDocente(): void {
    this.redDocenteService.createRedDocente(this.redDocente).subscribe(
      (data) => {
        console.log('Red Docente creado', data);
      },
      (error) => {
        console.error('Error al crear el Red Docente', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.redDocenteForm.valid) {
      this.redDocenteService.createRedDocente(this.redDocente).subscribe(
        (data) => {
          console.log('Red Docente creado', data);
        },
        (error) => {
          console.error('Error al crear el Red Docente', error);
        }
      );
    }
  }
}
