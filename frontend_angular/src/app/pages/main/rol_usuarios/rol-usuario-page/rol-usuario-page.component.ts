import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RolUsuario, RolUsuarioService } from '../../../../services/rol-usuario.service';
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

// service

// shared components

@Component({
  selector: 'app-rol-usuario-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule],
  templateUrl: './rol-usuario-page.component.html',
  styleUrls: ['../../../styles/view-page.css'],
  providers: [RolUsuarioService]
})
export class RolUsuarioPageComponent implements OnInit {
  rolUsuarios: RolUsuario[] = [];

  constructor(
    private rolUsuarioService: RolUsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rolUsuarioService.getRolUsuarios().subscribe(
      (data) => {
        this.rolUsuarios = data;
      },
      (error) => {
        console.error("Error al obtener las relaciones rol-usuario", error);
      }
    );
  }

  // Método para eliminar una relación rol-usuario
  deleteRolUsuario(correoUsuario: string, idRol: number): void {
    this.rolUsuarioService.deleteRolUsuario(correoUsuario, idRol).subscribe(
      () => {
        this.rolUsuarios = this.rolUsuarios.filter(rolUsuario => rolUsuario.correo_usuario !== correoUsuario || rolUsuario.id_rol !== idRol);
      },
      (error) => {
        console.error('Error al eliminar la relación rol-usuario', error);
      }
    );
  }

  // Método para navegar al formulario de creación de una relación rol-usuario
  createRolUsuario(): void {
    this.router.navigate(['/admin/rol_usuario/create']);
  }

  // Método para navegar al formulario de edición de una relación rol-usuario según el correo del usuario
  editRolUsuario(correoUsuario: string): void {
    this.router.navigate(['admin/rol_usuario/edit', correoUsuario]);
  }
}