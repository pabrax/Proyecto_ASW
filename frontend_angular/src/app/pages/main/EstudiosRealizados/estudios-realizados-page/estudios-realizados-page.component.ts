import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// clases

import { Formater } from '../../../../classes/formater';

// service

import { EstudiosRealizadosService, EstudiosRealizados } from '../../../../services/estudios-realizados.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';


@Component({
  selector: 'app-estudios-realizados-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule],
  templateUrl: './estudios-realizados-page.component.html',
  styleUrl: '../../../styles/view-page.css',
  providers: [EstudiosRealizadosService]
})
export class EstudiosRealizadosPageComponent {
  estudiosRealizados: EstudiosRealizados[] = [];

  constructor(
    private estudiosRealizadosService: EstudiosRealizadosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.estudiosRealizadosService.getEstudiosRealizados().subscribe(
      (data) => {
        this.estudiosRealizados = data;
        this.estudiosRealizados.forEach(estudioRealizado => {
          estudioRealizado.fecha = Formater.formatDate(estudioRealizado.fecha);
        });
      },
      (error) => {
        console.error("error al obtener los estudios realizados", error);
      }
    )
  }

  // Método para eliminar un estudio realizado
  deleteEstudioRealizado(id: number): void {
    this.estudiosRealizadosService.deleteEstudioRealizado(id).subscribe(
      () => {
        this.estudiosRealizados = this.estudiosRealizados.filter(estudioRealizado => estudioRealizado.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el estudio realizado', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un estudio realizado
  createEstudioRealizado(): void {
    this.router.navigate(['/app/estudios-realizados/create']);
  }

  // Método para navegar al formulario de edición de un estudio realizado
  editEstudioRealizado(id: number): void {
    this.router.navigate(['/app/estudios-realizados/edit', id]);
  }
}
