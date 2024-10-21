import { Component, inject } from '@angular/core';
import { SearchFlightService } from './search-flight.service';
import { OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FlightInfo } from './search-flight.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.css'
})
export class SearchFlightComponent implements OnInit{

  book_flight_service = inject(SearchFlightService)

  constructor(private router : Router){}

  city_list : string[] = []

  ngOnInit(): void {
    this.book_flight_service.getCities().pipe(
      map((cities) => {
        return cities.map((city) => city.city);
      })
    ).subscribe({
      next: (data) => this.city_list = data,
      error: (err) => console.log(err),
      complete: () => console.log("complete______")
    });
  }

  flightSearch(form : NgForm){
    let data : FlightInfo = form.value
    if(form.value.departure === form.value.destination){
      alert("Departure And Destination City Should Not Same")
    }
    else{
      this.router.navigate(['/user/book-flight/'], { queryParams : {flight : JSON.stringify(data)}})
      form.reset()
    }
  }

}
