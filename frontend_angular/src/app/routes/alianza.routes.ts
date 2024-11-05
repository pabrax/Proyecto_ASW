import { Routes } from '@angular/router';

// alianza components
import { AlianzaPageComponent } from '../pages/main/Alianza/alianza-page/alianza-page.component';
import { AlianzaCreatePageComponent } from '../pages/main/Alianza/alianza-create-page/alianza-create-page.component';
import { AlianzaEditPageComponent } from '../pages/main/Alianza/alianza-edit-page/alianza-edit-page.component';
import { authGuard } from '../services/auth.guard';

export const AlianzaRoutes: Routes = [
  // alianza routes
  { path: 'app/alianza', component: AlianzaPageComponent, canActivate: [authGuard] },
  { path: 'app/alianza/create', component: AlianzaCreatePageComponent, canActivate: [authGuard] },
  { path: 'app/alianza/edit/:id', component: AlianzaEditPageComponent, canActivate: [authGuard] },
];
