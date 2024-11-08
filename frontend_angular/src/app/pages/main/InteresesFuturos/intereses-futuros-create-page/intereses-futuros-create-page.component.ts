import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { InteresesFuturos, InteresesFuturosService } from '../../../../services/intereses-futuros.service';
import { DocenteService, Docente } from '../../../../services/docente.service';


// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';
@Component({
  selector: 'app-intereses-futuros-create-page',
  standalone: true,
  imports: [ AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './intereses-futuros-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [InteresesFuturosService, DocenteService]
})
export class InteresesFuturosCreatePageComponent {
  interesesFuturosForm: FormGroup;
  interesesFuturos: InteresesFuturos = {
    docente: 0,
    termino_clave: ''
  };

  docentes: Docente[] = [];

  constructor(
    private interesesFuturosService: InteresesFuturosService,
    private docenteService: DocenteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.interesesFuturosForm = this.formBuilder.group({
      docente: ['', Validators.required],
      termino_clave: ['', Validators.required]
    });
  }
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

  createInteresesFuturos(): void {
    this.interesesFuturosService.createInteresesFuturos(this.interesesFuturos).subscribe({
      next: (data) => {
        console.log('Intereses Futuros creado', data);
        this.router.navigate(['/app/intereses-futuros']);
      },
      error: (error) => {
        console.error('Error al crear los Intereses Futuros', error);
      }
    });
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.interesesFuturosForm.valid) {
      this.interesesFuturos.docente = this.interesesFuturosForm.value.docente;
      this.interesesFuturos.termino_clave = this.interesesFuturosForm.value.termino_clave;
      this.createInteresesFuturos();
    }
  }
}
