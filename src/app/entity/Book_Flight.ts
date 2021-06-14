import { AirlineSchedule } from "./AirlineSchedule";

export default class Book_Flight {
    pnrNumber!: number;
    onwardAirline: string = "";
    returnAirline: string = "";
    userName: string = "";
    email: string = "";
    startDate: string = "";
    endDate: string = "";
    // passengers: Passenger[] = [];
    meal: string = "";
    noOfSeats!: number;
    trip: string = "";
    seatNumber!: string;
    status: string = "";
    cost!: number;
}

export class Passenger {
    name: string = "";
    gender: string = "";
    age!: number;
    seatNumber!: string;
}

export class FlightSchedules {
    onwardSchedules: AirlineSchedule[] = [];
    returnSchedules: AirlineSchedule[] = [];
}