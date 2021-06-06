import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import Airline from './entity/Airline';
import { Admin, User } from './entity/User';
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
