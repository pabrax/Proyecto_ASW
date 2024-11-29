import { Routes } from '@angular/router';

import { landingRoutes } from './routes/landing.routes';
import { PageNotFoundComponent } from './pages/landing/page-not-found/page-not-found.component';

// Private Routes

import { HomePageComponent } from './pages/main/home-page/home-page.component';

import { RedRoutes } from './routes/red.routes';
import { AlianzaRoutes } from './routes/alianza.routes';
import { AliadoRoutes } from './routes/aliado.routes';
import { BecaRoutes } from './routes/beca.routes';
import { EvaluacionDocentesRoutes } from './routes/evaluacion-docentes.routes';
import { ApoyoProfesoralRoutes } from './routes/apoyo-profesoral.routes';
import { ExperienciaRoutes } from './routes/experiencia.routes';
import { ReconocimientoRoutes } from './routes/reconocimiento.routes';
import { DocenteDepartamentoRoutes } from './routes/docente-departamento.routes';
import { RedDocenteRoutes } from './routes/red-docente.routes';
import { InteresesFuturosRoutes } from './routes/intereses-futuros.routes';
import { EstudiosRealizadosRoutes } from './routes/estudios-realizados.routes';
import { EstudioAcRoutes } from './routes/estudio-ac.routes';
import { DocenteRoutes } from './routes/docente.routes';

import { AdminRoutes } from './routes/admin.routes';

// auth guard
import { authGuard } from './services/auth.guard';


export const routes: Routes = [

    // public routes inside landingRoutes
    ...landingRoutes,
    
    // private routes
    {path: 'app', component: HomePageComponent, canActivate: [authGuard]},
    
    // aliado routes
    ...AliadoRoutes,
    
    //alianza routes
    ...AlianzaRoutes,
    
    // apoyo-profesoral routes
    ...ApoyoProfesoralRoutes,
    
    // beca routes
    ...BecaRoutes,

    // docente routes
    ...DocenteRoutes,

    // docente departamento routes
    ...DocenteDepartamentoRoutes,

    // evaluacion-docente routes
    ...EvaluacionDocentesRoutes,

    // estudio AC routes
    ...EstudioAcRoutes,

    // estudios realizados
    ...EstudiosRealizadosRoutes,
    
    // experiencia routes
    ...ExperienciaRoutes,

    // intereses futuros routes
    ...InteresesFuturosRoutes,

    // reconocimiento routes
    ...ReconocimientoRoutes,

    // red routes
    ...RedRoutes,
    
    // red docente routes
    ...RedDocenteRoutes,

    // admin routes
    ...AdminRoutes,

    // page not found, verifica si la ruta no existe
    { path: '**', component: PageNotFoundComponent } 
];
