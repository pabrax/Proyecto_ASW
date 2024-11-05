import { Routes } from '@angular/router';

// reconocimiento components
import { ReconocimientoPageComponent } from '../pages/main/Reconocimiento/reconocimiento-page/reconocimiento-page.component';
import { ReconocimientoCreatePageComponent } from '../pages/main/Reconocimiento/reconocimiento-create-page/reconocimiento-create-page.component';
import { ReconocimientoEditPageComponent } from '../pages/main/Reconocimiento/reconocimiento-edit-page/reconocimiento-edit-page.component';
import { authGuard } from '../services/auth.guard';

export const ReconocimientoRoutes: Routes = [
  // reconocimiento routes
  { path: 'app/reconocimiento', component: ReconocimientoPageComponent, canActivate: [authGuard] },
  {
    path: 'app/reconocimiento/create',
    component: ReconocimientoCreatePageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'app/reconocimiento/edit/:id',
    component: ReconocimientoEditPageComponent, 
    canActivate: [authGuard]
  },
];
