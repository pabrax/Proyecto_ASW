import { Routes } from '@angular/router';

// my components

import {WelcomePageComponent} from './public/welcome-page/welcome-page.component';
import {AboutUsPageComponent} from './public/about-us-page/about-us-page.component';
import {ContactPageComponent} from './public/contact-page/contact-page.component';
import { LoginPageComponent } from './public/login-page/login-page.component';

// private components
import { HomePageComponent } from './main/home-page/home-page.component';

// red components
import {RedPageComponent} from './main/Red/red-page/red-page.component'
import { RedCreatePageComponent } from './main/Red/red-create-page/red-create-page.component';
import { RedEditPageComponent } from './main/Red/red-edit-page/red-edit-page.component';


// aliado components
import { AliadoPageComponent } from './main/Aliado/aliado-page/aliado-page.component';
import { AliadoCreatePageComponent } from './main/Aliado/aliado-create-page/aliado-create-page.component';
import { AliadoEditPageComponent } from './main/Aliado/aliado-edit-page/aliado-edit-page.component';


// apoyo-profesoral components
import { ApoyoProfesoralPageComponent } from './main/Apoyo_Profesoral/apoyo-profesoral-page/apoyo-profesoral-page.component';
import { ApoyoProfesoralCreatePageComponent } from './main/Apoyo_Profesoral/apoyo-profesoral-create-page/apoyo-profesoral-create-page.component';
import { ApoyoProfesoralEditPageComponent } from './main/Apoyo_Profesoral/apoyo-profesoral-edit-page/apoyo-profesoral-edit-page.component';

// beca components
import { BecaPageComponent } from './main/Beca/beca-page/beca-page.component';
import { BecaCreatePageComponent } from './main/Beca/beca-create-page/beca-create-page.component';
import { BecaEditPageComponent } from './main/Beca/beca-edit-page/beca-edit-page.component';


// evaluacion-docente components
import { EvaluacionDocentePageComponent } from './main/Evaluacion_Docente/evaluacion-docente-page/evaluacion-docente-page.component';
import { EvaluacionDocenteCreatePageComponent } from './main/Evaluacion_Docente/evaluacion-docente-create-page/evaluacion-docente-create-page.component';
import { EvaluacionDocenteEditPageComponent } from './main/Evaluacion_Docente/evaluacion-docente-edit-page/evaluacion-docente-edit-page.component';

// reconocimiento components
import { ReconocimientoPageComponent } from './main/Reconocimiento/reconocimiento-page/reconocimiento-page.component';
import { ReconocimientoCreatePageComponent } from './main/Reconocimiento/reconocimiento-create-page/reconocimiento-create-page.component';
import { ReconocimientoEditPageComponent } from './main/Reconocimiento/reconocimiento-edit-page/reconocimiento-edit-page.component';

// experiencia components
import { ExperienciaPageComponent } from './main/Experiencia/experiencia-page/experiencia-page.component';
import { ExperienciaCreatePageComponent } from './main/Experiencia/experiencia-create-page/experiencia-create-page.component';
import { ExperienciaEditPageComponent } from './main/Experiencia/experiencia-edit-page/experiencia-edit-page.component';
import { DocsPageComponent } from './public/docs-page/docs-page.component';


export const routes: Routes = [

    // public routes
    {path: '', component: WelcomePageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'about-us', component: AboutUsPageComponent},
    {path: 'docs', component: DocsPageComponent},
    {path: 'login', component: LoginPageComponent},

    // private routes
    {path: 'app/home', component: HomePageComponent},

    // features
    // red routes
    {path: 'app/red', component: RedPageComponent},
    {path: 'app/red/create', component: RedCreatePageComponent},
    {path: 'app/red/edit/:idr', component: RedEditPageComponent},


    
    
    // aliado routes
    {path: 'app/aliado', component: AliadoPageComponent},
    {path: 'app/aliado/create', component: AliadoCreatePageComponent},
    {path: 'app/aliado/edit/:id', component: AliadoEditPageComponent},
    
    // apoyo-profesoral routes
    {path: 'app/apoyo-profesoral', component: ApoyoProfesoralPageComponent},
    {path: 'app/apoyo-profesoral/create', component: ApoyoProfesoralCreatePageComponent},
    {path: 'app/apoyo-profesoral/edit/:id', component: ApoyoProfesoralEditPageComponent},
    
    
    // beca routes
    {path: 'app/beca', component: BecaPageComponent},
    {path: 'app/beca/create', component: BecaCreatePageComponent},
    {path: 'app/beca/edit/:id', component: BecaEditPageComponent},
    
    
    // evaluacion-docente routes
    {path: 'app/evaluacion-docentes', component: EvaluacionDocentePageComponent},
    {path: 'app/evaluacion-docentes/create', component: EvaluacionDocenteCreatePageComponent},
    {path: 'app/evaluacion-docentes/edit/:id', component: EvaluacionDocenteEditPageComponent},
    
    
    // reconocimiento routes
    {path: 'app/reconocimiento', component: ReconocimientoPageComponent},
    {path: 'app/reconocimiento/create', component: ReconocimientoCreatePageComponent},
    {path: 'app/reconocimiento/edit/:id', component: ReconocimientoEditPageComponent},
    
    
    // experiencia
    {path: 'app/experiencia', component: ExperienciaPageComponent},
    {path: 'app/experiencia/create', component: ExperienciaCreatePageComponent},
    {path: 'app/experiencia/edit/:id', component: ExperienciaEditPageComponent}

];
