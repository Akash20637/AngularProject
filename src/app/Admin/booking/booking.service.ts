import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Flight } from "./booking.model";


@Injectable({providedIn : 'root'})
export class FlightService{
    constructor(private http : HttpClient){}

    getAllFlights() : Observable<Flight[]>{
        return this.http.get<Flight[]>('http://localhost:3000/flights')
    }
}