import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

// service
import { AlianzaService, Alianza } from '../alianza.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-alianza-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './alianza-page.component.html',
  styleUrl: './alianza-page.component.css',
  providers: [AlianzaService]
})
export class AlianzaPageComponent {

  alianzas: Alianza[] = [];

  constructor(
    private alianzaService: AlianzaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alianzaService.getAlianza().subscribe(
      (data) => {
        this.alianzas = data;
      },
      (error) => {
        console.error("error al obtener las alianzas", error);
      }
    )
  }

  // Método para eliminar una alianza
  deleteAlianza(aliado_id: number): void {
    this.alianzaService.deleteAlianza(aliado_id).subscribe(
      () => {
        this.alianzas = this.alianzas.filter(alianza => alianza.aliado !== aliado_id);
      },
      (error) => {
        console.error('Error al eliminar la alianza', error);
      }
    );
  }

  // Método para navegar al formulario de creación de una alianza
  createAlianza(): void {
    this.router.navigate(['/app/alianza/create']);
  }

  // Método para navegar al formulario de edición de una alianza
  editAlianza(aliado_id: number): void {
    this.router.navigate(['/app/alianza/edit', aliado_id]);
  }
}
