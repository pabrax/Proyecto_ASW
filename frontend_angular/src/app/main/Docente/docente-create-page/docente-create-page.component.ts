import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
    ReactiveFormsModule
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
      // Asignar los valores del formulario al objeto `docente`
      const docente: Docente = {
        cedula: this.docenteForm.value.cedula,
        nombres: this.docenteForm.value.nombres,
        apellidos: this.docenteForm.value.apellidos,
        genero: this.docenteForm.value.genero,
        cargo: this.docenteForm.value.cargo,
        fecha_nacimiento: new Date(this.docenteForm.value.fecha_nacimiento),
        correo: this.docenteForm.value.correo,
        telefono: this.docenteForm.value.telefono,
        url_cvlac: this.docenteForm.value.url_cvlac,
        fecha_actualizacion: new Date(this.docenteForm.value.fecha_actualizacion),
        escalafon: this.docenteForm.value.escalafon,
        perfil: this.docenteForm.value.perfil,
        cat_minciencia: this.docenteForm.value.cat_minciencia,
        conv_minciencia: this.docenteForm.value.conv_minciencia,
        nacionalidad: this.docenteForm.value.nacionalidad,
        linea_investigacion_principal: this.docenteForm.value.linea_investigacion_principal
      };

      // Llamar al servicio para crear el docente
      this.docenteService.createDocente(docente).subscribe(
        (data) => {
          
          console.log('Docente creado', data);
          this.router.navigate(['/app/docente']);
        },
        (error) => {
          console.log("fallo en submit");
          console.error('Error al crear el docente', error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }
}
