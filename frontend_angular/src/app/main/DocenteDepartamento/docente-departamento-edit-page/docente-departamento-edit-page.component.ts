import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { DocenteDepartamento, DocenteDepartamentoService } from '../docente-departamento.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-docente-departamento-edit-page',
  standalone: true,
  imports: [ AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './docente-departamento-edit-page.component.html',
  styleUrl: './docente-departamento-edit-page.component.css',
  providers: [DocenteDepartamentoService]
})
export class DocenteDepartamentoEditPageComponent {
  docenteDepartamentoForm: FormGroup;
  docenteDepartamentoId: number = 0;

  constructor(
    private docenteDepartamentoService: DocenteDepartamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.docenteDepartamentoForm = this.formBuilder.group({
      docente_id: ['', Validators.required],
      departamento_id: ['', Validators.required],
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
        this.docenteDepartamentoForm.patchValue({
          docente_id: docenteDepartamento.docente_id,
          departamento_id: docenteDepartamento.departamento_id,
          dedicacion: docenteDepartamento.dedicacion,
          modalidad: docenteDepartamento.modalidad,
          fecha_ingreso: docenteDepartamento.fecha_ingreso,
          fecha_salida: docenteDepartamento.fecha_salida
        });
      },
      (error) => {
        console.error('Error al obtener el docente departamento', error);
      }
    );
  }

  onSubmit(): void {
    if (this.docenteDepartamentoForm.valid) {
      const docenteDepartamentoActualizado: DocenteDepartamento = {
        id: this.docenteDepartamentoId,
        ...this.docenteDepartamentoForm.value
      };

      this.docenteDepartamentoService.updateDocenteDepartamento(this.docenteDepartamentoId, docenteDepartamentoActualizado).subscribe(
        (docenteDepartamento: DocenteDepartamento) => {
          console.log('Docente departamento actualizado', docenteDepartamento);
          this.router.navigate(['/docente-departamento']);
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
