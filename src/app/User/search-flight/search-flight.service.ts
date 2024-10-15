import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Cities } from "./search-flight.model";

@Injectable({ providedIn : 'root'})
export class SearchFlightService{

    constructor(private http : HttpClient){}

    getCities() : Observable<Cities[]>{
        return this.http.get<Cities[]>('http://localhost:3000/cities')
    }
}