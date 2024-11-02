import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// 

import { Formater } from '../../../../classes/formater';

// service

import { EstudiosRealizados, EstudiosRealizadosService } from '../../../../services/estudios-realizados.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-estudios-realizados-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './estudios-realizados-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
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
      id: [{ value: null, disabled: true }],
      titulo: ['', Validators.required],
      universidad: ['', Validators.required],
      fecha: ['', Validators.required],
      tipo: ['', Validators.required],
      ciudad: ['', Validators.required],
      docente: ['', Validators.required],
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

        estudioRealizado.fecha = Formater.formatDate(estudioRealizado.fecha);

        this.estudiosRealizadosForm.patchValue({
          id: estudioRealizado.id,
          titulo: estudioRealizado.titulo,
          universidad: estudioRealizado.universidad,
          fecha: estudioRealizado.fecha,
          tipo: estudioRealizado.tipo,
          ciudad: estudioRealizado.ciudad,
          docente: estudioRealizado.docente,
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
          this.router.navigate(['/app/estudios-realizados']);
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
