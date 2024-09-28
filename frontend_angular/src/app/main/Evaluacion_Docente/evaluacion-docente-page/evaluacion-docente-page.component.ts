import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service

import { EvaluacionDocente, EvaluacionDocenteService } from '../evaluacion-docente.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-evaluacion-docente-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './evaluacion-docente-page.component.html',
  styleUrl: './evaluacion-docente-page.component.css',
  providers: [EvaluacionDocenteService]
})
export class EvaluacionDocentePageComponent {
  evaluacionesDocente: EvaluacionDocente[] = [];

  constructor(
    private evaluacionDocenteService: EvaluacionDocenteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.evaluacionDocenteService.getEvaluacionDocentes().subscribe(
      (data) => {
        this.evaluacionesDocente = data;
      },
      (error) => {
        console.error("error al obtener las evaluaciones docente", error);
      }
    )
  }

  // Método para eliminar una evaluacion docente
  deleteEvaluacionDocente(id: number): void {
    this.evaluacionDocenteService.deleteEvaluacionDocente(id).subscribe(
      () => {
        this.evaluacionesDocente = this.evaluacionesDocente.filter(evaluacionDocente => evaluacionDocente.id !== id);
      },
      (error) => {
        console.error('Error al eliminar la evaluacion docente', error);
      }
    );
  }

  // Método para navegar al formulario de creación de una evaluacion docente
  createEvaluacionDocente(): void {
    this.router.navigate(['/app/evaluacion-docentes/create']);
  }

  // Método para navegar al formulario de edición de una evaluacion docente
  editEvaluacionDocente(id: number): void {
    this.router.navigate(['/app/evaluacion-docentes/edit', id]);
  }
}
