import { Routes } from '@angular/router';
// docente components
import { DocentePageComponent } from '../pages/main/Docente/docente-page/docente-page.component';
import { DocenteCreatePageComponent } from '../pages/main/Docente/docente-create-page/docente-create-page.component';
import { DocenteEditPageComponent } from '../pages/main/Docente/docente-edit-page/docente-edit-page.component';
import { authGuard } from '../services/auth.guard';

export const DocenteRoutes: Routes = [
    // Docente
    
    {path: 'app/docente', component: DocentePageComponent, canActivate: [authGuard]},
    {path: 'app/docente/create', component: DocenteCreatePageComponent, canActivate: [authGuard]},
    {path: 'app/docente/edit/:id', component: DocenteEditPageComponent, canActivate: [authGuard]},
];