export interface City {
    id: string
    name: string
  }
  
  export interface Bus {
    id: string
    name: string
    type: string
    departureCity: string
    arrivalCity: string
    departureTime: string
    arrivalTime: string
    price: number
    availableSeats: number
  }
  
  export interface User {
    id: string
    name: string
    email: string
  }