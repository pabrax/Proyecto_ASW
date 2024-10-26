import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { Alianza, AlianzaService } from '../alianza.service';

// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';
@Component({
  selector: 'app-alianza-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './alianza-create-page.component.html',
  styleUrl: './alianza-create-page.component.css',
  providers: [AlianzaService]
})
export class AlianzaCreatePageComponent {
  alianzaForm: FormGroup;
  alianza: Alianza = {
    aliado: 0,
    departamento: 0,
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    docente: 0
  };

  constructor(
    private alianzaService: AlianzaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.alianzaForm = this.formBuilder.group({
      aliado: ['', Validators.required],
      departamento: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  createAlianza(): void {
    this.alianzaService.createAlianza(this.alianza).subscribe({
      next: (data) => {
        console.log('Alianza creada', data);
        this.router.navigate(['/app/alianza']);
      },
      error: (error) => {
        console.error('Error al crear la alianza', error);
      }
    });
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.alianzaForm.valid) {
      this.alianza.aliado = this.alianzaForm.value.aliado;
      this.alianza.departamento = this.alianzaForm.value.departamento;
      this.alianza.fecha_inicio = new Date(this.alianzaForm.value.fecha_inicio);
      this.alianza.fecha_fin = new Date(this.alianzaForm.value.fecha_fin);
      this.alianza.docente = this.alianzaForm.value.docente;
      this.createAlianza();
    }
  }
}
