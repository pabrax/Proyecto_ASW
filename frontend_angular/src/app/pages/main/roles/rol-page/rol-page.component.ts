import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RolService, Rol } from '../../../../services/rol.service';

// layouts
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-rol-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, AplicationHeaderComponent, AplicationNavbarComponent],
  templateUrl: './rol-page.component.html',
  styleUrl: '../../../styles/view-page.css',
  providers: [RolService]
})
export class RolPageComponent implements OnInit {
  roles: Rol[] = [];

  constructor(
    private rolService: RolService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rolService.getRoles().subscribe(
      (data) => {
        this.roles = data;
      },
      (error) => {
        console.error("Error al obtener los roles", error);
      }
    );
  }

  // Método para eliminar un rol
  deleteRol(id: number): void {
    this.rolService.deleteRol(id).subscribe(
      () => {
        this.roles = this.roles.filter(rol => rol.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el rol', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un rol
  createRol(): void {
    this.router.navigate(['/admin/rol/create']);
  }

  // Método para navegar al formulario de edición de un rol
  editRol(id: number): void {
    this.router.navigate(['/admin/rol/edit', id]);
  }
}