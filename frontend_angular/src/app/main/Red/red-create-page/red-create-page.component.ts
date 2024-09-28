import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { RedService, Red } from '../red.service';

// shared
import { AplicationNavbarComponent } from "../../../shared/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';


@Component({
  selector: 'app-red-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './red-create-page.component.html',
  styleUrl: './red-create-page.component.css',
  providers: [RedService]
})
export class RedCreatePageComponent {

  redForm: FormGroup;
  red: Red = {
    idr: 0,
    nombre: '',
    url: '',
    pais: ''
  };

  constructor(
    private redService: RedService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.redForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      url: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  createRed(): void {
    this.redService.createRed(this.red).subscribe(
      (data) => {
        console.log('Red creada', data);
      },
      (error) => {
        console.error('Error al crear la red', error);
      }
    );
  }


  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.redForm.valid) {
      this.redService.createRed(this.redForm.value).subscribe(
        () => {
          console.log('Red creada exitosamente');
          this.router.navigate(['/app/red']);  // Redirige a la lista después de crear
        },
        (error) => {
          console.error('Error al crear la red', error);
        }
      );
    }
  }
}
