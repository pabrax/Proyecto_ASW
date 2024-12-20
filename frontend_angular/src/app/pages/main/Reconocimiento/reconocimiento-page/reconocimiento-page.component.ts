import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// clases
import { Formater } from '../../../../classes/formater';

// service

import { Reconocimiento, ReconocimientoService} from '../../../../services/reconocimiento.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-reconocimiento-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './reconocimiento-page.component.html',
  styleUrl: '../../../styles/view-page.css',
  providers: [ReconocimientoService]
})
export class ReconocimientoPageComponent {
  reconocimientos: Reconocimiento[] = [];

  constructor(
    private reconocimientoService: ReconocimientoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reconocimientoService.getReconocimientos().subscribe(
      (data) => {
        this.reconocimientos = data;
        this.reconocimientos.forEach(reconocimiento => {
          reconocimiento.fecha = Formater.formatDate(reconocimiento.fecha);
        }
        );
      },
      (error) => {
        console.error("error al obtener los reconocimientos", error);
      }
    )
  }

  // Método para eliminar un reconocimiento
  deleteReconocimiento(id: number): void {
    this.reconocimientoService.deleteReconocimiento(id).subscribe(
      () => {
        this.reconocimientos = this.reconocimientos.filter(reconocimiento => reconocimiento.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el reconocimiento', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un reconocimiento
  createReconocimiento(): void {
    this.router.navigate(['/app/reconocimiento/create']);
  }

  // Método para navegar al formulario de edición de un reconocimiento
  editReconocimiento(id: number): void {
    this.router.navigate(['/app/reconocimiento/edit', id]);
  }
}
