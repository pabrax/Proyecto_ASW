import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service
import { ApoyoProfesoral, ApoyoProfesoralService } from '../apoyo-profesoral.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-apoyo-profesoral-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './apoyo-profesoral-page.component.html',
  styleUrl: './apoyo-profesoral-page.component.css',
  providers: [ApoyoProfesoralService]

})
export class ApoyoProfesoralPageComponent {
  apoyoProfesoral: ApoyoProfesoral[] = [];

  constructor(
    private apoyoProfesoralService: ApoyoProfesoralService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apoyoProfesoralService.getApoyoProfesorals().subscribe(
      (data) => {
        this.apoyoProfesoral = data;
      },
      (error) => {
        console.error("error al obtener los apoyoProfesorales", error);
      }
    )
  }

  // Método para eliminar un apoyoProfesoral
  deleteApoyoProfesoral(id: number): void {
    this.apoyoProfesoralService.deleteApoyoProfesoral(id).subscribe(
      () => {
        this.apoyoProfesoral = this.apoyoProfesoral.filter(apoyoProfesoral => apoyoProfesoral.estudios !== id);
      },
      (error) => {
        console.error('Error al eliminar el apoyoProfesoral', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un apoyoProfesoral
  createApoyoProfesoral(): void {
    this.router.navigate(['/app/apoyo-profesoral/create']);
  }

  // Método para navegar al formulario de edición de un apoyoProfesoral
  editApoyoProfesoral(id: number): void {
    this.router.navigate(['/app/apoyo-profesoral/edit', id]);
  }

}
