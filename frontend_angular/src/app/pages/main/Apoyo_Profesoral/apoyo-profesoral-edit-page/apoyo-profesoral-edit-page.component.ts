import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service
import { ApoyoProfesoralService, ApoyoProfesoral } from '../../../../services/apoyo-profesoral.service';
import { EstudiosRealizadosService, EstudiosRealizados } from '../../../../services/estudios-realizados.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-apoyo-profesoral-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './apoyo-profesoral-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [ApoyoProfesoralService, EstudiosRealizadosService],
})
export class ApoyoProfesoralEditPageComponent {
  
  apoyoProfesoralForm: FormGroup;
  apoyoProfesoralId: number = 0;  // Para almacenar el ID del apoyoProfesoral, inicializado a 0

  EstudioRealizadoId: number = 0; // Para almacenar el ID del Docente, inicializado a 0

  constructor(
    private apoyoProfesoralService: ApoyoProfesoralService,
    private estudiosRealizadosService: EstudiosRealizadosService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.apoyoProfesoralForm = this.formBuilder.group({
      estudios: ['', Validators.required],
      con_apoyo: ['', Validators.required],
      institucion: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID del apoyoProfesoral desde los parámetros de la ruta
    this.apoyoProfesoralId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos del apoyoProfesoral usando el ID
    this.apoyoProfesoralService.getApoyoProfesoralById(this.apoyoProfesoralId).subscribe(
      (apoyoProfesoral: ApoyoProfesoral) => {
        // Rellenar el formulario con los datos del apoyoProfesoral existente
        this.apoyoProfesoralForm.patchValue({
          estudios: apoyoProfesoral.estudios,
          con_apoyo: apoyoProfesoral.con_apoyo,
          institucion: apoyoProfesoral.institucion,
          tipo: apoyoProfesoral.tipo
        });

        // Cargar los datos del estudioRealizado usando el ID actualizado
        this.EstudioRealizadoId = apoyoProfesoral.estudios;
        this.estudiosRealizadosService.getEstudioRealizadoById(this.EstudioRealizadoId).subscribe(
          (estudioRealizado: EstudiosRealizados) => {
            // Rellenar el formulario con los datos del estudioRealizado existente
            this.apoyoProfesoralForm.patchValue({
              estudios: estudioRealizado.titulo
            });
          },
          (error) => {
            console.error('Error al obtener el estudioRealizado', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener el apoyoProfesoral', error);
      }
    );
  }

  // updateApoyoProfesoral
  onSubmit(): void {

    this.apoyoProfesoralForm.value.estudios = this.EstudioRealizadoId;

    if (this.apoyoProfesoralForm.valid) {
      const apoyoProfesoralActualizado: ApoyoProfesoral = {
        ...this.apoyoProfesoralForm.value
      };

      // Actualizar el apoyoProfesoral
      this.apoyoProfesoralService.updateApoyoProfesoral(this.apoyoProfesoralId, apoyoProfesoralActualizado).subscribe(
        (apoyoProfesoral) => {
          console.log('ApoyoProfesoral actualizado', apoyoProfesoral);
          this.router.navigate(['/app/apoyo-profesoral']);
        },
        (error) => {
          console.error('Error al actualizar el apoyoProfesoral', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/apoyo-profesoral']);
  }
}
