import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { EvaluacionDocente, EvaluacionDocenteService } from '../../../../services/evaluacion-docente.service';
import { DocenteService, Docente } from '../../../../services/docente.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';


@Component({
  selector: 'app-evaluacion-docente-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './evaluacion-docente-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [EvaluacionDocenteService, DocenteService]
})
export class EvaluacionDocenteCreatePageComponent {
  
    evaluacionDocenteForm: FormGroup;
    evaluacionDocente: EvaluacionDocente = {
      calificacion: 0,
      semestre: '',
      docente: 0
    };

    docentes: Docente[] = [];
  
    constructor(
      private evaluacionDocenteService: EvaluacionDocenteService,
      private docenteService: DocenteService,
      private router: Router,
      private formBuilder: FormBuilder
    ) {
      this.evaluacionDocenteForm = this.formBuilder.group({
        calificacion: ['', Validators.required],
        semestre: ['', Validators.required],
        docente: ['', Validators.required]
      });
    }

    // Inicializa el componente y carga los servicios de Docente
    ngOnInit(): void {
      this.docenteService.getDocentes().subscribe(
        (data) => {
          this.docentes = data;
        },
        (error) => {
          console.error('Error al cargar los docentes', error);
        }
      );
    }
  
    createEvaluacionDocente(): void {
      
      this.evaluacionDocenteService.createEvaluacionDocente(this.evaluacionDocente).subscribe(
        (data) => {
          console.log('EvaluacionDocente creada', data);
        },
        (error) => {
          
          console.error('Error al crear la evaluacionDocente', error);
        }
      );
    }

    // Método para enviar los datos del formulario
    onSubmit(): void {
      console.log(this.evaluacionDocenteForm.value);

      if (this.evaluacionDocenteForm.valid) {

        this.evaluacionDocente.calificacion = this.evaluacionDocenteForm.value.calificacion;
        this.evaluacionDocente.semestre = this.evaluacionDocenteForm.value.semestre
        this.evaluacionDocente.docente = this.evaluacionDocenteForm.value.docente;

        this.evaluacionDocenteService.createEvaluacionDocente(this.evaluacionDocente).subscribe(
          (data) => {
            console.log('EvaluacionDocente creada', data);
            this.router.navigate(['/app/evaluacion-docentes']);
          },
          (error) => {
            console.error('Error al crear la evaluacionDocente', error);
          }
        );
      }
    }
}
