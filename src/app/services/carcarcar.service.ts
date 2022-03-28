import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/Entities/carDetail';
import { ListResponseModel } from '../models/ResponseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarcarcarService {

  apiUrl = 'https://localhost:44349/api/';


  constructor(private httpClient: HttpClient) { }









}
