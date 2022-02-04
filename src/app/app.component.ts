import { Component } from '@angular/core';
import { ServiceComponentService } from './service/service-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cityName: any;
  cityVar: any;
  cities: any;
  test:any
  constructor(private cityData: ServiceComponentService) {
  }


  details:any
  temperature:any
  feelsLike:any
  pressure:any
  windSpeed:any
  humidity:any
  display:any
  marginTop:any
  top:any
  wdescription:any
  iconImg:any
 
  
  getFormData(data: string) {
    this.top=0
    this.marginTop='10px'
    this.display='block'
    this.cityName = data.search;
    if(this.cityName==''){
      this.cityName='Error'
    }
   
    
    this.cityVar = `url('https://source.unsplash.com/1600x900/?${this.cityName}')`;
    this.cityData.cityData(this.cityName).subscribe((data)=>{
      this.details=data
      this.details=data
      this.temperature=Math.round(parseFloat(this.details.main.temp))
      this.feelsLike=Math.round(parseFloat(this.details.main.feels_like))
      this.pressure=Math.round(parseFloat(this.details.main.pressure))
      this.windSpeed=Math.round(parseFloat(this.details.wind.speed))
      this.humidity=Math.round(parseFloat(this.details.main.humidity))
      this.wdescription=this.details.weather[0].description
      
      
      if(this.wdescription.includes('cloud')){
        this.iconImg='../../assets/images/cloudy-icon-15.jpg'
      } 
      else if(this.wdescription.includes('sunny')){
        this.iconImg='../../assets/images/sunny-icon-png-15.jpg'
        
      }
      else if(this.wdescription.includes('haze')){
        this.iconImg='../../assets/images/Haze.png'
        
      }
      else if(this.wdescription.includes('rain')){
        this.iconImg='../../assets/images/rain.png'
        
      }
      else if(this.wdescription.includes('clear')){
        this.iconImg='../../assets/images/sunny-icon-png-15.jpg'
        
      }
      else if(this.wdescription.includes('snow')){
        this.iconImg='../../assets/images/snow.png'
        
        
        
      } else{
        this.iconImg='../../assets/images/4870779-middle.png'
        
      }
    })
    
    
    
    
  }
  
  
}
