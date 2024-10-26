import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { BecaService, Beca } from '../beca.service';

// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-beca-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './beca-create-page.component.html',
  styleUrl: './beca-create-page.component.css',
  providers: [BecaService]
})
export class BecaCreatePageComponent {

  becaForm: FormGroup;
  beca: Beca = {
    estudios: 0,
    tipo: '',
    institucion: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date()
  };

  constructor(
    private becaService: BecaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.becaForm = this.formBuilder.group({
      estudios: ['', Validators.required],
      tipo: ['', Validators.required],
      institucion: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required]
    });
  }

  createBeca(): void {
    this.becaService.createBeca(this.beca).subscribe(
      (data) => {
        console.log('Beca creada', data);
      },
      (error) => {
        console.error('Error al crear la beca', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.becaForm.valid) {
      this.becaService.createBeca(this.beca).subscribe(
        (data) => {
          console.log('Beca creada', data);
        },
        (error) => {
          console.error('Error al crear la beca', error);
        }
      );
    }
  }
}
