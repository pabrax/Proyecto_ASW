import { Routes } from '@angular/router';

// Public pages

import {WelcomePageComponent} from './pages/landing/welcome-page/welcome-page.component';
import {AboutUsPageComponent} from './pages/landing/about-us-page/about-us-page.component';
import {ContactPageComponent} from './pages/landing/contact-page/contact-page.component';
import { LoginPageComponent } from './pages/landing/login-page/login-page.component';
import { PageNotFoundComponent } from './pages/landing/page-not-found/page-not-found.component';

// private pages
import { HomePageComponent } from './pages/main/home-page/home-page.component';

// red components
import {RedPageComponent} from './pages/main/Red/red-page/red-page.component'
import { RedCreatePageComponent } from './pages/main/Red/red-create-page/red-create-page.component';
import { RedEditPageComponent } from './pages/main/Red/red-edit-page/red-edit-page.component';


// aliado components
import { AliadoPageComponent } from './pages/main/Aliado/aliado-page/aliado-page.component';
import { AliadoCreatePageComponent } from './pages/main/Aliado/aliado-create-page/aliado-create-page.component';
import { AliadoEditPageComponent } from './pages/main/Aliado/aliado-edit-page/aliado-edit-page.component';


// apoyo-profesoral components
import { ApoyoProfesoralPageComponent } from './pages/main/Apoyo_Profesoral/apoyo-profesoral-page/apoyo-profesoral-page.component';
import { ApoyoProfesoralCreatePageComponent } from './pages/main/Apoyo_Profesoral/apoyo-profesoral-create-page/apoyo-profesoral-create-page.component';
import { ApoyoProfesoralEditPageComponent } from './pages/main/Apoyo_Profesoral/apoyo-profesoral-edit-page/apoyo-profesoral-edit-page.component';

// beca components
import { BecaPageComponent } from './pages/main/Beca/beca-page/beca-page.component';
import { BecaCreatePageComponent } from './pages/main/Beca/beca-create-page/beca-create-page.component';
import { BecaEditPageComponent } from './pages/main/Beca/beca-edit-page/beca-edit-page.component';


// evaluacion-docente components
import { EvaluacionDocentePageComponent } from './pages/main/Evaluacion_Docente/evaluacion-docente-page/evaluacion-docente-page.component';
import { EvaluacionDocenteCreatePageComponent } from './pages/main/Evaluacion_Docente/evaluacion-docente-create-page/evaluacion-docente-create-page.component';
import { EvaluacionDocenteEditPageComponent } from './pages/main/Evaluacion_Docente/evaluacion-docente-edit-page/evaluacion-docente-edit-page.component';

// reconocimiento components
import { ReconocimientoPageComponent } from './pages/main/Reconocimiento/reconocimiento-page/reconocimiento-page.component';
import { ReconocimientoCreatePageComponent } from './pages/main/Reconocimiento/reconocimiento-create-page/reconocimiento-create-page.component';
import { ReconocimientoEditPageComponent } from './pages/main/Reconocimiento/reconocimiento-edit-page/reconocimiento-edit-page.component';

// experiencia components
import { ExperienciaPageComponent } from './pages/main/Experiencia/experiencia-page/experiencia-page.component';
import { ExperienciaCreatePageComponent } from './pages/main/Experiencia/experiencia-create-page/experiencia-create-page.component';
import { ExperienciaEditPageComponent } from './pages/main/Experiencia/experiencia-edit-page/experiencia-edit-page.component';
import { DocsPageComponent } from './pages/landing/docs-page/docs-page.component';

// docente components
import { DocentePageComponent } from './pages/main/Docente/docente-page/docente-page.component';
import { DocenteCreatePageComponent } from './pages/main/Docente/docente-create-page/docente-create-page.component';
import { DocenteEditPageComponent } from './pages/main/Docente/docente-edit-page/docente-edit-page.component';

// estudio-ac components
import { EstudioAcPageComponent } from './pages/main/EstudioAC/estudio-ac-page/estudio-ac-page.component';
import { EstudioAcCreatePageComponent } from './pages/main/EstudioAC/estudio-ac-create-page/estudio-ac-create-page.component';
import { EstudioAcEditPageComponent } from './pages/main/EstudioAC/estudio-ac-edit-page/estudio-ac-edit-page.component';

