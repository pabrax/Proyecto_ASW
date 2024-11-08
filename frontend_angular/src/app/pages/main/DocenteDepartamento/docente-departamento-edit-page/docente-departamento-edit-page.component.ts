import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// clases
import { Formater } from '../../../../classes/formater';


// service

import { DocenteDepartamento, DocenteDepartamentoService } from '../../../../services/docente-departamento.service';
import { Docente, DocenteService } from '../../../../services/docente.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-docente-departamento-edit-page',
  standalone: true,
  imports: [ AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './docente-departamento-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [DocenteDepartamentoService, DocenteService]
})
export class DocenteDepartamentoEditPageComponent {
  docenteDepartamentoForm: FormGroup;
  docenteDepartamentoId: number = 0;

  docenteId: number = 0;

  constructor(
    private docenteDepartamentoService: DocenteDepartamentoService,
    private docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.docenteDepartamentoForm = this.formBuilder.group({
      docente: ['', Validators.required],
      departamento: ['', Validators.required],
      dedicacion: ['', Validators.required],
      modalidad: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_salida: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.docenteDepartamentoId = Number(this.route.snapshot.paramMap.get('id'));

    this.docenteDepartamentoService.getDocenteDepartamentoById(this.docenteDepartamentoId).subscribe(

      (docenteDepartamento: DocenteDepartamento) => {

        this.docenteId = docenteDepartamento.docente;

        docenteDepartamento.fecha_ingreso = Formater.formatDate(docenteDepartamento.fecha_ingreso);
        docenteDepartamento.fecha_salida = Formater.formatDate(docenteDepartamento.fecha_salida);

        this.docenteDepartamentoForm.patchValue({
          departamento: docenteDepartamento.departamento,
          dedicacion: docenteDepartamento.dedicacion,
          modalidad: docenteDepartamento.modalidad,
          fecha_ingreso: docenteDepartamento.fecha_ingreso,
          fecha_salida: docenteDepartamento.fecha_salida
        });

        this.docenteService.getDocenteById(this.docenteId).subscribe(
          (docente: Docente) => {
            this.docenteDepartamentoForm.patchValue({
              docente: docente.nombres + ' ' + docente.apellidos,
            });
          },
          (error) => {
            console.error('Error al obtener el docente', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener el docente departamento', error);
      }
    );
  }

  onSubmit(): void {
    this.docenteDepartamentoForm.value.docente = this.docenteId;
    if (this.docenteDepartamentoForm.valid) {
      const docenteDepartamentoActualizado: DocenteDepartamento = {
        ...this.docenteDepartamentoForm.value
      };

      this.docenteDepartamentoService.updateDocenteDepartamento(this.docenteDepartamentoId, docenteDepartamentoActualizado).subscribe(
        (docenteDepartamento: DocenteDepartamento) => {
          console.log('Docente departamento actualizado', docenteDepartamento);
          this.router.navigate(['/app/docente-departamento']);
        },
        (error) => {
          console.error('Error al actualizar el docente departamento', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/docente-departamento']);
  }
}
