import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service

import { RedDocente, RedDocenteService } from '../red-docente.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-red-docente-page',
  standalone: true,
  imports: [ AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule ],
  templateUrl: './red-docente-page.component.html',
  styleUrl: './red-docente-page.component.css',
  providers: [ RedDocenteService ]
})
export class RedDocentePageComponent {
  redDocentes: RedDocente[] = [];

  constructor(
    private redDocenteService: RedDocenteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.redDocenteService.getRedDocentes().subscribe(
      (data) => {
        this.redDocentes = data;
      },
      (error) => {
        console.error("error al obtener las becas", error);
      }
    )
  }

  // Método para eliminar una beca
  deleteRedDocente(id: number): void {
    this.redDocenteService.deleteRedDocente(id).subscribe(
      () => {
        this.redDocentes = this.redDocentes.filter(redDocente => redDocente.docente_id !== id);
      },
      (error) => {
        console.error('Error al eliminar la beca', error);
      }
    );
  }

  // Método para navegar al formulario de creación de una beca
  createRedDocente(): void {
    this.router.navigate(['/app/red-docente/create']);
  }

  // Método para navegar al formulario de edición de una beca
  editRedDocente(id: number): void {
    this.router.navigate(['app/red-docente/create', id]);
  }
}
