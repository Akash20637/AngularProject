import { Component, inject, OnInit} from '@angular/core';
import { CityService } from './city.service';
import { City, Data } from './city.modal';
import { map} from 'rxjs';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit{
  city_service = inject(CityService)

  cityList : Data[] = []

  ngOnInit(): void {
    this.city_service.get_city_list().pipe(
      map((res)=> res.data.map((obj)=>{
        obj.isEdit  = false
        return obj
      }))
    ).subscribe({
      next : (data)=> this.cityList = data,
      error : (err)=> console.log(err),
      complete : ()=> console.log("complete.........")
    })
  }
}
