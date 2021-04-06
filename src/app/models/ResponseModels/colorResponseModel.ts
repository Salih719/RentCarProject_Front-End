import { Color } from "../Entities/color";
import { ResponseModel } from "./responseModel";

export interface ColorResponseModel extends ResponseModel{
    data:Color[]
}