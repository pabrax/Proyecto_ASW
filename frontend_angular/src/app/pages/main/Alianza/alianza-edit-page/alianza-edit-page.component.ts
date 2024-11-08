import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// clases

import { Formater } from '../../../../classes/formater';

// service

import { Alianza, AlianzaService } from '../../../../services/alianza.service';
import  { Aliado, AliadoService} from '../../../../services/aliado.service';
import { Docente, DocenteService } from '../../../../services/docente.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';


@Component({
  selector: 'app-alianza-edit-page',
  standalone: true,
  imports: [ AplicationHeaderComponent, AplicationNavbarComponent, CommonModule, HttpClientModule, ReactiveFormsModule ],
  templateUrl: './alianza-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [ AlianzaService, AliadoService, DocenteService ]
})
export class AlianzaEditPageComponent {

  alianzaForm: FormGroup;
  alianzaId: number = 0;  // Para almacenar el ID de la alianza, inicializado a 0

  aliadoId: number = 0;
  docenteId: number = 0;

  constructor(
    private alianzaService: AlianzaService,
    private aliadoService: AliadoService,
    private docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.alianzaForm = this.formBuilder.group({
      aliado: ['', Validators.required],
      departamento: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la alianza desde los parámetros de la ruta
    this.alianzaId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos de la alianza usando el ID
    this.alianzaService.getAlianzaById(this.alianzaId).subscribe(
      (alianza: Alianza) => {
        
        
        this.aliadoId = alianza.aliado;
        this.docenteId = alianza.docente;
        
        
        alianza.fecha_inicio = Formater.formatDate(alianza.fecha_inicio);
        alianza.fecha_fin = Formater.formatDate(alianza.fecha_fin);

        // Rellenar el formulario con los datos de la alianza existente
        this.alianzaForm.patchValue({
          departamento: alianza.departamento,
          fecha_inicio: alianza.fecha_inicio,
          fecha_fin: alianza.fecha_fin,
        });

        this.aliadoService.getAliadoByNit(this.aliadoId).subscribe(
          (aliado: Aliado) => {
            this.alianzaForm.patchValue({
              aliado: aliado.nombre_contacto,
            });
          },
          (error) => {
            console.error('Error al obtener el docente', error);
          }
        );

        this.docenteService.getDocenteById(this.docenteId).subscribe(
          (docente: Docente) => {
            this.alianzaForm.patchValue({
              docente: docente.nombres + ' ' + docente.apellidos,
            });
          },
          (error) => {
            console.error('Error al obtener el docente', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener la alianza', error);
      }
    );
  }

  // updateAlianza
  onSubmit(): void {

    this.alianzaForm.value.aliado = this.aliadoId;
    this.alianzaForm.value.docente = this.docenteId;

    if (this.alianzaForm.valid) {
      const alianzaActualizada: Alianza = {
        ...this.alianzaForm.value
      };
      this.alianzaService.updateAlianza(this.alianzaId, alianzaActualizada).subscribe(
        () => {
          this.router.navigate(['/app/alianza']);
        },
        (error) => {
          console.error('Error al actualizar la alianza', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/alianza']);
  }
}
