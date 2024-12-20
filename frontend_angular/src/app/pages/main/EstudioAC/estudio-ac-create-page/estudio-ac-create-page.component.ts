
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { EstudioAc, EstudioAcService } from '../../../../services/estudio-ac.service';
import { EstudiosRealizados, EstudiosRealizadosService } from '../../../../services/estudios-realizados.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-estudio-ac-create-page',
  standalone: true,
  imports: [ AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './estudio-ac-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [EstudioAcService, EstudiosRealizadosService]
})
export class EstudioAcCreatePageComponent {
  estudioAcForm: FormGroup;
  estudioAc: EstudioAc = {
    estudio: 0,
    area_conocimiento: 0
  };

  estudiosRealizados: EstudiosRealizados[] = [];

  constructor(
    private estudioAcService: EstudioAcService,
    private estudiosRealizadosService: EstudiosRealizadosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.estudioAcForm = this.formBuilder.group({
      estudio: ['', Validators.required],
      area_conocimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.estudiosRealizadosService.getEstudiosRealizados().subscribe(
      (data) => {
        this.estudiosRealizados = data;
      },
      (error) => {
        console.error('Error al cargar los estudios realizados', error);
      }
    );
  }

  createEstudioAc(): void {
    this.estudioAcService.createEstudio(this.estudioAc).subscribe({
      next: (data) => {
        console.log('Estudio creado', data);
        this.router.navigate(['/app/estudio-ac']);
      },
      error: (error) => {
        console.error('Error al crear el estudio', error);
      }
    });
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.estudioAcForm.valid) {
      this.estudioAc.estudio = this.estudioAcForm.value.estudio;
      this.estudioAc.area_conocimiento = this.estudioAcForm.value.area_conocimiento;
      this.createEstudioAc();
    }
  }
}
