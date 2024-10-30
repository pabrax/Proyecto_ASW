import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service
import { EvaluacionDocenteService, EvaluacionDocente } from '../../../../services/evaluacion-docente.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';


@Component({
  selector: 'app-evaluacion-docente-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './evaluacion-docente-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [EvaluacionDocenteService]
})
export class EvaluacionDocenteEditPageComponent {

  evaluacionDocenteForm: FormGroup;
  evaluacionDocenteId: number = 0;  // Para almacenar el ID del evaluacionDocente, inicializado a 0

  constructor(
    private evaluacionDocenteService: EvaluacionDocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.evaluacionDocenteForm = this.formBuilder.group({
      calificacion: ['', Validators.required],
      semestre: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID del evaluacionDocente desde los parámetros de la ruta
    this.evaluacionDocenteId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos del evaluacionDocente usando el ID
    this.evaluacionDocenteService.getEvaluacionDocenteById(this.evaluacionDocenteId).subscribe(
      (evaluacionDocente: EvaluacionDocente) => {
        // Rellenar el formulario con los datos del evaluacionDocente existente
        this.evaluacionDocenteForm.patchValue({
          calificacion: evaluacionDocente.calificacion,
          semestre: evaluacionDocente.semestre,
          docente: evaluacionDocente.docente
        });
      },
      (error) => {
        console.error('Error al obtener el evaluacionDocente', error);
      }
    );
  }

  // Actualizar evaluacionDocente
  onSubmit(): void {
    if (this.evaluacionDocenteForm.valid) {
      const evaluacionDocenteActualizada: EvaluacionDocente = {
        id: this.evaluacionDocenteId,
        calificacion: this.evaluacionDocenteForm.value.calificacion,
        semestre: this.evaluacionDocenteForm.value.semestre,
        docente: this.evaluacionDocenteForm.value.docente
      };

      this.evaluacionDocenteService.updateEvaluacionDocente(this.evaluacionDocenteId, evaluacionDocenteActualizada).subscribe(
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
