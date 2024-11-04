import { Routes } from '@angular/router';

// alianza components
import { AlianzaPageComponent } from '../pages/main/Alianza/alianza-page/alianza-page.component';
import { AlianzaCreatePageComponent } from '../pages/main/Alianza/alianza-create-page/alianza-create-page.component';
import { AlianzaEditPageComponent } from '../pages/main/Alianza/alianza-edit-page/alianza-edit-page.component';

export const AlianzaRoutes: Routes = [
  // alianza routes
  { path: 'app/alianza', component: AlianzaPageComponent },
  { path: 'app/alianza/create', component: AlianzaCreatePageComponent },
  { path: 'app/alianza/edit/:id', component: AlianzaEditPageComponent },
];