import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { RedDocente, RedDocenteService } from '../../../../services/red-docente.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';
import { Formater } from '../../../../classes/formater';


@Component({
  selector: 'app-red-docente-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './red-docente-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [RedDocenteService]
})
export class RedDocenteEditPageComponent {
  redDocenteForm: FormGroup;
  redDocenteId: number = 0;  // Para almacenar el ID del red docente, inicializado a 0

  constructor(
    private redDocenteService: RedDocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.redDocenteForm = this.formBuilder.group({
      red: ['', Validators.required],
      docente: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      act_destacadas: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID del red docente desde los parámetros de la ruta
    this.redDocenteId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos del red docente usando el ID
    this.redDocenteService.getRedDocenteById(this.redDocenteId).subscribe(
      (redDocente: RedDocente) => {

        redDocente.fecha_inicio = Formater.formatDate(redDocente.fecha_inicio);
        redDocente.fecha_fin = Formater.formatDate(redDocente.fecha_fin);
        // Rellenar el formulario con los datos del red docente existente
        this.redDocenteForm.patchValue({

          red: redDocente.red,
          docente: redDocente.docente,
          fecha_inicio: redDocente.fecha_inicio,
          fecha_fin: redDocente.fecha_fin,
          act_destacadas: redDocente.act_destacadas
        });
      },
      (error) => {
        console.error('Error al obtener el red docente', error);
      }
    );
  }

  // updateRedDocente
  onSubmit(): void {
    if (this.redDocenteForm.valid) {
      const redDocenteActualizado: RedDocente = {
        ...this.redDocenteForm.value
      };

      this.redDocenteService.updateRedDocente(this.redDocenteId, redDocenteActualizado).subscribe(
        (redDocente: RedDocente) => {
          console.log('Red docente actualizado', redDocente);
          this.router.navigate(['/app/red-docente']);
        },
        (error) => {
          console.error('Error al actualizar el red docente', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/red-docente']);
  }
}
