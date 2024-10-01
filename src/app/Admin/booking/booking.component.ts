import { Component, inject, OnInit } from '@angular/core';
import { FlightService } from './booking.service';
import { map } from 'rxjs';
import { Flight } from './booking.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{

  flight_service = inject(FlightService)
  flight_list : Flight[] = []

  ngOnInit(): void {
    this.flight_service.getAllFlights().subscribe({
      next : (res) => this.flight_list = res,
      error : (err)=> console.log(err),
      complete : ()=> console.log("complete........")
    })
  }

}
