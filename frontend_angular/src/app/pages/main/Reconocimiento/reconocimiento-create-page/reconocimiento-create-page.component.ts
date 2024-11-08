import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// service
import { Reconocimiento, ReconocimientoService } from '../../../../services/reconocimiento.service';
import { DocenteService, Docente } from '../../../../services/docente.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';


@Component({
  selector: 'app-reconocimiento-create-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './reconocimiento-create-page.component.html',
  styleUrl: '../../../styles/create-page.css',
  providers: [ReconocimientoService, DocenteService]
})
export class ReconocimientoCreatePageComponent {

  reconocimientoForm: FormGroup;

  reconocimiento: Reconocimiento = {
    tipo: '',
    fecha: '',
    institucion: '',
    nombre: '',
    ambito: '',
    docente: 0
  };

  docentes: Docente[] = [];

  constructor(
    private reconocimientoService: ReconocimientoService,
    private docenteService: DocenteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.reconocimientoForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      institucion: ['', Validators.required],
      nombre: ['', Validators.required],
      ambito: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  // Inicializa el componente y carga los servicios de Docente
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

  createReconocimiento(): void {
    this.reconocimientoService.createReconocimiento(this.reconocimiento).subscribe(
      (data) => {
        console.log('Reconocimiento creado', data);
        this.router.navigate(['/app/reconocimiento']);
      },
      (error) => {
        console.error('Error al crear el reconocimiento', error);
      }
    );
  }

  // Método para enviar los datos del formulario
  onSubmit(): void {
    if (this.reconocimientoForm.valid) {
      // Asigna los valores del formulario al objeto reconocimiento
      this.reconocimiento.tipo = this.reconocimientoForm.value.tipo;
      this.reconocimiento.fecha = this.reconocimientoForm.value.fecha;
      this.reconocimiento.institucion = this.reconocimientoForm.value.institucion;
      this.reconocimiento.nombre = this.reconocimientoForm.value.nombre;
      this.reconocimiento.ambito = this.reconocimientoForm.value.ambito;
      this.reconocimiento.docente = this.reconocimientoForm.value.docente;

      this.createReconocimiento();
    }
  }
}
