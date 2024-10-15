import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service

import { DocenteDepartamentoService, DocenteDepartamento } from '../docente-departamento.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-docente-departamento-page',
  standalone: true,
  imports: [ AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './docente-departamento-page.component.html',
  styleUrl: './docente-departamento-page.component.css',
  providers: [DocenteDepartamentoService]
})
export class DocenteDepartamentoPageComponent {
  docenteDepartamentos: DocenteDepartamento[] = [];

  constructor(
    private docenteDepartamentoService: DocenteDepartamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.docenteDepartamentoService.getDocenteDepartamentos().subscribe(
      (data) => {
        this.docenteDepartamentos = data;
      },
      (error) => {
        console.error("error al obtener los docenteDepartamentos", error);
      }
    )
  }

  // Método para eliminar un docenteDepartamento
  deleteDocenteDepartamento(docente_id: number): void {
    this.docenteDepartamentoService.deleteDocenteDepartamento(docente_id).subscribe(
      () => {
        this.docenteDepartamentos = this.docenteDepartamentos.filter(docenteDepartamento => docenteDepartamento.docente_id !== docente_id);
      },
      (error) => {
        console.error('Error al eliminar el docenteDepartamento', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un docenteDepartamento
  createDocenteDepartamento(): void {
    this.router.navigate(['/app/docente-departamento/create']);
  }

  // Método para navegar al formulario de edición de un docenteDepartamento
  editDocenteDepartamento(docente_id: number): void {
    this.router.navigate(['/app/docente-departamento/edit', docente_id]);
  }
}
