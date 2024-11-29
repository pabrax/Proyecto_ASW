import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService, Usuario } from '../../../../services/usuario.service';

// layouts
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-usuario-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, AplicationHeaderComponent, AplicationNavbarComponent],
  templateUrl: './usuario-page.component.html',
  styleUrl: '../../../styles/view-page.css',
  providers: [UsuarioService]
})
export class UsuarioPageComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error("Error al obtener los usuarios", error);
      }
    );
  }

  // Método para eliminar un usuario
  deleteUsuario(email: string): void {
    this.usuarioService.deleteUsuario(email).subscribe(
      () => {
        this.usuarios = this.usuarios.filter(usuario => usuario.email !== email);
      },
      (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }

  // Método para navegar al formulario de creación de un usuario
  createUsuario(): void {
    this.router.navigate(['/admin/usuario/create']);
  }

  // Método para navegar al formulario de edición de un usuario
  editUsuario(email: string): void {
    this.router.navigate(['/admin/usuario/edit', email]);
  }
}