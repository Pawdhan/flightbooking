import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import Airline from './entity/Airline';
const BASE_URL = "http://localhost:3000/";
@Injectable()//Bean
export  class FlightBookingService {
    constructor(private http: HttpClient) { }
    getAirlines() {
        return this.http.get(BASE_URL + 'airlines');
    }

    addAirline(airline: Airline) {
        return this.http.post(BASE_URL + 'airlines', airline, {
            headers: {
                "content-type": "application/json"
            }
        });
    }
    
    searchBySchedule(id: number, airline: string, instrument: string) {
        const param = new HttpParams();
        param.append("id", id);
        param.append("name", airline);
        param.append("instrument", instrument);
        return this.http.get(BASE_URL + 'airlines?' + param);
    }

}
