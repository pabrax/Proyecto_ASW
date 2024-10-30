import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

//service

import { DocenteService, Docente } from '../../../../services/docente.service';



@Component({
  selector: 'app-docente-page',
  standalone: true,
  imports: [ AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './docente-page.component.html',
  styleUrl: '../../../styles/view-page.css',
  providers: [DocenteService]
})
export class DocentePageComponent {
  docentes: Docente[] = [];

  constructor(
    private docenteService: DocenteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.docenteService.getDocentes().subscribe(
      (data) => {
        
        this.docentes = data;
      },
      (error) => {
        console.error("error al obtener los docentes", error);
      }
    )
  }

  // Método para eliminar un docente
  deleteDocente(cedula: number): void {
    this.docenteService.deleteDocente(cedula).subscribe(
      () => {
        this.docentes = this.docentes.filter(docente => docente.cedula !== cedula);
      },
      (error) => {
        console.error('Error al eliminar el docente', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un docente
  createDocente(): void {
    this.router.navigate(['/app/docente/create']);
  }

  // Método para navegar al formulario de edición de un docente
  editDocente(cedula: number): void {
    this.router.navigate(['/app/docente/edit', cedula]);
  }
}
