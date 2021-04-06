import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from 'src/app/models/Entities/rentalDetailResponseModel';
import { RentalResponseModel } from 'src/app/models/ResponseModels/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44349/api/rentals/getall'
  apiUrlDetail = 'https://localhost:44349/api/rentals/getcarrentaldetails'

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl)
  }

  getRentalDetail():Observable<RentalDetailResponseModel>{
    return this.httpClient.get<RentalDetailResponseModel>(this.apiUrlDetail)
  }

}
