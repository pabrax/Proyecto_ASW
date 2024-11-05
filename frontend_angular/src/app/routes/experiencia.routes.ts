import { Routes } from '@angular/router';

// experiencia components
import { ExperienciaPageComponent } from '../pages/main/Experiencia/experiencia-page/experiencia-page.component';
import { ExperienciaCreatePageComponent } from '../pages/main/Experiencia/experiencia-create-page/experiencia-create-page.component';
import { ExperienciaEditPageComponent } from '../pages/main/Experiencia/experiencia-edit-page/experiencia-edit-page.component';
import { authGuard } from '../services/auth.guard';

export const ExperienciaRoutes: Routes = [
  // experiencia
  { path: 'app/experiencia', component: ExperienciaPageComponent, canActivate: [authGuard] },
  { path: 'app/experiencia/create', component: ExperienciaCreatePageComponent, canActivate: [authGuard] },
  { path: 'app/experiencia/edit/:id', component: ExperienciaEditPageComponent, canActivate: [authGuard] },
];
