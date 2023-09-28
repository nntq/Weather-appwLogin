import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  temperature: String | undefined;
  img: String | undefined;
  location: String | undefined;
  country: String | undefined;
  brief: String | undefined;


  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://api.weatherapi.com/v1/current.json?key=fa808de6e8e749538f2101523230308&q=Salerno&aqi=no').subscribe((data:any) => {

      this.temperature = data.current.temp_c;
      this.img = data.current.condition.icon;
      this.location = data.location.name;
      this.country = data.location.country;
      this.brief = data.current.condition.text;
    });
    
  }
}

