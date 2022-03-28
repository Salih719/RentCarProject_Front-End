import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RentalComponent } from './components/rental/rental.component';
import { DetailComponent} from "./components/detail/detail.component";
import { DetailLayoutComponent} from "./components/detail-layout/detail-layout.component"
import { CarsLayoutComponent } from './components/cars-layout/cars-layout.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"carslayout", component:CarsLayoutComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"details/:carId", component:DetailComponent},

  {path:"rentals", component:RentalComponent},

  {path:"home1", component:HomeComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
