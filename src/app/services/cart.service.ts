import { Injectable } from '@angular/core';
import { Car } from '../models/Entities/car';
import { CarDetail } from '../models/Entities/carDetail';
import { CartDetailItem } from '../models/Entities/cartDetailItem';
import { CartDetailItems } from '../models/Entities/cartDetailItems';
import { CartItem } from '../models/Entities/cartItem';
import { CartItems } from '../models/Entities/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  // burdaki car cartItemdeki carDetail in car'ı sorun yapmana gerek yok (find(c => c.car)) tam olarak burdaki car. dönüp bakma.

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.id===car.id);
    if(item){
      item.quantity +=1;
    }else{
      let cartItem= new CartItem();
      cartItem.car= car;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }

  addToCartDetail(carDetail:CarDetail){
    let item = CartDetailItems.find(c=>c.carDetail.carId===carDetail.carId);
    if(item){
      item.quantity +=1;
    }else{
      let cartDetailItem= new CartDetailItem();
      cartDetailItem.carDetail= carDetail;
      cartDetailItem.quantity=1;
      CartDetailItems.push(cartDetailItem)
    }
  }

  removeFromCart(car:Car){
    let item:CartItem = CartItems.find(c=>c.car.id===car.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  removeFromCartDetail(carDetail:CarDetail){
    let item:CartDetailItem = CartDetailItems.find(c=>c.carDetail.carId===carDetail.carId);
    CartDetailItems.splice(CartDetailItems.indexOf(item), 1);
  }

  list():CartItem[]{
    return CartItems;
  }

  list2():CartDetailItem[] {
    return CartDetailItems;
  }


}
