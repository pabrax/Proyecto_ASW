import { Routes } from '@angular/router';
// docente components
import { DocentePageComponent } from '../pages/main/Docente/docente-page/docente-page.component';
import { DocenteCreatePageComponent } from '../pages/main/Docente/docente-create-page/docente-create-page.component';
import { DocenteEditPageComponent } from '../pages/main/Docente/docente-edit-page/docente-edit-page.component';

export const DocenteRoutes: Routes = [
    // Docente
    
    {path: 'app/docente', component: DocentePageComponent},
    {path: 'app/docente/create', component: DocenteCreatePageComponent},
    {path: 'app/docente/edit/:id', component: DocenteEditPageComponent},
];