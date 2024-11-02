import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service

import { Experiencia, ExperienciaService } from '../../../../services/experiencia.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';
import { Formater } from '../../../../classes/formater';


@Component({
  selector: 'app-experiencia-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './experiencia-page.component.html',
  styleUrl: '../../../styles/view-page.css',
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
        this.experiencias.forEach(experiencia => {
          experiencia.fecha_inicio = Formater.formatDate(experiencia.fecha_inicio);
          experiencia.fecha_fin = Formater.formatDate(experiencia.fecha_fin);
        }
        );
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
