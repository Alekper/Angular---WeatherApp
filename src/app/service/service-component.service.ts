import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceComponentService {
  constructor(private http: HttpClient) {}

  apiWeather: any;

  apiKey: string = '9f0819e2978a527131b989d0bc7a4547';
  temp:any
  


  cityData(cityName: string) {
    this.apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.apiKey}`;
    return this.http.get(this.apiWeather);
  }
}
