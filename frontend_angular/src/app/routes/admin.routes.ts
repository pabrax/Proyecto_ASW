import { Routes } from '@angular/router';
import { UsuarioPageComponent } from '../pages/main/usuarios/usuario-page/usuario-page.component';
import { UsuarioCreatePageComponent } from '../pages/main/usuarios/usuario-create-page/usuario-create-page.component';
import { UsuarioEditPageComponent } from '../pages/main/usuarios/usuario-edit-page/usuario-edit-page.component';

import { RolPageComponent } from '../pages/main/roles/rol-page/rol-page.component';
import { RolCreatePageComponent } from '../pages/main/roles/rol-create-page/rol-create-page.component';
import { RolEditPageComponent } from '../pages/main/roles/rol-edit-page/rol-edit-page.component';

import { RolUsuarioPageComponent } from '../pages/main/rol_usuarios/rol-usuario-page/rol-usuario-page.component';
import { RolUsuarioCreatePageComponent } from '../pages/main/rol_usuarios/rol-usuario-create-page/rol-usuario-create-page.component';
import { RolUsuarioEditPageComponent } from '../pages/main/rol_usuarios/rol-usuario-edit-page/rol-usuario-edit-page.component';



import { authGuard } from '../services/auth.guard';
import { userRolGuard } from '../services/userRol.guard';

// admin components




export const AdminRoutes: Routes = [
    // usuario routes
    { path: 'admin/usuario', component: UsuarioPageComponent, canActivate: [authGuard] },
    { path: 'admin/usuario/create', component: UsuarioCreatePageComponent, canActivate: [authGuard] },
    { path: 'admin/usuario/edit/:id', component: UsuarioEditPageComponent, canActivate: [authGuard] },
    
    // rol routes
    { path: 'admin/rol', component: RolPageComponent, canActivate: [authGuard] },
    { path: 'admin/rol/create', component: RolCreatePageComponent, canActivate: [authGuard] },
    { path: 'admin/rol/edit/:id', component: RolEditPageComponent, canActivate: [authGuard] },

    // rol_usuario routes

    { path: 'admin/rol_usuario', component: RolUsuarioPageComponent, canActivate: [authGuard] },
    {path: 'admin/rol_usuario/create', component: RolUsuarioCreatePageComponent, canActivate: [authGuard]},
    {path: 'admin/rol_usuario/edit/:id', component: RolUsuarioEditPageComponent, canActivate: [authGuard]}
];