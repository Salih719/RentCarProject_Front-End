export interface Rental{
    id:number
    carId:number
    customerId:number
    status:boolean
    rentDate:Date
    returnDate:Date | null
}