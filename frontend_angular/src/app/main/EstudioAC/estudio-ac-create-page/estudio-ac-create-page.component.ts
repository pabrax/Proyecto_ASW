
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service

import { EstudioAc, EstudioAcService } from '../estudio-ac.service';

// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-estudio-ac-create-page',
  standalone: true,
  imports: [ AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './estudio-ac-create-page.component.html',
  styleUrl: './estudio-ac-create-page.component.css',
  providers: [EstudioAcService]
})
export class EstudioAcCreatePageComponent {
  estudioAcForm: FormGroup;
  estudioAc: EstudioAc = {
    estudio_id: 0,
    area_conocimiento_id: 0
  };

  constructor(
    private estudioAcService: EstudioAcService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.estudioAcForm = this.formBuilder.group({
      estudio_id: ['', Validators.required],
      area_conocimiento_id: ['', Validators.required]
    });
  }

  createEstudioAc(): void {
    this.estudioAcService.createEstudio(this.estudioAc).subscribe(
      (data) => {
        console.log('Estudio creado', data);
      },
      (error) => {
        console.error('Error al crear el estudio', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.estudioAcForm.valid) {
      this.estudioAcService.createEstudio(this.estudioAc).subscribe(
        (data) => {
          console.log('Estudio creado', data);
        },
        (error) => {
          console.error('Error al crear el estudio', error);
        }
      );
    }
  }
}
