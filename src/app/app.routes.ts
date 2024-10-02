import { Routes } from '@angular/router';
import { LayoutComponent } from './Admin/layout/layout.component';
import { LoginComponent } from './Admin/login/login.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'search',
        pathMatch : 'full'
    },
    {
        path : 'search',
        loadComponent : () => import('./Users/search/search.component').then(m=>m.SearchComponent), // Lazy Loading
        title : 'Search'
    },
    {
        path : 'book-flight',
        loadComponent : () => import('./Users/book-flight/book-flight.component').then(m=>m.BookFlightComponent), // Lazy Loading
        title : 'Flight-Booking'
    },
    {
        path : 'my-bookings',
        loadComponent : ()=> import('./Users/mybookings/mybookings.component').then(m=>m.MybookingsComponent), // Lazy Loading
        title : 'MyBookings'
    },
    {
        path : 'login',
        component : LoginComponent,
        title : 'Login'
    },

    {
        path : '',
        component : LayoutComponent,
        
        children : [
            {
               path : 'airports',
               loadComponent : ()=> import('./Admin/airport/airport.component').then(m => m.AirportComponent),
               title : 'Airports'
            },
            {
                path : 'all-bookings',
                loadComponent : ()=> import('./Admin/booking/booking.component').then(m=> m.BookingComponent),
                title : 'AllBookings'
            },
            {
                path : 'all-flights',
                loadComponent : ()=> import('./Admin/flights/flights.component').then(m=>m.FlightsComponent),
                title : 'AllFlights'
            },
            {
                path : 'new-flight',
                loadComponent : ()=> import('./Admin/new-flight/new-flight.component').then(m => m.NewFlightComponent),
                title : 'NewFlight'
            }, 
            {
                path : 'all-city',
                loadComponent : ()=> import('./Admin/city/city.component').then(m => m.CityComponent),
                title : 'Cities'
            }

        ]
        
    }

];
