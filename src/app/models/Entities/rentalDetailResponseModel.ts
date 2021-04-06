import { ResponseModel } from "../ResponseModels/responseModel";
import { RentalDetail } from "./rentalDetail";

export interface RentalDetailResponseModel extends ResponseModel{
    data:RentalDetail[]
}