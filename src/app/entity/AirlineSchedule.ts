export class AirlineSchedule {
    flightNumber: string = "";
	airline: string = "";
	fromPlace: string = "";
	toPlace: string = "";
	startDate: Date = new Date();
	endDate: Date = new Date();
//	scheduledDays: string[] = [];
	instrumentUsed: string = "";
	businessClassSeats!: number;
	nonBusinessClassSeats!: number;
	noOfRows!: number;	
	cost!: number;
	meal: string = "";
}