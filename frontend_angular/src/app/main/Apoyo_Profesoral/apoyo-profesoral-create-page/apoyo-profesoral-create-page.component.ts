import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { ApoyoProfesoralService, ApoyoProfesoral } from '../apoyo-profesoral.service';

// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';


@Component({
  selector: 'app-apoyo-profesoral-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './apoyo-profesoral-create-page.component.html',
  styleUrl: './apoyo-profesoral-create-page.component.css',
  providers: [ApoyoProfesoralService]
})
export class ApoyoProfesoralCreatePageComponent {

  apoyoProfesoralForm: FormGroup;

  apoyoProfesoral: ApoyoProfesoral = {
    id: 0,
    estudios: 0,
    con_apoyo: false,
    institucion: '',
    tipo: ''
  };

  constructor(
    private apoyoProfesoralService: ApoyoProfesoralService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.apoyoProfesoralForm = this.formBuilder.group({
      estudios: ['', Validators.required],
      con_apoyo: ['', Validators.required],
      institucion: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  createApoyoProfesoral(): void {
    this.apoyoProfesoralService.createApoyoProfesoral(this.apoyoProfesoral).subscribe(
      (data) => {
        console.log('Apoyo Profesoral creado', data);
      },
      (error) => {
        console.error('Error al crear el apoyo profesoral', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.apoyoProfesoralForm.valid) {
      this.apoyoProfesoralService.createApoyoProfesoral(this.apoyoProfesoral).subscribe(
        (data) => {
          console.log('Apoyo Profesoral creado', data);
        },
        (error) => {
          console.error('Error al crear el apoyo profesoral', error);
        }
      );
    }
  }
}
