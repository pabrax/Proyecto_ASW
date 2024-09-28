import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { Beca, BecaService } from '../beca.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-beca-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './beca-edit-page.component.html',
  styleUrl: './beca-edit-page.component.css',
  providers: [BecaService]
})
export class BecaEditPageComponent {

  becaForm: FormGroup;
  becaId: number = 0;  // Para almacenar el ID de la beca, inicializado a 0

  constructor(
    private becaService: BecaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.becaForm = this.formBuilder.group({
      estudios: ['', Validators.required],
      tipo: ['', Validators.required],
      institucion: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la beca desde los parámetros de la ruta
    this.becaId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos de la beca usando el ID
    this.becaService.getBecaById(this.becaId).subscribe(
      (beca: Beca) => {
        // Rellenar el formulario con los datos de la beca existente
        this.becaForm.patchValue({
          estudios: beca.estudios,
          tipo: beca.tipo,
          institucion: beca.institucion,
          fecha_inicio: beca.fecha_inicio,
          fecha_fin: beca.fecha_fin
        });
      },
      (error) => {
        console.error('Error al obtener la beca', error);
      }
    );
  }

  // updateBeca
  onSubmit(): void {
    if (this.becaForm.valid) {
      const becaActualizada: Beca = {
        id: this.becaId,
        ...this.becaForm.value
      };

      this.becaService.updateBeca(this.becaId, becaActualizada).subscribe(
        (beca: Beca) => {
          console.log('Beca actualizada', beca);
          this.router.navigate(['/beca']);
        },
        (error) => {
          console.error('Error al actualizar la beca', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/beca']);
  }
}
