import { Component, OnInit } from '@angular/core';
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
  filteredSchedules: AirlineSchedule[] = [];
  constructor(private flightBookingService: FlightBookingService) { }

  ngOnInit(): void {
    this.getAirlines();
    this.getAllSchedules();
  }

  getAirlines() {
    this.flightBookingService.getListOfAirlines().subscribe(res => {
      this.airlines = res as String[];
    }, error => {
      console.log('No flights found');
    });
  }

  getAllSchedules() {
    this.flightBookingService.getAllAirlineSchedules().subscribe(res => {
      this.airlineSchedules = res as AirlineSchedule[];
    }, error => {
      console.log('Error while fetching schedules');
    });
  }

  searchResults() {
    this.search = true;
    this.flightBookingService.searchBySchedule(this.selectedAirline, this.flightNumber, this.instrument)
    .subscribe(res => {
      this.filteredSchedules = res as AirlineSchedule[];
    }, error => {
      alert('Error while getting schedules');
    })
  }

  clearSearch() {
    this.search = false;
    this.selectedAirline = "";
    this.flightNumber = 0;
    this.instrument = "";
    this.filteredSchedules = [];
    this.getAllSchedules();
  }

  deleteSchedule(id: number) {
    this.flightBookingService.deleteSchedule(id).subscribe(res => {
      alert('Deleted Successfully');
      this.clearSearch();
    }, error => {
      alert('Error while deleting schedule');
    });
  }
}
