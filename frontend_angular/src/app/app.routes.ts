import { Routes } from '@angular/router';

// my components

import {WelcomePageComponent} from './public/welcome-page/welcome-page.component';
import {AboutUsPageComponent} from './public/about-us-page/about-us-page.component';
import {SupportPageComponent} from './public/support-page/support-page.component';
import {ContactPageComponent} from './public/contact-page/contact-page.component';
import {ServicesPageComponent} from './public/services-page/services-page.component';
import { LoginPageComponent } from './public/login-page/login-page.component';

// private components

import { HomePageComponent } from './main/home-page/home-page.component';
import {RedPageComponent} from './main/Red/red-page/red-page.component'

export const routes: Routes = [

    // public routes
    {path: '', component: WelcomePageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'about-us', component: AboutUsPageComponent},
    {path: 'support', component: SupportPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'login', component: LoginPageComponent},

    // private routes
    {path: 'app/home', component: HomePageComponent},

    // features
    {path: 'app/red', component: RedPageComponent},
    {path: 'app/aliado', component: RedPageComponent},
    {path: 'app/apoyo-profesoral', component: RedPageComponent},
    {path: 'app/beca', component: RedPageComponent},
    {path: 'app/evaluacion-docente', component: RedPageComponent},
    {path: 'app/reconocimiento', component: RedPageComponent},
    {path: 'app/experiencia', component: RedPageComponent}

];
