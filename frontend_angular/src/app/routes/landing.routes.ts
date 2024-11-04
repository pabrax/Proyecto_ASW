import { Routes } from '@angular/router';

import {WelcomePageComponent} from '../pages/landing/welcome-page/welcome-page.component';
import {AboutUsPageComponent} from '../pages/landing/about-us-page/about-us-page.component';
import {ContactPageComponent} from '../pages/landing/contact-page/contact-page.component';
import { LoginPageComponent } from '../pages/landing/login-page/login-page.component';
import { DocsPageComponent } from '../pages/landing/docs-page/docs-page.component';

export const landingRoutes: Routes = [
    // public routes
    {path: '', component: WelcomePageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'about-us', component: AboutUsPageComponent},
    {path: 'docs', component: DocsPageComponent},
    {path: 'login', component: LoginPageComponent},
];