import { Component, inject } from '@angular/core';
import { SearchFlightService } from './search-flight.service';
import { OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-flight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.css'
})
export class SearchFlightComponent implements OnInit{

  book_flight_service = inject(SearchFlightService)
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

}
