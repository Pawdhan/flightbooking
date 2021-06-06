import { Component, OnInit } from '@angular/core';
import Airline from '../entity/Airline';
import { FlightBookingService } from '../flight-booking-service';

@Component({
  selector: 'app-admin-manage-schedules',
  templateUrl: './admin-manage-schedules.component.html',
  styleUrls: ['./admin-manage-schedules.component.scss']
})
export class AdminManageSchedulesComponent implements OnInit {
  search = false;
  airline: string = "";
  flightNumber!: number;
  instrument: string = "";
  airlines: Airline[] = [];
  constructor(private flightBookingService: FlightBookingService) { }

  ngOnInit(): void {
  }
  searchResults() {
    this.search = true;
    this.flightBookingService.searchBySchedule(this.flightNumber, this.instrument)
    .subscribe(res => {
      this.airlines = res as Airline[];
    })
  }
}
