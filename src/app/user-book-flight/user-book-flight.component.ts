import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AirlineSchedule } from '../entity/AirlineSchedule';
import Book_Flight, { FlightSchedules } from '../entity/Book_Flight';
import { FlightBookingService } from '../flight-booking-service';
import { Globals } from '../Globals';
import { TicketBookingService } from '../ticket-booking-service';

@Component({
  selector: 'app-user-book-flight',
  templateUrl: './user-book-flight.component.html',
  styleUrls: ['./user-book-flight.component.scss']
})
export class UserBookFlightComponent implements OnInit {

  bookFlight: Book_Flight = new Book_Flight();
  trip: string = "";
  from: string = "";
  to: string = "";
  fromDate: string = "";
  toDate: string = "";
  oneWay: boolean = false;
  flightSchedules: FlightSchedules = new FlightSchedules();
  displayedColumns = ['position', 'airline', 'flightNumber', 'cost'];
  displayedColumnsReturn = ['position', 'airline', 'flightNumber', 'cost'];
  onwardData = new MatTableDataSource<AirlineSchedule>(this.flightSchedules.onwardSchedules);
  returnData = new MatTableDataSource<AirlineSchedule>(this.flightSchedules.returnSchedules);
  selectedRowIndex1: any = undefined;
  selectedRowIndex2: any = undefined;
  onwardCost = 0;
  returnCost = 0;
  meals: string[] = ['Veg', 'Non-Veg'];
  seats: string[] = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C'];
  continue: boolean = false;
  constructor(private flightBooking: FlightBookingService, private ticketBooking: TicketBookingService, private router: Router, private global: Globals) { }

  ngOnInit(): void {

  }

  highlightOnward(row: any, i: number){
    console.log(row);
    this.selectedRowIndex1=i;
    this.bookFlight.startDate = row.startDate;
    this.bookFlight.onwardAirline = row.airline;
    this.onwardCost = row.cost;
  }
  
  highlightReturn(row: any, i: number){
    console.log(row);
    this.selectedRowIndex2=i;
    this.bookFlight.endDate = row.startDate;
    this.bookFlight.returnAirline = row.airline;
    this.returnCost = row.cost;

  }

  getFlightSchedules() {
    this.oneWay = this.trip == 'ONE_WAY' ? true : false;
    this.flightBooking.getflightschedules(this.oneWay, this.from, this.to,
       this.fromDate, this.toDate).subscribe(res => {
        this.flightSchedules = res as FlightSchedules;
        this.onwardData = new MatTableDataSource<AirlineSchedule>(this.flightSchedules.onwardSchedules);
        this.returnData = new MatTableDataSource<AirlineSchedule>(this.flightSchedules.returnSchedules);
       }, error => {
        alert('Error while fetching schedules');
       });
  }

  bookTicket() {
    this.ticketBooking.bookFlightTicket(this.bookFlight).subscribe(res => {
      this.bookFlight = res as Book_Flight;
      alert('Ticket booked successfully!');
      this.router.navigate(['/managebookings']);
    }, error => {
      alert('Error while booking ticket!');
    });
  }

  updateData() {
    this.continue = true;
    this.bookFlight.userName = this.global.user.name;
    this.bookFlight.email = this.global.user.email;
    this.bookFlight.startDate = this.fromDate;
    this.bookFlight.endDate = this.toDate;
    this.bookFlight.trip = this.trip;
    this.bookFlight.status = 'ACTIVE';

    this.bookFlight.cost = this.oneWay ? this.onwardCost: this.onwardCost + this.returnCost;
    console.log(this.bookFlight);
  }
}
