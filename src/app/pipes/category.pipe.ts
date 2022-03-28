import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/Entities/brand';
import { Car } from '../models/Entities/car';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Car[], brand: number): Car[] {
    return brand?value.filter(c => c.brandId === brand):value
  }

}

