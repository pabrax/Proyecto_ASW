import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { Reconocimiento, ReconocimientoService } from '../reconocimiento.service';

// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';


@Component({
  selector: 'app-reconocimiento-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './reconocimiento-create-page.component.html',
  styleUrl: './reconocimiento-create-page.component.css',
  providers: [ReconocimientoService]
})
export class ReconocimientoCreatePageComponent {

  // export interface Reconocimiento {
  //   id: number;
  //   tipo: string;
  //   fecha: Date;
  //   institucion: string;
  //   ambito: string;
  //   docente: number;
  // }

  reconocimientoForm: FormGroup;

  reconocimiento: Reconocimiento = {
    id: 0,
    tipo: '',
    fecha: new Date(),
    institucion: '',
    ambito: '',
    docente: 0
  };

  constructor(
    private reconocimientoService: ReconocimientoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.reconocimientoForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      institucion: ['', Validators.required],
      ambito: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  createReconocimiento(): void {
    this.reconocimientoService.createReconocimiento(this.reconocimiento).subscribe(
      (data) => {
        console.log('Reconocimiento creado', data);
      },
      (error) => {
        console.error('Error al crear el reconocimiento', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.reconocimientoForm.valid) {
      this.reconocimientoService.createReconocimiento(this.reconocimiento).subscribe(
        (data) => {
          console.log('Reconocimiento creado', data);
        },
        (error) => {
          console.error('Error al crear el reconocimiento', error);
        }
      );
    }
  }
}
