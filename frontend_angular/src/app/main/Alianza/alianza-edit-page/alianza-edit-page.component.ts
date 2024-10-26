import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { Alianza, AlianzaService } from '../alianza.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';


@Component({
  selector: 'app-alianza-edit-page',
  standalone: true,
  imports: [ AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule, ReactiveFormsModule ],
  templateUrl: './alianza-edit-page.component.html',
  styleUrl: './alianza-edit-page.component.css',
  providers: [ AlianzaService ]
})
export class AlianzaEditPageComponent {

  alianzaForm: FormGroup;
  alianzaId: number = 0;  // Para almacenar el ID de la alianza, inicializado a 0

  constructor(
    private alianzaService: AlianzaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.alianzaForm = this.formBuilder.group({
      aliado: ['', Validators.required],
      departamento: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la alianza desde los parámetros de la ruta
    this.alianzaId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos de la alianza usando el ID
    this.alianzaService.getAlianzaById(this.alianzaId).subscribe(
      (alianza: Alianza) => {
        // Rellenar el formulario con los datos de la alianza existente
        this.alianzaForm.patchValue({
          aliado_id: alianza.aliado,
          departamento: alianza.departamento,
          fecha_inicio: alianza.fecha_inicio,
          fecha_fin: alianza.fecha_fin,
          docente: alianza.docente
        });
      },
      (error) => {
        console.error('Error al obtener la alianza', error);
      }
    );
  }

  // updateAlianza
  onSubmit(): void {
    if (this.alianzaForm.valid) {
      const alianzaActualizada: Alianza = {
        aliado_id: this.alianzaId,
        ...this.alianzaForm.value
      };
      this.alianzaService.updateAlianza(this.alianzaId, alianzaActualizada).subscribe(
        () => {
          this.router.navigate(['/app/alianza']);
        },
        (error) => {
          console.error('Error al actualizar la alianza', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/alianza']);
  }
}
