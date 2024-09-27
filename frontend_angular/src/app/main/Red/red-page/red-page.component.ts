import { Component, OnInit } from '@angular/core';
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


import { RedService, Red } from '../red.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-red-page',
  standalone: true,
  imports: [AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './red-page.component.html',
  styleUrl: './red-page.component.css',
  providers: [RedService]
})
export class RedPageComponent {
  redes: Red[] = [];

  constructor (
    private redService: RedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.redService.getRedes().subscribe (
      (data) => {
        this.redes = data;
      },
      (error) => {
        console.error("error al obtener las redes", error);
      }
    )
  }

  // Método para eliminar una red
  deleteRed(idr: number): void {
    this.redService.deleteRed(idr).subscribe(
      () => {
        this.redes = this.redes.filter(red => red.idr !== idr);
      },
      (error) => {
        console.error('Error al eliminar la red', error);
      }
    );
  }

  // Método para navegar al formulario de creación de una red
  createRed(): void {
    this.router.navigate(['/red-create']);
  }

  // Método para navegar al formulario de edición de una red
  editRed(idr: number): void {
    this.router.navigate(['/red-edit', idr]);
  }

}
