import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/Entities/rental';
import { RentalDetail } from '../models/Entities/rentalDetail';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44349/api/rentals/getall'
  apiUrlDetail = 'https://localhost:44349/api/rentals/getcarrentaldetails'

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }

  getRentalDetail():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrlDetail)
  }

}
