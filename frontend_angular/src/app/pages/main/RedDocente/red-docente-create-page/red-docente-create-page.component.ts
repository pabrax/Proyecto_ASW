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
    red: 0,
    docente: 0,
    fecha_inicio: '',
    fecha_fin: '',
    act_destacadas: ''
  };

  constructor(
    private redDocenteService: RedDocenteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.redDocenteForm = this.formBuilder.group({
      red: ['', Validators.required],
      docente: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      act_destacadas: ['', Validators.required]
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
      
      const redDocente: RedDocente = {
        red: this.redDocenteForm.value.red,
        docente: this.redDocenteForm.value.docente,
        fecha_inicio: this.redDocenteForm.value.fecha_inicio,
        fecha_fin: this.redDocenteForm.value.fecha_fin,
        act_destacadas: this.redDocenteForm.value.act_destacadas
      };

      this.redDocenteService.createRedDocente(redDocente).subscribe({
        next: (data) => {
          console.log('Red Docente creado', data);
          this.router.navigate(['/app/red-docente']);
        },
        error: (error) => {
          console.error('Error al crear el Red Docente', error);
        }
      });

    }
  }
}
