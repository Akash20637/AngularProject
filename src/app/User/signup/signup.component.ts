import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { v4 as uuidv4 } from 'uuid';
import { RegisterUser } from './signup.model';
import { SignUpService } from './signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  login_service = inject(LoginService)
  signUp_service = inject(SignUpService)

  register_form = new FormGroup({

    id: new FormControl(uuidv4()),
    user_name : new FormControl(''),
    email : new FormControl(''),  
    password : new FormControl(''),
    number : new FormControl(''),
    role : new FormControl('')

  })

  onSubmit(){
    this.signUp_service.signup(this.register_form.value)
  }

}
