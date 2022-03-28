import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/Entities/car';
import { CarDetail } from 'src/app/models/Entities/carDetail';
import { CarImage } from 'src/app/models/Entities/carImage';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cars-layout',
  templateUrl: './cars-layout.component.html',
  styleUrls: ['./cars-layout.component.css']
})
export class CarsLayoutComponent implements OnInit {

  cars: CarDetail[] = [];

  imageHelper = "/assets/img/"

  currentCar: CarDetail;
  carcar: Car[] = []
  car:Car;

  carImages: CarImage[]= [];
  dataLoaded=false;

  //filter-------
  filterText="";
  brandCategory:number=null;
  colorCategory:number=null;
  //-------------

  brand:number=null;

  colorId:number;
  brandId:number;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {

    // this.colorId = this.activatedRoute.snapshot.params["colorId"];
    // this.brandId = this.activatedRoute.snapshot.params["brandId"];

    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getCars()
      }
    })


  }


  reciveCategory($event:number) {
    this.brandCategory = $event;
  }

  reciveColor($event:number) {
    this.colorCategory = $event
  }


  getImagePath(imagePath: string) {
    return this.imageHelper + imagePath;
  }





  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.carcar = response.data
      this.dataLoaded = true;
    })
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded =true
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carcar =response.data
      this.dataLoaded= true
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.carcar=response.data
      this.dataLoaded=true
    })
  }

  addToCart(car:Car){
    this.toastrService.success("Sepete eklendi",car.carName)
    this.cartService.addToCart(car)
  }

  goToDetails(carId: number) {
    this.carService.goToDetails(carId).subscribe(response=> {
      this.currentCar = response.data
      this.dataLoaded = true
    })
  }




}
