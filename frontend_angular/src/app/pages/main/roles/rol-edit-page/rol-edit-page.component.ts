import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Rol, RolService } from '../../../../services/rol.service';
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

// service

// shared components

@Component({
  selector: 'app-rol-edit-page',
  standalone: true,
  imports: [AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './rol-edit-page.component.html',
  styleUrls: ['../../../styles/edit-page.css'],
  providers: [RolService]
})
export class RolEditPageComponent implements OnInit {

  rolForm: FormGroup;
  rolId: number = 0;  // Para almacenar el ID del rol, inicializado a 0

  constructor(
    private rolService: RolService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.rolForm = this.formBuilder.group({
      rol: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID del rol desde los parámetros de la ruta
    this.rolId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos del rol usando el ID
    this.rolService.getRolById(this.rolId).subscribe(
      (rol: Rol) => {
        // Rellenar el formulario con los datos del rol existente
        this.rolForm.patchValue({
          rol: rol.rol
        });
      },
      (error) => {
        console.error('Error al obtener el rol', error);
      }
    );
  }

  // updateRol
  onSubmit(): void {
    if (this.rolForm.valid) {
      const rolActualizado: Rol = {
        ...this.rolForm.value,
        id: this.rolId
      };
      this.rolService.updateRol(this.rolId, rolActualizado).subscribe(
        () => {
          this.router.navigate(['/app/roles']);
        },
        (error) => {
          console.error('Error al actualizar el rol', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/roles']);
  }
}