import { Routes } from '@angular/router';

// beca components
import { BecaPageComponent } from '../pages/main/Beca/beca-page/beca-page.component';
import { BecaCreatePageComponent } from '../pages/main/Beca/beca-create-page/beca-create-page.component';
import { BecaEditPageComponent } from '../pages/main/Beca/beca-edit-page/beca-edit-page.component';

export const BecaRoutes: Routes = [
  // beca routes
  { path: 'app/beca', component: BecaPageComponent },
  { path: 'app/beca/create', component: BecaCreatePageComponent },
  { path: 'app/beca/edit/:id', component: BecaEditPageComponent },
];