// estudios-realizados components
import { EstudiosRealizadosPageComponent } from './pages/main/EstudiosRealizados/estudios-realizados-page/estudios-realizados-page.component';
import { EstudiosRealizadosCreatePageComponent } from './pages/main/EstudiosRealizados/estudios-realizados-create-page/estudios-realizados-create-page.component';
import { EstudiosRealizadosEditPageComponent } from './pages/main/EstudiosRealizados/estudios-realizados-edit-page/estudios-realizados-edit-page.component';

// intereses-futuros components
import { InteresesFuturosPageComponent } from './pages/main/InteresesFuturos/intereses-futuros-page/intereses-futuros-page.component';
import { InteresesFuturosCreatePageComponent } from './pages/main/InteresesFuturos/intereses-futuros-create-page/intereses-futuros-create-page.component';
import { InteresesFuturosEditPageComponent } from './pages/main/InteresesFuturos/intereses-futuros-edit-page/intereses-futuros-edit-page.component';


// red-docente components
import { RedDocentePageComponent } from './pages/main/RedDocente/red-docente-page/red-docente-page.component';
import { RedDocenteCreatePageComponent } from './pages/main/RedDocente/red-docente-create-page/red-docente-create-page.component';
import { RedDocenteEditPageComponent } from './pages/main/RedDocente/red-docente-edit-page/red-docente-edit-page.component';

// docente-departamento components
import { DocenteDepartamentoPageComponent } from './pages/main/DocenteDepartamento/docente-departamento-page/docente-departamento-page.component';
import { DocenteDepartamentoCreatePageComponent } from './pages/main/DocenteDepartamento/docente-departamento-create-page/docente-departamento-create-page.component';
import { DocenteDepartamentoEditPageComponent } from './pages/main/DocenteDepartamento/docente-departamento-edit-page/docente-departamento-edit-page.component';

// alianza components
import { AlianzaPageComponent } from './pages/main/Alianza/alianza-page/alianza-page.component';
import { AlianzaCreatePageComponent } from './pages/main/Alianza/alianza-create-page/alianza-create-page.component';
import { AlianzaEditPageComponent } from './pages/main/Alianza/alianza-edit-page/alianza-edit-page.component';


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
    {path: 'app/experiencia/edit/:id', component: ExperienciaEditPageComponent},
    
    // Docente
    
    {path: 'app/docente', component: DocentePageComponent},
    {path: 'app/docente/create', component: DocenteCreatePageComponent},
    {path: 'app/docente/edit/:id', component: DocenteEditPageComponent},
    
    // EstudioAC
    
    {path: 'app/estudio-ac', component: EstudioAcPageComponent},
    {path: 'app/estudio-ac/create', component: EstudioAcCreatePageComponent},
    {path: 'app/estudio-ac/edit/:id', component: EstudioAcEditPageComponent},
    
    // EstudiosRealizados
    
    {path: 'app/estudios-realizados', component: EstudiosRealizadosPageComponent},
    {path: 'app/estudios-realizados/create', component: EstudiosRealizadosCreatePageComponent},
    {path: 'app/estudios-realizados/edit/:id', component: EstudiosRealizadosEditPageComponent},
    
    // intereses futuros
    {path: 'app/intereses-futuros', component: InteresesFuturosPageComponent},
    {path: 'app/intereses-futuros/create', component: InteresesFuturosCreatePageComponent},
    {path: 'app/intereses-futuros/edit/:id', component: InteresesFuturosEditPageComponent},

    
    // red-docente routes
    {path: 'app/red-docente', component: RedDocentePageComponent},
    {path: 'app/red-docente/create', component: RedDocenteCreatePageComponent},
    {path: 'app/red-docente/edit/:id', component: RedDocenteEditPageComponent},

    // docente-departamento routes
    {path: 'app/docente-departamento', component: DocenteDepartamentoPageComponent},
    {path: 'app/docente-departamento/create', component: DocenteDepartamentoCreatePageComponent},
    {path: 'app/docente-departamento/edit/:id', component: DocenteDepartamentoEditPageComponent},

    // alianza routes
    {path: 'app/alianza', component: AlianzaPageComponent},
    {path: 'app/alianza/create', component: AlianzaCreatePageComponent},
    {path: 'app/alianza/edit/:id', component: AlianzaEditPageComponent},
    
    // page not found, verifica si la ruta no existe
    { path: '**', component: PageNotFoundComponent } 
];
