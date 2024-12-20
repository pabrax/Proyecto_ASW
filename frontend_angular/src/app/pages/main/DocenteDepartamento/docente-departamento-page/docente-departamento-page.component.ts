import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// clases
import { Formater } from '../../../../classes/formater';

// service

import { DocenteDepartamentoService, DocenteDepartamento } from '../../../../services/docente-departamento.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-docente-departamento-page',
  standalone: true,
  imports: [ AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './docente-departamento-page.component.html',
  styleUrl: '../../../styles/view-page.css',
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
        this.docenteDepartamentos.forEach(docenteDepartamento => {
          docenteDepartamento.fecha_ingreso = Formater.formatDate(docenteDepartamento.fecha_ingreso);
          docenteDepartamento.fecha_salida = Formater.formatDate(docenteDepartamento.fecha_salida);
        }
        );
        
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
        this.docenteDepartamentos = this.docenteDepartamentos.filter(docenteDepartamento => docenteDepartamento.docente !== docente_id);
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
