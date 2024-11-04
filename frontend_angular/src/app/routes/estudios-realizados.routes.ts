import { Routes } from '@angular/router';

// estudios-realizados components
import { EstudiosRealizadosPageComponent } from '../pages/main/EstudiosRealizados/estudios-realizados-page/estudios-realizados-page.component';
import { EstudiosRealizadosCreatePageComponent } from '../pages/main/EstudiosRealizados/estudios-realizados-create-page/estudios-realizados-create-page.component';
import { EstudiosRealizadosEditPageComponent } from '../pages/main/EstudiosRealizados/estudios-realizados-edit-page/estudios-realizados-edit-page.component';

export const EstudiosRealizadosRoutes: Routes = [
    // EstudiosRealizados
    
    {path: 'app/estudios-realizados', component: EstudiosRealizadosPageComponent},
    {path: 'app/estudios-realizados/create', component: EstudiosRealizadosCreatePageComponent},
    {path: 'app/estudios-realizados/edit/:id', component: EstudiosRealizadosEditPageComponent},
];