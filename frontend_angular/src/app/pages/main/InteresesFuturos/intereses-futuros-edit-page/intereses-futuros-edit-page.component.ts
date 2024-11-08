import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { InteresesFuturos, InteresesFuturosService } from '../../../../services/intereses-futuros.service';
import { Docente, DocenteService } from '../../../../services/docente.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-intereses-futuros-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './intereses-futuros-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [InteresesFuturosService, DocenteService]
})
export class InteresesFuturosEditPageComponent {
  interesesFuturosForm: FormGroup;
  interesesFuturosId: number = 0;

  docenteId: number = 0;

  constructor(
    private interesesFuturosService: InteresesFuturosService,
    private docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.interesesFuturosForm = this.formBuilder.group({
      docente: ['', Validators.required],
      termino_clave: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.interesesFuturosId = Number(this.route.snapshot.paramMap.get('id'));

    this.interesesFuturosService.getInteresesFuturosById(this.interesesFuturosId).subscribe(
      (interesesFuturos: InteresesFuturos) => {
        this.docenteId = interesesFuturos.docente;

        this.interesesFuturosForm.patchValue({
          docente: interesesFuturos.docente,
          termino_clave: interesesFuturos.termino_clave
        });

        this.docenteService.getDocenteById(this.docenteId).subscribe(
          (docente: Docente) => {
            this.interesesFuturosForm.patchValue({
              docente: docente.nombres + ' ' + docente.apellidos,
            });
          },
          (error) => {
            console.error('Error al obtener el docente', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener los intereses futuros', error);
      }
    );
  }

  onSubmit(): void {

    
    this.interesesFuturosForm.value.docente = this.docenteId;

    if (this.interesesFuturosForm.valid) {
      const interesesFuturosActualizados: InteresesFuturos = {
        id: this.interesesFuturosId,
        ...this.interesesFuturosForm.value
      };

      this.interesesFuturosService.updateInteresesFuturos(this.interesesFuturosId, interesesFuturosActualizados).subscribe(
        (interesesFuturos: InteresesFuturos) => {
          console.log('Intereses futuros actualizados', interesesFuturos);
          this.router.navigate(['/app/intereses-futuros']);
        },
        (error) => {
          console.error('Error al actualizar los intereses futuros', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/intereses-futuros']);
  }
}
