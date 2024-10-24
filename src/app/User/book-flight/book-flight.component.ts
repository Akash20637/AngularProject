import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { BookFlightService } from './book-flight.service';
import { FlightList } from './book-flight.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { FlightInfo } from '../search-flight/search-flight.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-flight',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent implements OnInit{

  @ViewChild('myModal') mymodal! : ElementRef

  book_flight_service = inject(BookFlightService)
  
  constructor(private route : ActivatedRoute){}

  flights : FlightList[] = []

  ngOnInit(): void {
    let qParams : FlightInfo = {
      departure : '',
      destination : '',
      flightClass : ''
    };

    this.route.queryParams.subscribe({
      next : (params)=>{
        qParams =  JSON.parse(params['flight'])
      },
      error : (err)=> console.log(err),
      complete : ()=> console.log("completed...........")
    })

    this.book_flight_service.getFlightLists().pipe(
      map((flightList)=>{
        return flightList.filter((flight)=>(
          flight.departure === qParams.departure && flight.destination === qParams.destination
        ))
      })
    
    ).subscribe({
      next : (data) => this.flights = data,
      error : (err) => console.log(err),
      complete : ()=> console.log("Completed.........")
    })
  }

  flight_number : string = ''

  openModal(fNum : string){
    this.flight_number = fNum
    this.mymodal.nativeElement.style.display = 'block'
  }

  closeModal(){
    this.mymodal.nativeElement.style.display = 'none'
  }

  book_flight = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(''),
    number : new FormControl('')
  })

  saveInfo(){
    let bookFlight = this.book_flight.getRawValue()
    let user = localStorage.getItem('user')
    let new_user  = user ? JSON.parse(user) : null

    this.book_flight.reset()
    this.mymodal.nativeElement.style.display = 'none'

    let filter_flight = this.flights.find((flight)=>{
      return flight.flightNumber == this.flight_number
    })

    let data = {
      user : new_user.email,
      flight_info : filter_flight,
      person_info : bookFlight
    }

    this.book_flight_service.addFlightInfo(data)
  }

  
}
