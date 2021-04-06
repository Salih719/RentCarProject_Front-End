export interface RentalDetail{
    id:number
    carName:string
    customerName:string
    dailyPrice:number
    rentDate:Date
    returnDate:Date | null
}