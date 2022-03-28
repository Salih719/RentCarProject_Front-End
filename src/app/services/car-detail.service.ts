import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Entities/car';
import { CarDetail } from '../models/Entities/carDetail';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = 'https://localhost:44349/api/'

  constructor(private httpClient: HttpClient) { }

  getCarByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"cars/getbyid?id=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetails(){
    let newPath = this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

}
