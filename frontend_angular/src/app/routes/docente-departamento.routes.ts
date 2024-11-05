import { Routes } from '@angular/router';

// docente-departamento components
import { DocenteDepartamentoPageComponent } from '../pages/main/DocenteDepartamento/docente-departamento-page/docente-departamento-page.component';
import { DocenteDepartamentoCreatePageComponent } from '../pages/main/DocenteDepartamento/docente-departamento-create-page/docente-departamento-create-page.component';
import { DocenteDepartamentoEditPageComponent } from '../pages/main/DocenteDepartamento/docente-departamento-edit-page/docente-departamento-edit-page.component';
import { authGuard } from '../services/auth.guard';

export const DocenteDepartamentoRoutes: Routes = [
  // docente-departamento routes
  {
    path: 'app/docente-departamento',
    component: DocenteDepartamentoPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'app/docente-departamento/create',
    component: DocenteDepartamentoCreatePageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'app/docente-departamento/edit/:id',
    component: DocenteDepartamentoEditPageComponent,
    canActivate: [authGuard]
  },
];
