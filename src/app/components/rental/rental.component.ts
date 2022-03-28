import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/Entities/rental';
import { RentalDetail } from 'src/app/models/Entities/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[]=[]
  rentalDetails:RentalDetail[]=[]
  dataLoaded=false

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetail()
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data
      this.dataLoaded = true
    })
  }

  getRentalDetail(){
    this.rentalService.getRentalDetail().subscribe(response=>{
      this.rentalDetails=response.data
      this.dataLoaded=true
    })
  }



}
