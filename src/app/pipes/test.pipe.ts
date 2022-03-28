import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/Entities/car';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: Car[], brand: number): Car[] {
    return brand?value.filter(c => c.brandId === brand):value
  }

  // transform(value: Car[], brandId?: number, colorId?:number): Car[] {
  //   if (brandId) {
  //     value.filter(c=>)
  //   }else if (colorId) {

  //   }else{
  //     return value;
  //   }
  // }

  // Çalışmıyor. bir şeyi test etmek istersem burda deniyorum
  // return brandName?value.filter(c => c.brandName === brandName):value
}
