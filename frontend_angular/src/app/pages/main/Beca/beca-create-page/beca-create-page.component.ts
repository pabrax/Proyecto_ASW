import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { BecaService, Beca } from '../../../../services/beca.service';
import { EstudiosRealizados, EstudiosRealizadosService } from '../../../../services/estudios-realizados.service';


// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-beca-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './beca-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [BecaService, EstudiosRealizadosService]
})
export class BecaCreatePageComponent {

  becaForm: FormGroup;
  beca: Beca = {
    estudios: 0,
    tipo: '',
    institucion: '',
    fecha_inicio: '',
    fecha_fin: ''
  };

  estudiosRealizados: EstudiosRealizados[] = [];

  constructor(
    private becaService: BecaService,
    private estudiosRealizadosService: EstudiosRealizadosService,
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

  createBeca(): void {
    this.becaService.createBeca(this.beca).subscribe({
      next: (data) => {
        console.log('Beca creada', data);
        this.router.navigate(['/app/beca']);
      },
      error: (error) => {
        console.error('Error al crear la beca', error);
      }
    });
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.becaForm.valid) {
      this.beca.estudios = this.becaForm.value.estudios;
      this.beca.tipo = this.becaForm.value.tipo;
      this.beca.institucion = this.becaForm.value.institucion;
      this.beca.fecha_inicio = this.becaForm.value.fecha_inicio;
      this.beca.fecha_fin = this.becaForm.value.fecha_fin;
      this.createBeca();
    }
  }
}
