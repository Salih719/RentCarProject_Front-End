import { ResponseModel } from "../ResponseModels/responseModel";
import { Rental } from "./rental";

export interface RentalResponseModel extends ResponseModel{
    data:Rental[]
}