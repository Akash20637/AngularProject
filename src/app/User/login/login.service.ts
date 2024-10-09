import { Injectable } from "@angular/core";
import { User, Users } from "./login.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";


@Injectable({ providedIn: 'root' })
export class LoginService{
    constructor(private http : HttpClient){}

    users : Users[] = []

    getUsers() {
        this.http.get<Users[]>('http://localhost:3000/users').pipe(
          map((res) =>
            res.map((data) => ({
              id: data.id,
              email: data.email,
              password: data.password,
              role :  data.role
            }))
          )
        ).subscribe({
            next : (res)=> this.users = res,
            error : (err)=> console.log(err),
            complete : ()=> console.log("Complete.........")
        })
    }
    
    validateUser(data : User){
       
    }
}