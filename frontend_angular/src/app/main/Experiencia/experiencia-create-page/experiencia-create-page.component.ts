import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { ExperienciaService, Experiencia } from '../experiencia.service';

// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-experiencia-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './experiencia-create-page.component.html',
  styleUrl: './experiencia-create-page.component.css',
  providers: [ExperienciaService]
})
export class ExperienciaCreatePageComponent {

  experienciaForm: FormGroup;
  experiencia: Experiencia = {
    id: 0,
    nombre_cargo: '',
    institucion: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    docente: 0
  };

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.experienciaForm = this.formBuilder.group({
      nombre_cargo: ['', Validators.required],
      institucion: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  createExperiencia(): void {
    this.experienciaService.createExperiencia(this.experiencia).subscribe(
      (data) => {
        console.log('Experiencia creada', data);
      },
      (error) => {
        console.error('Error al crear la experiencia', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.experienciaForm.valid) {
      this.experienciaService.createExperiencia(this.experiencia).subscribe(
        (data) => {
          console.log('Experiencia creada', data);
        },
        (error) => {
          console.error('Error al crear la experiencia', error);
        }
      );
    }
  }
}
