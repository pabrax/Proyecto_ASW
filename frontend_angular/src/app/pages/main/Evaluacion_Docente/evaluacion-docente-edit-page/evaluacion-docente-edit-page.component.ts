import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// service
import {
  EvaluacionDocenteService,
  EvaluacionDocente,
} from '../../../../services/evaluacion-docente.service';
import { DocenteService, Docente } from '../../../../services/docente.service';

// shared
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-evaluacion-docente-edit-page',
  standalone: true,
  imports: [
    AplicationNavbarComponent,
    AplicationHeaderComponent,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './evaluacion-docente-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [EvaluacionDocenteService, DocenteService],
})
export class EvaluacionDocenteEditPageComponent {
  evaluacionDocenteForm: FormGroup;
  docenteId: number = 0; // Para almacenar el ID del Docente, inicializado a 0
  evaluacionDocenteId: number = 0;

  constructor(
    private evaluacionDocenteService: EvaluacionDocenteService,
    private docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.evaluacionDocenteForm = this.formBuilder.group({
      id: [''],
      calificacion: ['', Validators.required],
      semestre: ['', Validators.required],
      docente: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Obtener el ID del evaluacionDocente desde los parámetros de la ruta
    this.evaluacionDocenteId = Number(this.route.snapshot.paramMap.get('id'));
  
    // Cargar los datos del evaluacionDocente usando el ID
    this.evaluacionDocenteService
      .getEvaluacionDocenteById(this.evaluacionDocenteId)
      .subscribe(
        (evaluacionDocente: EvaluacionDocente) => {
          // Rellenar el formulario con los datos del evaluacionDocente existente
          this.docenteId = evaluacionDocente.docente;
  
          this.evaluacionDocenteForm.patchValue({
            id: evaluacionDocente.id,
            calificacion: evaluacionDocente.calificacion,
            semestre: evaluacionDocente.semestre,
          });
  
          // Cargar los datos del docente usando el ID actualizado
          this.docenteService.getDocenteById(this.docenteId).subscribe(
            (docente: Docente) => {
              // Rellenar el formulario con los datos del docente existente
              this.evaluacionDocenteForm.patchValue({
                docente: docente.nombres + ' ' + docente.apellidos,
              });
            },
            (error) => {
              console.error('Error al obtener el docente', error);
            }
          );
        },
        (error) => {
          console.error('Error al obtener el evaluacionDocente', error);
        }
      );
  }

  // Actualizar evaluacionDocente
  onSubmit(): void {
    // Asignar el ID del docente al formulario
    this.evaluacionDocenteForm.value.docente = this.docenteId;

    if (this.evaluacionDocenteForm.valid) {
      const { id, ...evaluacionDocenteActualizada } =
        this.evaluacionDocenteForm.value;

      this.evaluacionDocenteService
        .updateEvaluacionDocente(
          this.evaluacionDocenteId,
          evaluacionDocenteActualizada
        )
        .subscribe(
          (evaluacionDocente: EvaluacionDocente) => {
            console.log('EvaluacionDocente actualizada', evaluacionDocente);
            this.router.navigate(['/app/evaluacion-docentes']);
          },
          (error) => {
            console.error('Error al actualizar la evaluacionDocente', error);
          }
        );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/evaluacion-docentes']);
  }
}
