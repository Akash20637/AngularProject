import { Injectable } from "@angular/core";
import { User, Users } from "./login.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class LoginService{
    constructor(private http : HttpClient, private router : Router){}

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
    
    validateUser(data: User) {
      let exist = this.users.find(user => user.email === data.email && user.password === data.password);
      if (exist) {
        window.localStorage.setItem('user', JSON.stringify(exist))
        this.router.navigate(['/user/search-flight/'])
      } else {
        console.log("User not found");
      }
    }
}