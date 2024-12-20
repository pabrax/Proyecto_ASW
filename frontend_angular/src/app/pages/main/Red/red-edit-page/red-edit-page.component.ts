import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service
import { RedService, Red } from '../../../../services/red.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';


@Component({
  selector: 'app-red-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './red-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [RedService]
})
export class RedEditPageComponent {
  redForm: FormGroup;
  redId: number = 0;  // Para almacenar el ID de la red, inicializado a 0

  constructor(
    private redService: RedService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.redForm = this.formBuilder.group({
      idr: ['', Validators.required],
      nombre: ['', Validators.required],
      url: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la red desde los parámetros de la ruta
    this.redId = Number(this.route.snapshot.paramMap.get('idr'));

    // Cargar los datos de la red usando el ID
    this.redService.getRedById(this.redId).subscribe(
      (red: Red) => {
        // Rellenar el formulario con los datos de la red existente
        this.redForm.patchValue({
          idr: red.idr,
          nombre: red.nombre,
          url: red.url,
          pais: red.pais
        });
      },
      (error) => {
        console.error('Error al obtener la red', error);
      }
    );
  }

  // Método para actualizar la red
  onSubmit(): void {
    if (this.redForm.valid) {
      const redActualizada: Red = {
        idr: this.redId,
        ...this.redForm.value
      };
      // Llamar al servicio de actualización con los datos del formulario
      this.redService.updateRed(this.redId, redActualizada).subscribe(
        () => {
          console.log('Red actualizada exitosamente');
          this.router.navigate(['/app/red']);  // Redirigir a la lista de redes
        },
        (error) => {
          console.error('Error al actualizar la red', error);
        }
      );
    }
  }

  // Método para cancelar la edición y regresar a la lista
  onCancel(): void {
    this.router.navigate(['/app/red']);
  }
}


