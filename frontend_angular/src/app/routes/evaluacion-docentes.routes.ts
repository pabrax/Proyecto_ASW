import { Routes } from "@angular/router";

// evaluacion-docente components
import { EvaluacionDocentePageComponent } from '../pages/main/Evaluacion_Docente/evaluacion-docente-page/evaluacion-docente-page.component';
import { EvaluacionDocenteCreatePageComponent } from '../pages/main/Evaluacion_Docente/evaluacion-docente-create-page/evaluacion-docente-create-page.component';
import { EvaluacionDocenteEditPageComponent } from '../pages/main/Evaluacion_Docente/evaluacion-docente-edit-page/evaluacion-docente-edit-page.component';
import { authGuard } from "../services/auth.guard";

export const EvaluacionDocentesRoutes: Routes = [
    // evaluacion-docente routes
    {path: 'app/evaluacion-docentes', component: EvaluacionDocentePageComponent, canActivate: [authGuard]},
    {path: 'app/evaluacion-docentes/create', component: EvaluacionDocenteCreatePageComponent, canActivate: [authGuard]},
    {path: 'app/evaluacion-docentes/edit/:id', component: EvaluacionDocenteEditPageComponent, canActivate: [authGuard]},
];