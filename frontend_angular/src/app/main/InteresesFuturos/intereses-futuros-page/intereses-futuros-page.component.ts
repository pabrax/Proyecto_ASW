import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service

import { InteresesFuturos, InteresesFuturosService } from '../intereses-futuros.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';


@Component({
  selector: 'app-intereses-futuros-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './intereses-futuros-page.component.html',
  styleUrl: './intereses-futuros-page.component.css',
  providers: [InteresesFuturosService]
})
export class InteresesFuturosPageComponent {
  interesesFuturos: InteresesFuturos[] = [];

  constructor(
    private interesesFuturosService: InteresesFuturosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.interesesFuturosService.getInteresesFuturos().subscribe(
      (data) => {
        this.interesesFuturos = data;
      },
      (error) => {
        console.error("error al obtener los intereses futuros", error);
      }
    )
  }

  // Método para eliminar un interes futuro
  deleteInteresesFuturos(id: number): void {
    this.interesesFuturosService.deleteInteresesFuturos(id).subscribe(
      () => {
        this.interesesFuturos = this.interesesFuturos.filter(interesesFuturos => interesesFuturos.docente_id !== id);
      },
      (error) => {
        console.error('Error al eliminar el interes futuro', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un interes futuro
  createInteresesFuturos(): void {
    this.router.navigate(['/app/intereses-futuros/create']);
  }

  // Método para navegar al formulario de edición de un interes futuro
  editInteresesFuturos(id: number): void {
    this.router.navigate(['app/intereses-futuros/create', id]);
  }
}
