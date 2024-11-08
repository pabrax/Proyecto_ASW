import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service
import { ReconocimientoService, Reconocimiento } from '../../../../services/reconocimiento.service';
import { DocenteService, Docente } from '../../../../services/docente.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';
import { Formater } from '../../../../classes/formater';


@Component({
  selector: 'app-reconocimiento-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './reconocimiento-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [ReconocimientoService, DocenteService],
})
export class ReconocimientoEditPageComponent {

  reconocimientoForm: FormGroup;
  reconocimientoId: number = 0;  // Para almacenar el ID del reconocimiento, inicializado a 0

  docenteId: number = 0; // Para almacenar el ID del Docente, inicializado a 0

  constructor(
    private reconocimientoService: ReconocimientoService,
    private docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.reconocimientoForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      institucion: ['', Validators.required],
      nombre: ['', Validators.required],
      ambito: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID del reconocimiento desde los parámetros de la ruta
    this.reconocimientoId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos del reconocimiento usando el ID
    this.reconocimientoService.getReconocimientoById(this.reconocimientoId).subscribe(
      (reconocimiento: Reconocimiento) => {
        reconocimiento.fecha = Formater.formatDate(reconocimiento.fecha);
        // Rellenar el formulario con los datos del reconocimiento existente
        this.docenteId = reconocimiento.docente;

        this.reconocimientoForm.patchValue({
          tipo: reconocimiento.tipo,
          fecha: reconocimiento.fecha,
          institucion: reconocimiento.institucion,
          nombre: reconocimiento.nombre,
          ambito: reconocimiento.ambito,
        });

        // Cargar los datos del docente usando el ID actualizado
        this.docenteService.getDocenteById(this.docenteId).subscribe(
          (docente: Docente) => {
            // Rellenar el formulario con los datos del docente existente
            this.reconocimientoForm.patchValue({
              docente: docente.nombres + ' ' + docente.apellidos,
            });
          },
          (error) => {
            console.error('Error al obtener el docente', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener el reconocimiento', error);
      }
    );
  }

  // updateReconocimiento

  onSubmit(): void {

    this.reconocimientoForm.value.docente = this.docenteId;

    if (this.reconocimientoForm.valid) {
      const reconocimientoActualizado: Reconocimiento = {
        ...this.reconocimientoForm.value
      };

      this.reconocimientoService.updateReconocimiento(this.reconocimientoId, reconocimientoActualizado).subscribe(
        (reconocimiento: Reconocimiento) => {
          this.router.navigate(['/app/reconocimiento']);
        },
        (error) => {
          console.error('Error al actualizar el reconocimiento', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/reconocimiento']);
  }
}
