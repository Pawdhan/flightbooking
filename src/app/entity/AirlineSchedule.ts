export class AirlineSchedule {
    id!: number;
	flightNumber!: number;
	airline: string = "";
	fromPlace: string = "";
	toPlace: string = "";
	startDate: Date = new Date();
	endDate: Date = new Date();
	startTime: string = "";
	endTime: string = "";
//	scheduledDays: string[] = [];
	instrumentUsed: string = "";
	businessClassSeats!: number;
	nonBusinessClassSeats!: number;
	noOfRows!: number;	
	cost!: number;
	meal: string = "";
}