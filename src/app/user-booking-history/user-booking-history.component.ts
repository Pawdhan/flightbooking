import { Component, OnInit } from '@angular/core';
import Book_Flight from '../entity/Book_Flight';
import { FlightBookingService } from '../flight-booking-service';
import { Globals } from '../Globals';
import { TicketBookingService } from '../ticket-booking-service';

@Component({
  selector: 'app-user-booking-history',
  templateUrl: './user-booking-history.component.html',
  styleUrls: ['./user-booking-history.component.scss']
})
export class UserBookingHistoryComponent implements OnInit {
  ticketBookings: Book_Flight[] = [];

  constructor(private global: Globals, private flightBookingService: TicketBookingService) { }

  ngOnInit(): void {
    
    this.getTicketBookingHistory();
  }

  getTicketBookingHistory() {
    this.flightBookingService.getUserBookings(this.global.user.email).subscribe(res => {
      this.ticketBookings = res as Book_Flight[];
    }, error => {
      alert('Error while fetching tickets');
    })
  }
}
