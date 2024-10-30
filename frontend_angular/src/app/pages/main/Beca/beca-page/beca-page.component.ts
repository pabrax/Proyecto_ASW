import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service

import { Beca, BecaService } from '../../../../services/beca.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-beca-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './beca-page.component.html',
  styleUrl: '../../../styles/view-page.css',
  providers: [BecaService]
})
export class BecaPageComponent {
  becas: Beca[] = [];

  constructor(
    private becaService: BecaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.becaService.getBecas().subscribe(
      (data) => {
        this.becas = data;
      },
      (error) => {
        console.error("error al obtener las becas", error);
      }
    )
  }

  // Método para eliminar una beca
  deleteBeca(id: number): void {
    this.becaService.deleteBeca(id).subscribe(
      () => {
        this.becas = this.becas.filter(beca => beca.estudios !== id);
      },
      (error) => {
        console.error('Error al eliminar la beca', error);
      }
    );
  }

  // Método para navegar al formulario de creación de una beca
  createBeca(): void {
    this.router.navigate(['/app/beca/create']);
  }

  // Método para navegar al formulario de edición de una beca
  editBeca(id: number): void {
    this.router.navigate(['app/beca/edit', id]);
  }
}
