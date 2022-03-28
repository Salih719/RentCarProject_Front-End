import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/Entities/carDetail';
import { CarImage } from 'src/app/models/Entities/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  currentCar: CarDetail;
  dataLoaded= false;
  cars: CarDetail[] = [];
  carcar:CarDetail;
  carImages:CarImage[]=[];

  imageHelper = "/assets/img/"

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService,
    private toastrService:ToastrService,
    private carImageService:CarImageService
    ) { }

    id:number;

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params["carId"];
    this.activatedRoute.params.subscribe(params=> {
      if (params["carId"]) {
        this.getCurrentCarDetails(this.id)
      }else{
        // şimdilik boş
      }
    })


  }

  getCurrentCarDetails(carId:number) {
    this.carService.goToDetails(carId).subscribe(response=> {
      this.currentCar = response.data
      this.dataLoaded = true
    })
  }

  getImagePath(imagePath: string) {
    return this.imageHelper + imagePath;
    //dandik bi method. geçici olarak kullanıyorum
  }

  getCarImagesByCarId(carId:number) {
    this.carImageService.getCarImageByCarId(carId);
  }


  addToCart(carDetail:CarDetail) {
    this.toastrService.success("Sepete eklendi", carDetail.carName)
    this.cartService.addToCartDetail(carDetail)
  }

  addToCartNormal(id:number) {
    let carId = id;
    //sonra bakarım. anasayfa ve detail sayfaları arasında activatedRoute ile id yi gönder falan filan (2 model ile çalıştığım için bu problem var ==> Car,CarDetail)
  }


}
