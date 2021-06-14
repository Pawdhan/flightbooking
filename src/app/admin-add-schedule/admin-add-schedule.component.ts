import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Airline from '../entity/Airline';
import { AirlineSchedule } from '../entity/AirlineSchedule';
import { FlightBookingService } from '../flight-booking-service';

@Component({
  selector: 'app-admin-add-schedule',
  templateUrl: './admin-add-schedule.component.html',
  styleUrls: ['./admin-add-schedule.component.scss']
})
export class AdminAddScheduleComponent implements OnInit {
  flightNumber!: number;
  airline: Airline = new Airline();
  airlineSchedule: AirlineSchedule = new AirlineSchedule();
  scheduleForm!: FormGroup;
  submitted = false;
  startTime: Date = new Date();
  endTime: Date = new Date();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private flightService: FlightBookingService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.route.queryParams.subscribe(params => {
      this.flightNumber = params['flightNumber'];
    });
    this.getFlightByFlightNumber();     
  }

  initializeForm() {
    this.scheduleForm = this.formBuilder.group({
      fromPlace: ['', Validators.required],
      toPlace: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      instrumentUsed: ['', [Validators.required]],
      businessClassSeats: [undefined, Validators.required],
      nonBusinessClassSeats: [undefined, Validators.required],
      noOfRows: [undefined, Validators.required],
      cost: [undefined, Validators.required],
      meal: ['', Validators.required]
    });
  }

  getFlightByFlightNumber() {
    this.flightService.getFlightByFlightNumber(this.flightNumber).subscribe(res => {
      this.airline = res as Airline;
      console.log(this.airline);
    }, error => {
      alert('Error while fetching airline');
    });
  }

  get f() { return this.scheduleForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.scheduleForm.invalid) {
          return;
      }
      this.airlineSchedule = this.scheduleForm.value;
      this.airlineSchedule.airline = this.airline.airline;
      this.airlineSchedule.flightNumber = this.airline.flightNumber;
      this.flightService.addAirlineSchedule(this.airlineSchedule).subscribe(res => {
        alert('Schedule added sucessfully!');
        this.onReset();
      }, error => {
        alert('Error while adding schedule');
        this.onReset();
      });
    }

  onReset() {
      this.submitted = false;
      this.scheduleForm.reset();
      this.airlineSchedule = new AirlineSchedule();
  }
}
