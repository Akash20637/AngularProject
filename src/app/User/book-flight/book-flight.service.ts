import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FlightList } from "./book-flight.model";


@Injectable({providedIn : 'root'})
export class BookFlightService{

    constructor(private http : HttpClient){}

    getFlightLists() : Observable<FlightList[]>{
        return this.http.get<FlightList[]>('http://localhost:3000/flightList')
    }
}