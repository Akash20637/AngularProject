import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { BookFlightService } from './book-flight.service';
import { FlightList } from './book-flight.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { FlightInfo } from '../search-flight/search-flight.model';


@Component({
  selector: 'app-book-flight',
  standalone: true,
  imports: [],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent implements OnInit{
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
        return flightList.map((flight)=>(
          flight.departure === qParams.departure && flight.destination === qParams.destination
        ))
      })
    
    ).subscribe({
      next : (data) => console.log("data----------", data),
      error : (err) => console.log(err),
      complete : ()=> console.log("Completed.........")
    })
  }
}
