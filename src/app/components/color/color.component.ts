import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Color } from 'src/app/models/Entities/color';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input() selectedColorId:number = null;
  @Output() colorCategory = new EventEmitter<number>();

  colors: Color[] = [];
  currentColorCategory:Color;

  // https://localhost:44349/api/cars/getcarsbycolorid?colorid=3   buda çalışıyo


  constructor(
    private colorService:ColorService,
    private carService:CarService
    ) { }

  ngOnInit(): void {
    this.getColors()

  }


  sendColor(value:number) {
    this.selectedColorId =value
    this.colorCategory.emit(this.selectedColorId)
  }





  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }

  getById(id:number) {
    this.carService.getCarsByColor(id)
  }


  setCurrentColorCategory(color:Color){
    this.currentColorCategory = color
  }

  getCurrentColorCategoryClass(color:Color){
    if(color ==this.currentColorCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllColorCategoryClass(){
    if(!this.currentColorCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }




}
