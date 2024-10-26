import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service
import { ExperienciaService, Experiencia } from '../experiencia.service';

// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-experiencia-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './experiencia-edit-page.component.html',
  styleUrl: './experiencia-edit-page.component.css',
  providers: [ExperienciaService]
})
export class ExperienciaEditPageComponent implements OnInit {

  experienciaForm: FormGroup;

  id: number = 0;  // Para almacenar el ID de la experiencia, inicializado a 0

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.experienciaForm = this.formBuilder.group({
      nombre_cargo: ['', Validators.required],
      institucion: ['', Validators.required],
      tipo: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la experiencia desde los parámetros de la ruta
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos de la experiencia usando el ID
    this.experienciaService.getExperienciaById(this.id).subscribe(
      (experiencia: Experiencia) => {
        // Rellenar el formulario con los datos de la experiencia existente
        this.experienciaForm.patchValue({
          nombre_cargo: experiencia.nombre_cargo,
          institucion: experiencia.institucion,
          tipo: experiencia.tipo,
          fecha_inicio: experiencia.fecha_inicio,
          fecha_fin: experiencia.fecha_fin,
          docente: experiencia.docente
        });
      },
      (error) => {
        console.error('Error al obtener la experiencia', error);
      }
    );
  }

  // Actualizar experiencia
  onSubmit(): void {
    console.log(this.experienciaForm.value);
    if (this.experienciaForm.valid) {
      const experienciaActualizada: Experiencia = {
        id: this.id,
        nombre_cargo: this.experienciaForm.value.nombre_cargo,
        institucion: this.experienciaForm.value.institucion,
        tipo: this.experienciaForm.value.tipo,
        fecha_inicio: this.experienciaForm.value.fecha_inicio,
        fecha_fin: this.experienciaForm.value.fecha_fin,
        docente: this.experienciaForm.value.docente
      };

      console.log('Updating experiencia with ID:', this.id);
      console.log('Payload:', experienciaActualizada);

      this.experienciaService.updateExperiencia(this.id, experienciaActualizada).subscribe(
        (experiencia: Experiencia) => {
          console.log('Experiencia actualizada', experiencia);
          this.router.navigate(['/app/experiencia']);
        },
        (error) => {
          console.error('Error al actualizar la experiencia', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/experiencia']);
  }
}
