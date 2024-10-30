import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service

import { AliadoService, Aliado } from '../../../../services/aliado.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';



@Component({
  selector: 'app-aliado-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './aliado-page.component.html',
  styleUrl: '../../../styles/view-page.css',
  providers: [AliadoService]
})
export class AliadoPageComponent {
  aliados: Aliado[] = [];

  constructor(
    private aliadoService: AliadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.aliadoService.getAliados().subscribe(
      (data) => {
        this.aliados = data;
      },
      (error) => {
        console.error("error al obtener los aliados", error);
      }
    )
  }

  // Método para eliminar un aliado
  deleteAliado(nit: number): void {
    this.aliadoService.deleteAliado(nit).subscribe(
      () => {
        this.aliados = this.aliados.filter(aliado => aliado.nit !== nit);
      },
      (error) => {
        console.error('Error al eliminar el aliado', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un aliado
  createAliado(): void {
    this.router.navigate(['/app/aliado/create']);
  }

  // Método para navegar al formulario de edición de un aliado
  editAliado(nit: number): void {
    this.router.navigate(['/app/aliado/edit', nit]);
  }
}
