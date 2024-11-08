import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { ApoyoProfesoralService, ApoyoProfesoral } from '../../../../services/apoyo-profesoral.service';
import { EstudiosRealizados, EstudiosRealizadosService } from '../../../../services/estudios-realizados.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';


@Component({
  selector: 'app-apoyo-profesoral-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './apoyo-profesoral-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [ApoyoProfesoralService, EstudiosRealizadosService]
})
export class ApoyoProfesoralCreatePageComponent {

  apoyoProfesoralForm: FormGroup;

  apoyoProfesoral: ApoyoProfesoral = {
    estudios: 0,
    con_apoyo: false,
    institucion: '',
    tipo: ''
  };

  estudiosRealizados: EstudiosRealizados[] = [];

  constructor(
    private apoyoProfesoralService: ApoyoProfesoralService,
    private estudiosRealizadosService: EstudiosRealizadosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.apoyoProfesoralForm = this.formBuilder.group({
      estudios: ['', Validators.required],
      con_apoyo: [''],
      institucion: ['', Validators.required],
      tipo: ['', Validators.required]
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

  createApoyoProfesoral(): void {
    this.apoyoProfesoralService.createApoyoProfesoral(this.apoyoProfesoral).subscribe(
      (data) => {
        console.log('Apoyo Profesoral creado', data);
        this.router.navigate(['/app/apoyo-profesoral']);
      },
      (error) => {
        console.error('Error al crear el apoyo profesoral', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    console.log(this.apoyoProfesoralForm.value);
    if (this.apoyoProfesoralForm.valid) {
      this.apoyoProfesoral.estudios = this.apoyoProfesoralForm.value.estudios;
      this.apoyoProfesoral.con_apoyo = this.apoyoProfesoralForm.value.con_apoyo;
      this.apoyoProfesoral.institucion = this.apoyoProfesoralForm.value.institucion;
      this.apoyoProfesoral.tipo = this.apoyoProfesoralForm.value.tipo;
      this.createApoyoProfesoral();
    }
  }
}
