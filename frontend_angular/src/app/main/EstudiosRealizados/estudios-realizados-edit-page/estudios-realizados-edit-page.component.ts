import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { EstudiosRealizados, EstudiosRealizadosService } from '../estudios-realizados.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-estudios-realizados-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './estudios-realizados-edit-page.component.html',
  styleUrl: './estudios-realizados-edit-page.component.css',
  providers: [EstudiosRealizadosService]
})
export class EstudiosRealizadosEditPageComponent {
  estudiosRealizadosForm: FormGroup;
  estudiosRealizadosId: number = 0;

  constructor(
    private estudiosRealizadosService: EstudiosRealizadosService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.estudiosRealizadosForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      universidad: ['', Validators.required],
      fecha: ['', Validators.required],
      tipo: ['', Validators.required],
      ciudad: ['', Validators.required],
      docente_id: ['', Validators.required],
      ins_acreditada: ['', Validators.required],
      metodologia: ['', Validators.required],
      perfil_egresado: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.estudiosRealizadosId = Number(this.route.snapshot.paramMap.get('id'));

    this.estudiosRealizadosService.getEstudioRealizadoById(this.estudiosRealizadosId).subscribe(
      (estudioRealizado: EstudiosRealizados) => {
        this.estudiosRealizadosForm.patchValue({
          titulo: estudioRealizado.titulo,
          universidad: estudioRealizado.universidad,
          fecha: estudioRealizado.fecha,
          tipo: estudioRealizado.tipo,
          ciudad: estudioRealizado.ciudad,
          docente_id: estudioRealizado.docente_id,
          ins_acreditada: estudioRealizado.ins_acreditada,
          metodologia: estudioRealizado.metodologia,
          perfil_egresado: estudioRealizado.perfil_egresado,
          pais: estudioRealizado.pais
        });
      },
      (error) => {
        console.error('Error al obtener el estudio realizado', error);
      }
    );
  }

  onSubmit(): void {
    if (this.estudiosRealizadosForm.valid) {
      const estudioRealizadoActualizado: EstudiosRealizados = {
        id: this.estudiosRealizadosId,
        ...this.estudiosRealizadosForm.value
      };

      this.estudiosRealizadosService.updateEstudioRealizado(this.estudiosRealizadosId, estudioRealizadoActualizado).subscribe(
        (estudioRealizado: EstudiosRealizados) => {
          console.log('Estudio realizado actualizado', estudioRealizado);
          this.router.navigate(['/estudios-realizados']);
        },
        (error) => {
          console.error('Error al actualizar el estudio realizado', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/estudios-realizados']);
  }
}
