import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service

import { EstudioAc, EstudioAcService } from '../estudio-ac.service'; 

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';


@Component({
  selector: 'app-estudio-ac-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './estudio-ac-page.component.html',
  styleUrl: './estudio-ac-page.component.css',
  providers: [EstudioAcService]
})
export class EstudioAcPageComponent {
  estudiosAC: EstudioAc[] = [];

  constructor(
    private estudioAcService: EstudioAcService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.estudioAcService.getEstudios().subscribe(
      (data) => {
        this.estudiosAC = data;
      },
      (error) => {
        console.error("error al obtener los estudios", error);
      }
    )
  }

  // Método para eliminar un estudio
  deleteEstudioAC(id: number): void {
    this.estudioAcService.deleteEstudio(id).subscribe(
      () => {
        this.estudiosAC = this.estudiosAC.filter(estudio => estudio.estudio_id !== id);
      },
      (error) => {
        console.error('Error al eliminar el estudio', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un estudio
  createEstudioAC(): void {
    this.router.navigate(['/app/estudio-ac/create']);
  }

  // Método para navegar al formulario de edición de un estudio
  editEstudioAC(id: number): void {
    this.router.navigate(['app/estudio-ac/create', id]);
  }
}
