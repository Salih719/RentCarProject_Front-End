import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/Entities/car';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: Car[], color: number): Car[] {
    return color?value.filter(c => c.colorId === color):value
  }

}
