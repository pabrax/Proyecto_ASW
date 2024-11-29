import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Rol, RolService } from '../../../../services/rol.service';
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

// layouts

@Component({
  selector: 'app-rol-create-page',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AplicationHeaderComponent,
    AplicationNavbarComponent
  ],
  templateUrl: './rol-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [RolService]
})
export class RolCreatePageComponent {
  rolForm: FormGroup;
  rol: Rol = {
    id: 0,
    rol: ''
  };

  constructor(
    private rolService: RolService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.rolForm = this.formBuilder.group({
      rol: ['', Validators.required]
    });
  }

  createRol(): void {
    this.rolService.createRol(this.rol).subscribe(
      (data) => {
        console.log('Rol creado', data);
      },
      (error) => {
        console.error('Error al crear el rol', error);
      }
    );
  }

  onSubmit(): void {
    if (this.rolForm.valid) {
      const rol: Rol = {
        id: 0,
        rol: this.rolForm.value.rol
      };

      this.rolService.createRol(rol).subscribe(
        (data) => {
          console.log('Rol creado', data);
          this.router.navigate(['admin/rol']);
        },
        (error) => {
          console.error('Error al crear el rol', error);
        }
      );
    } else {
      console.error('El formulario no es válido');
    }
  }
}