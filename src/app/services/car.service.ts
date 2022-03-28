import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/ResponseModels/listResponseModel';
import { Car } from 'src/app/models/Entities/car';
import { CarDetail } from '../models/Entities/carDetail';
import { ResponseModel } from '../models/ResponseModels/responseModel';
import { SingleResponseModel } from '../models/ResponseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44349/api/';

  imageHelper = "src/assets/img/";

  // https://localhost:44349/api/cars/getcarsbybrandid?brandId=1     doğru link

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }


  //CarDetail -------------------------
  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  goToDetails(carId: number):Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetail?id=" + carId
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath)
  }
  //--------------------------------------


  getImagePath(imagePath: string) {
    return this.imageHelper + imagePath;
  }

}
