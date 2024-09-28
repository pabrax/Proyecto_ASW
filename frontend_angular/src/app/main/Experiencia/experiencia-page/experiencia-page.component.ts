import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service

import { Experiencia, ExperienciaService } from '../experiencia.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';


@Component({
  selector: 'app-experiencia-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './experiencia-page.component.html',
  styleUrl: './experiencia-page.component.css',
  providers: [ExperienciaService]
})
export class ExperienciaPageComponent {
  experiencias: Experiencia[] = [];

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe(
      (data) => {
        this.experiencias = data;
      },
      (error) => {
        console.error("error al obtener las experiencias", error);
      }
    )
  }

  // Método para eliminar una experiencia
  deleteExperiencia(id: number): void {
    this.experienciaService.deleteExperiencia(id).subscribe(
      () => {
        this.experiencias = this.experiencias.filter(experiencia => experiencia.id !== id);
      },
      (error) => {
        console.error('Error al eliminar la experiencia', error);
      }
    );
  }

  // Método para navegar al formulario de creación de una experiencia
  createExperiencia(): void {
    this.router.navigate(['/app/experiencia/create']);
  }

  // Método para navegar al formulario de edición de una experiencia
  editExperiencia(id: number): void {
    this.router.navigate(['/app/experiencia/edit', id]);
  }

}
