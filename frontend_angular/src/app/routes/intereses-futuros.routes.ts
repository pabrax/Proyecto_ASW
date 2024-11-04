import { Routes } from '@angular/router';

// intereses-futuros components
import { InteresesFuturosPageComponent } from '../pages/main/InteresesFuturos/intereses-futuros-page/intereses-futuros-page.component';
import { InteresesFuturosCreatePageComponent } from '../pages/main/InteresesFuturos/intereses-futuros-create-page/intereses-futuros-create-page.component';
import { InteresesFuturosEditPageComponent } from '../pages/main/InteresesFuturos/intereses-futuros-edit-page/intereses-futuros-edit-page.component';


export const InteresesFuturosRoutes: Routes = [
    // intereses futuros
    {path: 'app/intereses-futuros', component: InteresesFuturosPageComponent},
    {path: 'app/intereses-futuros/create', component: InteresesFuturosCreatePageComponent},
    {path: 'app/intereses-futuros/edit/:id', component: InteresesFuturosEditPageComponent},
];