import { Routes } from '@angular/router';
// estudio-ac components
import { EstudioAcPageComponent } from '../pages/main/EstudioAC/estudio-ac-page/estudio-ac-page.component';
import { EstudioAcCreatePageComponent } from '../pages/main/EstudioAC/estudio-ac-create-page/estudio-ac-create-page.component';
import { EstudioAcEditPageComponent } from '../pages/main/EstudioAC/estudio-ac-edit-page/estudio-ac-edit-page.component';
import { authGuard } from '../services/auth.guard';

export const EstudioAcRoutes: Routes = [
    // EstudioAC
    
    {path: 'app/estudio-ac', component: EstudioAcPageComponent, canActivate: [authGuard]},
    {path: 'app/estudio-ac/create', component: EstudioAcCreatePageComponent, canActivate: [authGuard]},
    {path: 'app/estudio-ac/edit/:id', component: EstudioAcEditPageComponent, canActivate: [authGuard]},
];