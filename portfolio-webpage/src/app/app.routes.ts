import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: 'blog-cards',
        component: CardListComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
    { 
        path: '**', 
        redirectTo: '/home' 
    },
    {   path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
];
