import { Routes } from '@angular/router';

// estudios-realizados components
import { EstudiosRealizadosPageComponent } from '../pages/main/EstudiosRealizados/estudios-realizados-page/estudios-realizados-page.component';
import { EstudiosRealizadosCreatePageComponent } from '../pages/main/EstudiosRealizados/estudios-realizados-create-page/estudios-realizados-create-page.component';
import { EstudiosRealizadosEditPageComponent } from '../pages/main/EstudiosRealizados/estudios-realizados-edit-page/estudios-realizados-edit-page.component';
import { authGuard } from '../services/auth.guard';

export const EstudiosRealizadosRoutes: Routes = [
    // EstudiosRealizados
    
    {path: 'app/estudios-realizados', component: EstudiosRealizadosPageComponent, canActivate: [authGuard]},
    {path: 'app/estudios-realizados/create', component: EstudiosRealizadosCreatePageComponent, canActivate: [authGuard]},
    {path: 'app/estudios-realizados/edit/:id', component: EstudiosRealizadosEditPageComponent, canActivate: [authGuard]},
];