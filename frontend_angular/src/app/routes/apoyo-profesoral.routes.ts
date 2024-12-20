import { Routes } from "@angular/router";


// apoyo-profesoral routes

import { ApoyoProfesoralCreatePageComponent } from "../pages/main/Apoyo_Profesoral/apoyo-profesoral-create-page/apoyo-profesoral-create-page.component";
import { ApoyoProfesoralEditPageComponent } from "../pages/main/Apoyo_Profesoral/apoyo-profesoral-edit-page/apoyo-profesoral-edit-page.component";
import { ApoyoProfesoralPageComponent } from "../pages/main/Apoyo_Profesoral/apoyo-profesoral-page/apoyo-profesoral-page.component";
import { authGuard } from "../services/auth.guard";

export const ApoyoProfesoralRoutes: Routes = [
    {path: 'app/apoyo-profesoral', component: ApoyoProfesoralPageComponent, canActivate: [authGuard]},
    {path: 'app/apoyo-profesoral/create', component: ApoyoProfesoralCreatePageComponent, canActivate: [authGuard]},
    {path: 'app/apoyo-profesoral/edit/:id', component: ApoyoProfesoralEditPageComponent, canActivate: [authGuard]},
];

