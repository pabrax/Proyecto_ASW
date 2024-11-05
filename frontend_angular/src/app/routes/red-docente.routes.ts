import { Routes } from '@angular/router';
// red-docente components
import { RedDocentePageComponent } from '../pages/main/RedDocente/red-docente-page/red-docente-page.component';
import { RedDocenteCreatePageComponent } from '../pages/main/RedDocente/red-docente-create-page/red-docente-create-page.component';
import { RedDocenteEditPageComponent } from '../pages/main/RedDocente/red-docente-edit-page/red-docente-edit-page.component';
import { authGuard } from '../services/auth.guard';

export const RedDocenteRoutes: Routes = [
    // red-docente routes
    {path: 'app/red-docente', component: RedDocentePageComponent, canActivate: [authGuard]},
    {path: 'app/red-docente/create', component: RedDocenteCreatePageComponent, canActivate: [authGuard]},
    {path: 'app/red-docente/edit/:id', component: RedDocenteEditPageComponent, canActivate: [authGuard]},
];