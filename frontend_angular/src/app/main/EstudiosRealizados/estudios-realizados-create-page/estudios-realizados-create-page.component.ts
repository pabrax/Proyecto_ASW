import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { EstudiosRealizados, EstudiosRealizadosService } from '../estudios-realizados.service';
// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-estudios-realizados-create-page',
  standalone: true,
  imports: [ AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './estudios-realizados-create-page.component.html',
  styleUrl: './estudios-realizados-create-page.component.css',
  providers: [EstudiosRealizadosService]
})
export class EstudiosRealizadosCreatePageComponent {
  estudioRealizadoForm: FormGroup;
  estudioRealizado: EstudiosRealizados = {
    id: 0,
    titulo: '',
    universidad: '',
    fecha: '',
    tipo: '',
    ciudad: '',
    docente: 0,
    ins_acreditada: false,
    metodologia: '',
    perfil_egresado: '',
    pais: ''
  };

  constructor(
    private estudioRealizadoService: EstudiosRealizadosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.estudioRealizadoForm = this.formBuilder.group({
      id: ['', Validators.required],
      titulo: ['', Validators.required],
      universidad: ['', Validators.required],
      fecha: ['', Validators.required],
      tipo: ['', Validators.required],
      ciudad: ['', Validators.required],
      docente: ['', Validators.required],
      ins_acreditada: ['', Validators.required],
      metodologia: ['', Validators.required],
      perfil_egresado: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  createEstudioRealizado(): void {
    this.estudioRealizadoService.createEstudioRealizado(this.estudioRealizado).subscribe(
      (data) => {
        console.log('Estudio realizado creado', data);
      },
      (error) => {
        console.error('Error al crear el estudio realizado', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    console.log(this.estudioRealizadoForm.value);
    console.log(this.estudioRealizadoForm.valid);
    if (this.estudioRealizadoForm.valid) {
      this.estudioRealizadoService.createEstudioRealizado(this.estudioRealizado).subscribe(
        (data) => {
          console.log('Estudio realizado creado', data);
        },
        (error) => {
          console.error('Error al crear el estudio realizado', error);
        }
      );
    }
  }

}
