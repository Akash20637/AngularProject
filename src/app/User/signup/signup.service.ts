import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterUser } from "./signup.model";


@Injectable({providedIn : 'root'})

export class SignUpService{

    constructor(private http :  HttpClient){}

    signup(data : RegisterUser){
        this.http.post('http://localhost:3000/users', data).subscribe({
            next : (res) => console.log(res),
            error : (err) => console.log(err),
            complete : () => console.log("complate......"),
        })
    }
}