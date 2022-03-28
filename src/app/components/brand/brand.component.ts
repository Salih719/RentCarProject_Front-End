import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/Entities/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  @Input() brandCategory1:number;
  @Output() brandCategory2 = new EventEmitter<number>();
  @Input() selectedBrandId:number=null;


  brands: Brand[] = [];
  currentBrandCategory:Brand;
  activeOption?:number;


  // https://localhost:44349/api/cars/getcarsbybrandid?brandid=2

  constructor(
    private brandService:BrandService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getBrands()

    // this.id = this.activatedRoute.snapshot.params["carId"];
    // this.activatedRoute.params.subscribe(params=> {
    //   if (params["carId"]) {
    //     this.getCurrentCarDetails(this.id)
    //   }else{
    //     // şimdilik boş
    //   }
    // })


  }



  // getCurrentCarDetails(carId:number) {
  //   this.carService.goToDetails(carId).subscribe(response=> {
  //     this.currentCar = response.data
  //     this.dataLoaded = true
  //   })
  // }




  sendCategory(value:number) {
    this.selectedBrandId = value
    this.brandCategory2.emit(this.selectedBrandId)
  }

  // updateSelectedValue(event:number) {
  //   this.selectedBrandId= event
  // }





  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }


  setCurrentBrandCategory(brand:Brand){
    this.currentBrandCategory=brand;
  }

  setCurrentBrand(brandId:number) {
    this.brandCategory1 = brandId;
    console.log(this.brandCategory1)
  }

  getCurrentBrandCategoryClass(brand:Brand){
    if(brand==this.currentBrandCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllBrandCategoryClass(){
    if(!this.currentBrandCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }





}
