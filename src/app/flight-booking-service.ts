import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import Airline from './entity/Airline';
import { Admin, User } from './entity/User';
import { AirlineSchedule } from './entity/AirlineSchedule';
const BASE_URL = "http://localhost:8989/api/v1.0/flight/";
@Injectable()//Bean
export  class FlightBookingService {

    constructor(private http: HttpClient) { }
    
    adminLogin(admin: Admin) {
        return this.http.post(BASE_URL + 'admin/login', admin, {
            headers: {
                "content-type": "application/json"
            }
        });
    }
    
    loginUser(email: String, password: String) {
        return this.http.get(BASE_URL + 'admin/usersignin/' + email + "/" + password);
    }
    
    registerUser(user: User) {
        return this.http.post(BASE_URL + 'admin/usersignup', user, {
            headers: {
                "content-type": "application/json"
            }
        });
    }
    
    getAirlines() {
        return this.http.get(BASE_URL + 'airline/getairlines');
    }

    addAirline(airline: Airline) {
        return this.http.post(BASE_URL + 'airline/register', airline, {
            headers: {
                "content-type": "application/json"
            }
        });
    }

    addAirlineSchedule(airlineSchedule: AirlineSchedule) {
        return this.http.post(BASE_URL + 'airline/inventory/add', airlineSchedule, {
            headers: {
                "content-type": "application/json"
            }
        });
    }

    searchBySchedule(flightNumber: number, instrument: string) {
        return this.http.get(BASE_URL + 'airline/getairlineSchedules/' + flightNumber + '/' + instrument);
    }

}
