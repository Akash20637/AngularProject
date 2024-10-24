export interface FlightList{
    flightNumber : string,
    airline: string,
    departure: string,
    destination: string,
    departureTime: string,
    arrivalTime: string,
    price: number
}

export interface BookFlight{
    user : string,
    flight_info : FlightList | undefined,
    person_info : PersonInfo
}

export interface PersonInfo{
    name : string | null,
    age : string | null,
    email : string | null,
    number : string | null
}