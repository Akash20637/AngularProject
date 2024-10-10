import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from './login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  login_service = inject(LoginService)

  ngOnInit(): void {
    this.login_service.getUsers()
  }

  onSubmit(form : NgForm){
    let data : User = form.value
    this.login_service.validateUser(data)
    form.reset()
  }
}
