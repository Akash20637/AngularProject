import { Routes } from "@angular/router";

export const routes : Routes = [
    {
        path : '',
        redirectTo : 'signup',
        pathMatch : 'full',
        
    },
    {
        path : 'signup',
        loadComponent : ()=> import('./User/signup/signup.component').then(m=>m.SignupComponent),
        title : 'SignUp'
    }
]