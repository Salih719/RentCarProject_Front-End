import { Rental } from "../Entities/rental";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
    data:Rental[]
    
}