import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { ExperienciaService, Experiencia } from '../../../../services/experiencia.service';
import { DocenteService, Docente } from '../../../../services/docente.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-experiencia-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './experiencia-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [ExperienciaService, DocenteService]
})
export class ExperienciaCreatePageComponent {

  experienciaForm: FormGroup;
  experiencia: Experiencia = {
    id: 0,
    nombre_cargo: '',
    institucion: '',
    tipo: '',
    fecha_inicio: '',
    fecha_fin: '',
    docente: 0
  };

  docentes: Docente[] = [];

  constructor(
    private experienciaService: ExperienciaService,
    private docenteService: DocenteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.experienciaForm = this.formBuilder.group({
      nombre_cargo: ['', Validators.required],
      institucion: ['', Validators.required],
      tipo: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      docente: ['', Validators.required]
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

  createExperiencia(): void {
    this.experienciaService.createExperiencia(this.experiencia).subscribe({
      next: (data) => {
        console.log('Experiencia creada', data);
        this.router.navigate(['/app/experiencia']);
      },
      error: (error) => {
        console.error('Error al crear la experiencia', error);
      }
    });
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    console.log(this.experienciaForm.value);
    
    if (this.experienciaForm.valid) {
      this.experiencia.id = this.experienciaForm.value.id;
      this.experiencia.nombre_cargo = this.experienciaForm.value.nombre_cargo;
      this.experiencia.institucion = this.experienciaForm.value.institucion;
      this.experiencia.tipo = this.experienciaForm.value.tipo;
      this.experiencia.fecha_inicio = this.experienciaForm.value.fecha_inicio;
      this.experiencia.fecha_fin = this.experienciaForm.value.fecha_fin;
      this.experiencia.docente = this.experienciaForm.value.docente;
      this.createExperiencia();
    }
  }
}
