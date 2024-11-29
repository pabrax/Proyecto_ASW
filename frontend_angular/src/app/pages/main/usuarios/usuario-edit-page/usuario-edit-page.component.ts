import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario, UsuarioService } from '../../../../services/usuario.service';
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

// service

// shared components

@Component({
  selector: 'app-usuario-edit-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './usuario-edit-page.component.html',
  styleUrls: ['../../../styles/edit-page.css'],
  providers: [UsuarioService]
})
export class UsuarioEditPageComponent implements OnInit {

  usuarioForm: FormGroup;
  email: string = '';  // Para almacenar el email del usuario

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.usuarioForm = this.formBuilder.group({
      email: [{ value: '', disabled: true }, Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el email del usuario desde los parámetros de la ruta
    this.email = this.route.snapshot.paramMap.get('email') || '';

    // Cargar los datos del usuario usando el email
    this.usuarioService.getUsuarioByEmail(this.email).subscribe(
      (usuario: Usuario) => {
        // Rellenar el formulario con los datos del usuario existente
        this.usuarioForm.patchValue({
          email: usuario.email,
          contrasena: usuario.contrasena
        });
      },
      (error) => {
        console.error('Error al obtener el usuario', error);
      }
    );
  }

  // updateUsuario
  onSubmit(): void {
    if (this.usuarioForm.valid) {
      const usuarioActualizado: Usuario = {
        ...this.usuarioForm.value,
        email: this.email
      };
      this.usuarioService.updateUsuario(this.email, usuarioActualizado).subscribe(
        () => {
          this.router.navigate(['/admin/usuario']);
        },
        (error) => {
          console.error('Error al actualizar el usuario', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/admin/usuario']);
  }
}