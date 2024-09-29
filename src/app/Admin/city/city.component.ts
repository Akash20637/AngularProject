import { Component, inject, OnInit} from '@angular/core';
import { CityService } from './city.service';
import { City } from './city.modal';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit{
  city_service = inject(CityService)

  cityList : City[] = []

  ngOnInit(): void {
    this.city_service.get_city_list().subscribe((res)=>{
      console.log(res.data)
    })
  }
}
