import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { InteresesFuturos, InteresesFuturosService } from '../intereses-futuros.service';

// shared components
import { AplicationNavbarComponent } from '../../../shared/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../shared/aplication-header/aplication-header.component';

@Component({
  selector: 'app-intereses-futuros-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './intereses-futuros-edit-page.component.html',
  styleUrl: './intereses-futuros-edit-page.component.css',
  providers: [InteresesFuturosService]
})
export class InteresesFuturosEditPageComponent {
  interesesFuturosForm: FormGroup;
  interesesFuturosId: number = 0;

  constructor(
    private interesesFuturosService: InteresesFuturosService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.interesesFuturosForm = this.formBuilder.group({
      docente_id: ['', Validators.required],
      termino_clave: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.interesesFuturosId = Number(this.route.snapshot.paramMap.get('id'));

    this.interesesFuturosService.getInteresesFuturosById(this.interesesFuturosId).subscribe(
      (interesesFuturos: InteresesFuturos) => {
        this.interesesFuturosForm.patchValue({
          docente_id: interesesFuturos.docente_id,
          termino_clave: interesesFuturos.termino_clave
        });
      },
      (error) => {
        console.error('Error al obtener los intereses futuros', error);
      }
    );
  }

  onSubmit(): void {
    if (this.interesesFuturosForm.valid) {
      const interesesFuturosActualizados: InteresesFuturos = {
        id: this.interesesFuturosId,
        ...this.interesesFuturosForm.value
      };

      this.interesesFuturosService.updateInteresesFuturos(this.interesesFuturosId, interesesFuturosActualizados).subscribe(
        (interesesFuturos: InteresesFuturos) => {
          console.log('Intereses futuros actualizados', interesesFuturos);
          this.router.navigate(['/intereses-futuros']);
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
