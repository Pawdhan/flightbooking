import { Component, OnInit } from '@angular/core';
import Book_Flight from '../entity/Book_Flight';

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
  fromDate: Date = new Date();
  toDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
