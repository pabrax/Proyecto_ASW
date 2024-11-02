import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { EstudiosRealizados, EstudiosRealizadosService } from '../../../../services/estudios-realizados.service';
// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-estudios-realizados-create-page',
  standalone: true,
  imports: [ AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './estudios-realizados-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
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
        this.router.navigate(['/app/estudios-realizados']);
      },
      (error) => {
        console.error('Error al crear el estudio realizado', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.estudioRealizadoForm.valid) {
      this.estudioRealizado.id = this.estudioRealizadoForm.value.id;
      this.estudioRealizado.titulo = this.estudioRealizadoForm.value.titulo;
      this.estudioRealizado.universidad = this.estudioRealizadoForm.value.universidad;
      this.estudioRealizado.fecha = this.estudioRealizadoForm.value.fecha;
      this.estudioRealizado.tipo = this.estudioRealizadoForm.value.tipo;
      this.estudioRealizado.ciudad = this.estudioRealizadoForm.value.ciudad;
      this.estudioRealizado.docente = this.estudioRealizadoForm.value.docente;
      this.estudioRealizado.ins_acreditada = this.estudioRealizadoForm.value.ins_acreditada;
      this.estudioRealizado.metodologia = this.estudioRealizadoForm.value.metodologia;
      this.estudioRealizado.perfil_egresado = this.estudioRealizadoForm.value.perfil_egresado;
      this.estudioRealizado.pais = this.estudioRealizadoForm.value.pais;
      this.createEstudioRealizado();
    }
  }

}
