import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// clases 
import { Formater } from '../../../../classes/formater';

// service
import { ExperienciaService, Experiencia } from '../../../../services/experiencia.service';
import { DocenteService, Docente } from '../../../../services/docente.service';


// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-experiencia-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './experiencia-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [ExperienciaService, DocenteService],
})
export class ExperienciaEditPageComponent implements OnInit {

  experienciaForm: FormGroup;

  id: number = 0;  // Para almacenar el ID de la experiencia, inicializado a 0

  docenteId: number = 0; // Para almacenar el ID del Docente, inicializado a 0

  constructor(
    private experienciaService: ExperienciaService,
    private docenteService: DocenteService,
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

        this.docenteId = experiencia.docente;

        // Formatear las fechas
        experiencia.fecha_inicio = Formater.formatDate(experiencia.fecha_inicio);
        experiencia.fecha_fin = Formater.formatDate(experiencia.fecha_fin);
        // Rellenar el formulario con los datos de la experiencia existente
        this.experienciaForm.patchValue({
          nombre_cargo: experiencia.nombre_cargo,
          institucion: experiencia.institucion,
          tipo: experiencia.tipo,
          fecha_inicio: experiencia.fecha_inicio,
          fecha_fin: experiencia.fecha_fin,
        });

        // Cargar los datos del docente usando el ID actualizado
        this.docenteService.getDocenteById(experiencia.docente).subscribe(
          (docente: Docente) => {
            // Rellenar el formulario con los datos del docente existente
            this.experienciaForm.patchValue({
              docente: docente.nombres + ' ' + docente.apellidos,
            });
          },
          (error) => {
            console.error('Error al obtener el docente', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener la experiencia', error);
      }
    );
  }

  // Actualizar experiencia
  onSubmit(): void {

    // Asignar el ID del docente al formulario
    this.experienciaForm.value.docente = this.docenteId;

    if (this.experienciaForm.valid) {
      const experienciaActualizada: Experiencia = {
        nombre_cargo: this.experienciaForm.value.nombre_cargo,
        institucion: this.experienciaForm.value.institucion,
        tipo: this.experienciaForm.value.tipo,
        fecha_inicio: this.experienciaForm.value.fecha_inicio,
        fecha_fin: this.experienciaForm.value.fecha_fin,
        docente: this.experienciaForm.value.docente
      };

      console.log('Updating experiencia with ID:', this.id);
      console.log('Payload:', experienciaActualizada);

      this.experienciaService.updateExperiencia(this.id, experienciaActualizada).subscribe({
        next: (experiencia: Experiencia) => {
          console.log('Experiencia actualizada', experiencia);
          this.router.navigate(['/app/experiencia']);
        },
        error: (error) => {
          console.error('Error al actualizar la experiencia', error);
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/experiencia']);
  }
}
