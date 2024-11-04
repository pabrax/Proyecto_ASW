import { Routes } from '@angular/router';

// red components
import { RedPageComponent } from '../pages/main/Red/red-page/red-page.component';
import { RedCreatePageComponent } from '../pages/main/Red/red-create-page/red-create-page.component';
import { RedEditPageComponent } from '../pages/main/Red/red-edit-page/red-edit-page.component';

export const RedRoutes: Routes = [
  // red routes
  { path: 'app/red', component: RedPageComponent },
  { path: 'app/red/create', component: RedCreatePageComponent },
  { path: 'app/red/edit/:idr', component: RedEditPageComponent },
];
