import { Routes } from "@angular/router";


export const routes : Routes = [
    {
        path : '',
        redirectTo : 'user',
        pathMatch : 'full',
        
    },
    {
        path : 'user',
        loadComponent : ()=> import('./User/user-layout/user-layout.component').then(m => m.UserLayoutComponent),
        title : 'HomePage',
        children : [
            {
                path : 'signup',
                loadComponent : ()=> import('./User/signup/signup.component').then(m=>m.SignupComponent),
                title : 'SignUp'
            },
            {
                path : 'login',
                loadComponent : ()=> import('./User/login/login.component').then(m=> m.LoginComponent),
                title : 'Login'
            },
            {
                path : 'book-flight',
                loadComponent : ()=> import('./User/book-flight/book-flight.component').then(m=> m.BookFlightComponent),
                title : 'BookFlight'
            },
            {
                path : 'search-flight',
                loadComponent : ()=> import('./User/search-flight/search-flight.component').then(m=> m.SearchFlightComponent),
                title : 'SearchFlight'
            },
            {
                path : 'bookings',
                loadComponent : ()=> import('./User/check-bookings/check-bookings.component').then(m=> m.CheckBookingsComponent),
                title : 'AllBookings'
            },
        ]
    }
]