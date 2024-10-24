import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookFlight, FlightList } from "./book-flight.model";


@Injectable({providedIn : 'root'})
export class BookFlightService{

    constructor(private http : HttpClient){}

    getFlightLists() : Observable<FlightList[]>{
        return this.http.get<FlightList[]>('http://localhost:3000/flightList')
    }

    addFlightInfo(data : BookFlight){
        this.http.post('http://localhost:3000/book_flight',data).subscribe()
    }
}