import { Routes } from '@angular/router';

// experiencia components
import { ExperienciaPageComponent } from '../pages/main/Experiencia/experiencia-page/experiencia-page.component';
import { ExperienciaCreatePageComponent } from '../pages/main/Experiencia/experiencia-create-page/experiencia-create-page.component';
import { ExperienciaEditPageComponent } from '../pages/main/Experiencia/experiencia-edit-page/experiencia-edit-page.component';

export const ExperienciaRoutes: Routes = [
  // experiencia
  { path: 'app/experiencia', component: ExperienciaPageComponent },
  { path: 'app/experiencia/create', component: ExperienciaCreatePageComponent },
  { path: 'app/experiencia/edit/:id', component: ExperienciaEditPageComponent },
];
