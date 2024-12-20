import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { DocenteDepartamento, DocenteDepartamentoService } from '../../../../services/docente-departamento.service';
import { DocenteService, Docente } from '../../../../services/docente.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-docente-departamento-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './docente-departamento-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [DocenteDepartamentoService, DocenteService]
})
export class DocenteDepartamentoCreatePageComponent {
  docenteDepartamentoForm: FormGroup;
  docenteDepartamento: DocenteDepartamento = {
    docente: 0,
    departamento: 0,
    dedicacion: '',
    modalidad: '',
    fecha_ingreso: '',
    fecha_salida: ''
  };

  docentes: Docente[] = [];

  constructor(
    private docenteDepartamentoService: DocenteDepartamentoService,
    private docenteService: DocenteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.docenteDepartamentoForm = this.formBuilder.group({
      docente: ['', Validators.required],
      departamento: ['', Validators.required],
      dedicacion: ['', Validators.required],
      modalidad: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_salida: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.docenteService.getDocentes().subscribe(
      (data) => {
        this.docentes = data;
      },
      (error) => {
        console.error('Error al cargar los docentes', error);
      }
    );
  }

  createDocenteDepartamento(): void {
    this.docenteDepartamentoService.createDocenteDepartamento(this.docenteDepartamento).subscribe(
      (data) => {
        console.log('Docente Departamento creado', data);
        this.router.navigate(['/app/docente-departamento']);
      },
      (error) => {
        console.error('Error al crear el Docente Departamento', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.docenteDepartamentoForm.valid) {
      this.docenteDepartamento.docente = this.docenteDepartamentoForm.value.docente;
      this.docenteDepartamento.departamento = this.docenteDepartamentoForm.value.departamento;
      this.docenteDepartamento.dedicacion = this.docenteDepartamentoForm.value.dedicacion;
      this.docenteDepartamento.modalidad = this.docenteDepartamentoForm.value.modalidad;
      this.docenteDepartamento.fecha_ingreso = this.docenteDepartamentoForm.value.fecha_ingreso;
      this.docenteDepartamento.fecha_salida = this.docenteDepartamentoForm.value.fecha_salida;
      this.createDocenteDepartamento();
    }
  }
}
