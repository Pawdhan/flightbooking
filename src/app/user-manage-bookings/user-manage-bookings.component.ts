import { Component, OnInit } from '@angular/core';
import Book_Flight from '../entity/Book_Flight';
import { FlightBookingService } from '../flight-booking-service';
import { Globals } from '../Globals';
import { TicketBookingService } from '../ticket-booking-service';

@Component({
  selector: 'app-user-manage-bookings',
  templateUrl: './user-manage-bookings.component.html',
  styleUrls: ['./user-manage-bookings.component.scss']
})
export class UserManageBookingsComponent implements OnInit {

  ticketBookings: Book_Flight[] = [];

  constructor(private global: Globals, private flightBookingService: TicketBookingService) { }

  ngOnInit(): void {
    
    this.getTicketBookingHistory();
  }

  getTicketBookingHistory() {
    this.flightBookingService.getActiveUserBookings(this.global.user.email).subscribe(res => {
      this.ticketBookings = res as Book_Flight[];
    }, error => {
      alert('Error while fetching tickets');
    })
  }
}
