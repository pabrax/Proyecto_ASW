import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { RedDocente, RedDocenteService } from '../../../../services/red-docente.service';
import { Docente, DocenteService } from '../../../../services/docente.service';
import { Red, RedService } from '../../../../services/red.service';

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
  providers: [RedDocenteService, DocenteService, RedService]
})
export class RedDocenteEditPageComponent {
  redDocenteForm: FormGroup;
  redDocenteId: number = 0;  // Para almacenar el ID del red docente, inicializado a 0

  redId: number = 0;
  docenteId: number = 0;

  constructor(
    private redDocenteService: RedDocenteService,
    private docenteService: DocenteService,
    private redService: RedService,
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

        this.redId = redDocente.red;
        this.docenteId = redDocente.docente;

        redDocente.fecha_inicio = Formater.formatDate(redDocente.fecha_inicio);
        redDocente.fecha_fin = Formater.formatDate(redDocente.fecha_fin);
        // Rellenar el formulario con los datos del red docente existente
        this.redDocenteForm.patchValue({

          fecha_inicio: redDocente.fecha_inicio,
          fecha_fin: redDocente.fecha_fin,
          act_destacadas: redDocente.act_destacadas
        });

        // Cargar los datos del docente usando el ID actualizado
        this.docenteService.getDocenteById(this.docenteId).subscribe(
          (docente: Docente) => {
            // Rellenar el formulario con los datos del docente existente
            this.redDocenteForm.patchValue({
              docente: docente.nombres + ' ' + docente.apellidos
            });
          },
          (error) => {
            console.error('Error al obtener el docente', error);
          }
        );

        // Cargar los datos de la red usando el ID actualizado
        this.redService.getRedById(this.redId).subscribe(
          (red: Red) => {
            // Rellenar el formulario con los datos de la red existente
            this.redDocenteForm.patchValue({
              red: red.nombre
            });
          },
          (error) => {
            console.error('Error al obtener la red', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener el red docente', error);
      }
    );
  }

  // updateRedDocente
  onSubmit(): void {

    this.redDocenteForm.value.red = this.redId;
    this.redDocenteForm.value.docente = this.docenteId;

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
