import { Component, OnInit } from '@angular/core';
import Airline from '../entity/Airline';
import { AirlineSchedule } from '../entity/AirlineSchedule';
import { FlightBookingService } from '../flight-booking-service';

@Component({
  selector: 'app-admin-manage-schedules',
  templateUrl: './admin-manage-schedules.component.html',
  styleUrls: ['./admin-manage-schedules.component.scss']
})
export class AdminManageSchedulesComponent implements OnInit {
  search = false;
  selectedAirline: string = "";
  flightNumber!: number;
  instrument: string = "";
  airlines: String[] = [];
  airlineSchedules: AirlineSchedule[] = [];
  constructor(private flightBookingService: FlightBookingService) { }

  ngOnInit(): void {
    this.getAirlines();
  }

  getAirlines() {
    this.flightBookingService.getListOfAirlines().subscribe(res => {
      this.airlines = res as String[];
    }, error => {
      console.log('No flights found');
    });
  }

  searchResults() {
    this.search = true;
    this.flightBookingService.searchBySchedule(this.selectedAirline, this.flightNumber, this.instrument)
    .subscribe(res => {
      this.airlineSchedules = res as AirlineSchedule[];
    })
  }

  clearSearch() {
    this.search = false;
    this.selectedAirline = "";
    this.flightNumber = 0;
    this.instrument = "";
    this.airlineSchedules = [];
  }
}
