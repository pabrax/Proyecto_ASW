import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// service
import { AliadoService, Aliado } from '../../../../services/aliado.service';

// shared
import { AplicationNavbarComponent } from "../../../../components/aplication-navbar/aplication-navbar.component";
import { AplicationHeaderComponent } from '../../../../components/aplication-header/aplication-header.component';


@Component({
  selector: 'app-aliado-edit-page',
  standalone: true,
  imports: [AplicationNavbarComponent, AplicationHeaderComponent, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './aliado-edit-page.component.html',
  styleUrl: '../../../styles/edit-page.css',
  providers: [AliadoService]
})
export class AliadoEditPageComponent {

  aliadoForm: FormGroup;
  aliadoId: number = 0;  // Para almacenar el ID del aliado, inicializado a 0

  constructor(
    private aliadoService: AliadoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario vacío
    this.aliadoForm = this.formBuilder.group({
      nit: ['', Validators.required],
      razon_social: ['', Validators.required],
      nombre_contacto: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID del aliado desde los parámetros de la ruta
    this.aliadoId = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar los datos del aliado usando el ID
    this.aliadoService.getAliadoByNit(this.aliadoId).subscribe(
      (aliado: Aliado) => {
        // Rellenar el formulario con los datos del aliado existente
        this.aliadoForm.patchValue({
          nit: aliado.nit,
          razon_social: aliado.razon_social,
          nombre_contacto: aliado.nombre_contacto,
          correo: aliado.correo,
          telefono: aliado.telefono,
          ciudad: aliado.ciudad
        });
      },
      (error) => {
        console.error('Error al obtener el aliado', error);
      }
    );
  }

  onSubmit(): void {
    if (this.aliadoForm.valid) {
      const aliadoActualizado: Aliado = {
        ...this.aliadoForm.value
      };
      this.aliadoService.updateAliado(this.aliadoId, aliadoActualizado).subscribe(
        () => {
          console.log('Aliado actualizado exitosamente');
          this.router.navigate(['/app/aliado']);  // Redirigir a la lista de aliados
        },
        (error) => {
          console.error('Error al actualizar el aliado', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/app/aliado']);
  }
}
