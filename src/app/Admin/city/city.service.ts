import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { City } from "./city.modal";


@Injectable({providedIn : "root"})
export class CityService{
    constructor(private http : HttpClient){}

    //Get All City
    get_city_list() : Observable<City>{
        return this.http.get<City>('http://localhost:3000/cities')
    }
}