import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { Alianza, AlianzaService } from '../../../../services/alianza.service';
import { DocenteService, Docente } from '../../../../services/docente.service';
import { AliadoService, Aliado } from '../../../../services/aliado.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';
@Component({
  selector: 'app-alianza-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './alianza-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [AlianzaService, DocenteService, AliadoService]
})
export class AlianzaCreatePageComponent {
  alianzaForm: FormGroup;
  alianza: Alianza = {
    aliado: 0,
    departamento: 0,
    fecha_inicio: '',
    fecha_fin: '',
    docente: 0
  };

  aliados: Aliado[] = [];
  docentes: Docente[] = [];

  constructor(
    private alianzaService: AlianzaService,
    private aliadoService: AliadoService,
    private docenteService: DocenteService,
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

  ngOnInit(): void {
    this.aliadoService.getAliados().subscribe(
      (data) => {
        this.aliados = data;
      },
      (error) => {
        console.error('Error al cargar los aliados', error);
      }
    );

    this.docenteService.getDocentes().subscribe(
      (data) => {
        this.docentes = data;
      },
      (error) => {
        console.error('Error al cargar los docentes', error);
      }
    );
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
      this.alianza.fecha_inicio = this.alianzaForm.value.fecha_inicio;
      this.alianza.fecha_fin = this.alianzaForm.value.fecha_fin;
      this.alianza.docente = this.alianzaForm.value.docente;
      this.createAlianza();
    }
  }
}
