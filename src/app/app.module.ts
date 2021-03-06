import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailLayoutComponent } from './components/detail-layout/detail-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryPipe } from './pipes/category.pipe';
import { CarsLayoutComponent } from './components/cars-layout/cars-layout.component';
import { TestPipe } from './pipes/test.pipe';
import { ColorPipe } from './pipes/color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    RentalComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    BrandComponent,
    CarImageComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    HomeComponent,
    NotfoundComponent,
    DetailComponent,
    DetailLayoutComponent,
    FooterComponent,
    CategoryPipe,
    CarsLayoutComponent,
    TestPipe,
    ColorPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
