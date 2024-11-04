import { Routes } from '@angular/router';
// estudio-ac components
import { EstudioAcPageComponent } from '../pages/main/EstudioAC/estudio-ac-page/estudio-ac-page.component';
import { EstudioAcCreatePageComponent } from '../pages/main/EstudioAC/estudio-ac-create-page/estudio-ac-create-page.component';
import { EstudioAcEditPageComponent } from '../pages/main/EstudioAC/estudio-ac-edit-page/estudio-ac-edit-page.component';

export const EstudioAcRoutes: Routes = [
    // EstudioAC
    
    {path: 'app/estudio-ac', component: EstudioAcPageComponent},
    {path: 'app/estudio-ac/create', component: EstudioAcCreatePageComponent},
    {path: 'app/estudio-ac/edit/:id', component: EstudioAcEditPageComponent},
];