import { Routes } from '@angular/router';

// aliado components
import { AliadoPageComponent } from '../pages/main/Aliado/aliado-page/aliado-page.component';
import { AliadoCreatePageComponent } from '../pages/main/Aliado/aliado-create-page/aliado-create-page.component';
import { AliadoEditPageComponent } from '../pages/main/Aliado/aliado-edit-page/aliado-edit-page.component';

import { provideHttpClient } from '@angular/common/http';
import { authGuard } from '../services/auth.guard';

export const AliadoRoutes: Routes = [
    // aliado routes
  { path: 'app/aliado', component: AliadoPageComponent, canActivate: [authGuard] },
  { path: 'app/aliado/create', component: AliadoCreatePageComponent, canActivate: [authGuard] },
  { path: 'app/aliado/edit/:id', component: AliadoEditPageComponent, canActivate: [authGuard] },
];
