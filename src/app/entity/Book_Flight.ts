export default class Book_Flight {
    pnrNumber!: number;
    airline: string = "";
    userName: string = "";
    email: string = "";
    passengers: Passenger[] = [];
    meal: string = "";
    noOfSeats!: number;
    trip: string = "";
}

export class Passenger {
    name: string = "";
    gender: string = "";
    age!: number;
    seatNumber!: number;
}