import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import { CityService } from './city.service';
import { Data } from './city.modal';
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
  city_keys : [string, string] = ['CityId', 'CityName']

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

  constructor(private renderer : Renderer2){}
  @ViewChild('cityBody') tableBody!: ElementRef

  addCity() {
    // Create a new input element for ID and City
    let idInput = this.renderer.createElement('input');
    let cityInput = this.renderer.createElement('input');
    let saveButton =  this.renderer.createElement('button')
    let buttonText = this.renderer.createText("Save")
    this.renderer.appendChild(saveButton, buttonText);

    // Set attributes for the inputs (optional)
    this.renderer.setAttribute(idInput, 'type', 'text');
    this.renderer.setAttribute(idInput, 'placeholder', 'City ID');
    this.renderer.setAttribute(cityInput, 'type', 'text');
    this.renderer.setAttribute(cityInput, 'placeholder', 'City Name');

    // Create new table data cells
    let idTd = this.renderer.createElement('td');
    let nameTd = this.renderer.createElement('td');
    let buttonTd = this.renderer.createElement('td');

    // Create a new table row
    let tr = this.renderer.createElement('tr');

    // Append inputs to their respective table data cells
    this.renderer.appendChild(idTd, idInput);
    this.renderer.appendChild(nameTd, cityInput);
    this.renderer.appendChild(buttonTd, saveButton);

    // Append cells to the table row
    this.renderer.appendChild(tr, idTd);
    this.renderer.appendChild(tr, nameTd);
    this.renderer.appendChild(tr, buttonTd);

    // Append the row to the table body
    this.renderer.appendChild(this.tableBody.nativeElement, tr);
  }

}
