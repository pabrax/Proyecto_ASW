import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { DocenteDepartamento, DocenteDepartamentoService } from '../../../../services/docente-departamento.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-docente-departamento-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './docente-departamento-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [DocenteDepartamentoService]
})
export class DocenteDepartamentoCreatePageComponent {
  docenteDepartamentoForm: FormGroup;
  docenteDepartamento: DocenteDepartamento = {
    docente_id: 0,
    departamento_id: 0,
    dedicacion: '',
    modalidad: '',
    fecha_ingreso: new Date(),
    fecha_salida: new Date()
  };

  constructor(
    private docenteDepartamentoService: DocenteDepartamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.docenteDepartamentoForm = this.formBuilder.group({
      docente_id: ['', Validators.required],
      departamento_id: ['', Validators.required],
      dedicacion: ['', Validators.required],
      modalidad: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_salida: ['', Validators.required]
    });
  }

  createDocenteDepartamento(): void {
    this.docenteDepartamentoService.createDocenteDepartamento(this.docenteDepartamento).subscribe(
      (data) => {
        console.log('Docente Departamento creado', data);
      },
      (error) => {
        console.error('Error al crear el Docente Departamento', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.docenteDepartamentoForm.valid) {
      this.docenteDepartamentoService.createDocenteDepartamento(this.docenteDepartamento).subscribe(
        (data) => {
          console.log('Docente Departamento creado', data);
        },
        (error) => {
          console.error('Error al crear el Docente Departamento', error);
        }
      );
    }
  }
}
