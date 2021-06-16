import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import Book_Flight from './entity/Book_Flight';
const BASE_URL = "http://ec2-3-95-243-8.compute-1.amazonaws.com:8282/user/booking/";
@Injectable()//Bean
export  class TicketBookingService {

    constructor(private http: HttpClient) { }
    
    bookFlightTicket(bookFlight: Book_Flight) {
        return this.http.post(BASE_URL + 'newticket', bookFlight, {
            headers: {
                "content-type": "application/json"
            }
        });
    }

    getUserBookings(email: string) {
        return this.http.get(BASE_URL + 'getuserbookings/' + email);

    }

    getActiveUserBookings(email: string) {
        return this.http.get(BASE_URL + 'getactivebookings/' + email);

    }

    cancelTicket(pnrNumber: number) {
        return this.http.put(BASE_URL + 'cancelticket/' + pnrNumber, null);
    }
}
