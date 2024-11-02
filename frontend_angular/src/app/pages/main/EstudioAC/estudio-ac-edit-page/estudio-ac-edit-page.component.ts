import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service

import { EstudioAc, EstudioAcService } from '../../../../services/estudio-ac.service';

// shared components
import { AplicationNavbarComponent } from '../../../../components/aplication-navbar/aplication-navbar.component';
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';

@Component({
  selector: 'app-estudio-ac-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './estudio-ac-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [EstudioAcService]
})
export class EstudioAcEditPageComponent {
  estudioAcForm: FormGroup;
  estudioAcId: number = 0;

  constructor(
    private estudioAcService: EstudioAcService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.estudioAcForm = this.formBuilder.group({
      estudio_id: ['', Validators.required],
      area_conocimiento_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.estudioAcId = Number(this.route.snapshot.paramMap.get('id'));

    this.estudioAcService.getEstudioById(this.estudioAcId).subscribe(
      (estudioAc: EstudioAc) => {
        this.estudioAcForm.patchValue({
          estudio_id: estudioAc.estudio,
          area_conocimiento_id: estudioAc.area_conocimiento_id
        });
      },
      (error) => {
        console.error('Error al obtener el estudio académico', error);
      }
    );
  }

  onSubmit(): void {
    if (this.estudioAcForm.valid) {
      const estudioAcActualizado: EstudioAc = {
        estudio_id: this.estudioAcId,
        ...this.estudioAcForm.value
      };

      this.estudioAcService.updateEstudio(this.estudioAcId, estudioAcActualizado).subscribe(
        (estudioAc: EstudioAc) => {
          console.log('Estudio académico actualizado', estudioAc);
          this.router.navigate(['/estudio-ac']);
        },
        (error) => {
          console.error('Error al actualizar el estudio académico', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/estudio-ac']);
  }
}