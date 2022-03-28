import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/Entities/carImage';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:44349/api/'

  constructor(private httpClient:HttpClient) { }

  getImagePath(imagePath: string) {
    return this.apiUrl + imagePath;
  }

  // işimize yarayan method bu
  getCarImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath =this.apiUrl + "carImages/getcarimagebycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }



}
