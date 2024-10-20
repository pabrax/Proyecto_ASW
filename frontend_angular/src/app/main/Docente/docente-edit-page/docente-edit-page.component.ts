import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { Docente, DocenteService } from '../docente.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-docente-edit-page',
  standalone: true,
  imports: [ AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule, ReactiveFormsModule ],
  templateUrl: './docente-edit-page.component.html',
  styleUrl: './docente-edit-page.component.css',
  providers: [ DocenteService ]
})
export class DocenteEditPageComponent {

  docenteForm: FormGroup;
  docenteId: number = 0;  // Para almacenar el ID del docente, inicializado a 0

  constructor(
    private docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.docenteForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      genero: ['', Validators.required],
      cargo: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      url_cvlac: ['', Validators.required],
      fecha_actualizacion: ['', Validators.required],
      escalafon: ['', Validators.required],
      perfil: ['', Validators.required],
      cat_minciencia: ['', Validators.required],
      conv_minciencia: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      linea_investigacion_principal: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID del docente desde los parámetros de la ruta
    this.docenteId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos del docente usando el ID
    this.docenteService.getDocenteById(this.docenteId).subscribe(
      (docente: Docente) => {
        // Rellenar el formulario con los datos del docente existente
        this.docenteForm.patchValue({
          cedula: docente.cedula,
          nombres: docente.nombres,
          apellidos: docente.apellidos,
          genero: docente.genero,
          cargo: docente.cargo,
          fecha_nacimiento: docente.fecha_nacimiento,
          correo: docente.correo,
          telefono: docente.telefono,
          url_cvlac: docente.url_cvlac,
          fecha_actualizacion: docente.fecha_actualizacion,
          escalafon: docente.escalafon,
          perfil: docente.perfil,
          cat_minciencia: docente.cat_minciencia,
          conv_minciencia: docente.conv_minciencia,
          nacionalidad: docente.nacionalidad,
          linea_investigacion_principal: docente.linea_investigacion_principal
        });
      },
      (error) => {
        console.error('Error al obtener el docente', error);
      }
    );
  }

  // updateDocente
  onSubmit(): void {
    if (this.docenteForm.valid) {
      const docenteActualizado: Docente = {
        cedula: this.docenteId,
        ...this.docenteForm.value
      };

      this.docenteService.updateDocente(this.docenteId, docenteActualizado).subscribe(
        (docente: Docente) => {
          console.log('Docente actualizado', docente);
          this.router.navigate(['/docente']);
        },
        (error) => {
          console.error('Error al actualizar el docente', error);
        }
      );
    }
  }
  
  onCancel(): void {
    this.router.navigate(['/app/docente']);
  }
}
