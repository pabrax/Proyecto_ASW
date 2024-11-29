import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Usuario, UsuarioService } from '../../../../services/usuario.service';
// layouts
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-usuario-create-page',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AplicationHeaderComponent,
    AplicationNavbarComponent
  ],
  templateUrl: './usuario-create-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [UsuarioService]
})
export class UsuarioCreatePageComponent {
  usuarioForm: FormGroup;
  usuario: Usuario = {
    email: '',
    contrasena: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.usuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  createUsuario(): void {
    this.usuarioService.createUsuario(this.usuario).subscribe(
      (data) => {
        console.log('Usuario creado', data);
      },
      (error) => {
        console.error('Error al crear el usuario', error);
      }
    );
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      const usuario: Usuario = {
        email: this.usuarioForm.value.email,
        contrasena: this.usuarioForm.value.contrasena
      };

      this.usuarioService.createUsuario(usuario).subscribe(
        (data) => {
          console.log('Usuario creado', data);
          this.router.navigate(['/admin/usuario']);
        },
        (error) => {
          console.error('Error al crear el usuario', error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }
}