import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Airline from '../entity/Airline';
import { FlightBookingService } from '../flight-booking-service';

@Component({
  selector: 'app-admin-manage-airlines',
  templateUrl: './admin-manage-airlines.component.html',
  styleUrls: ['./admin-manage-airlines.component.scss']
})
export class AdminManageAirlinesComponent implements OnInit {
  airline: Airline = new Airline();
  airlines: Airline[]= [];
  constructor(private flightBookingService: FlightBookingService, private router: Router) { }

  ngOnInit(): void {
    this.getAirlines();
  }

  getAirlines() {
    this.flightBookingService.getAirlines().subscribe(response => {
      this.airlines = response as Airline[];
    })
  }

  addAirline() {
    this.flightBookingService.addAirline(this.airline).subscribe(response =>{
      alert('New Airline added successfully.');
      this.getAirlines();
    }, error =>{
      alert('Error while adding airline: '+ error.error.message);
    })
  }

  addSchedule(flightNumber: number) {
    this.router.navigate(['/addschedule'], { queryParams: {flightNumber : flightNumber} });
  }
}
