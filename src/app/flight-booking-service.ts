import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import Airline from './entity/Airline';
import { Admin, User } from './entity/User';
import { AirlineSchedule } from './entity/AirlineSchedule';
const BASE_URL = "http://ec2-3-95-243-8.compute-1.amazonaws.com:8282/admin/";
@Injectable()//Bean
export  class FlightBookingService {

    constructor(private http: HttpClient) { }
    
    adminLogin(admin: Admin) {
        return this.http.post(BASE_URL + 'flight/login', admin, {
            headers: {
                "content-type": "application/json"
            }
        });
    }
    
    loginUser(email: String, password: String) {
        return this.http.get(BASE_URL + 'flight/usersignin/' + email + "/" + password);
    }
    
    registerUser(user: User) {
        return this.http.post(BASE_URL + 'flight/usersignup', user, {
            headers: {
                "content-type": "application/json"
            }
        });
    }
    
    getAirlines() {
        return this.http.get(BASE_URL + 'airline/getairlines');
    }

    getListOfAirlines() {
        return this.http.get(BASE_URL + 'airline/getlistofairlines');
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

    getAllAirlineSchedules() {
        return this.http.get(BASE_URL + 'airline/getallairlineschedules');
    }

    searchBySchedule(airline: string, flightNumber: number, instrument: string) {
        let params = new HttpParams();
        params=params.append('airline', airline);
        params=params.append('flightnumber', flightNumber);
        params=params.append('instrument', instrument);
        console.log('params: '+ params);
        return this.http.get(BASE_URL + 'airline/getschedulesbyfilter?' + params);
    }

    getFlightByFlightNumber(flightNumber: number) {
        return this.http.get(BASE_URL + 'airline/getairlinebyflightnumber/' + flightNumber);

    }

    getflightschedules(oneWay: boolean, fromPlace: string, toPlace: string, startDate: string, endDtate: string) {
        let params = new HttpParams();
        params=params.append('oneWay', oneWay);
        params=params.append('fromPlace', fromPlace);
        params=params.append('toPlace', toPlace);
        params=params.append('startDate', startDate);
        params=params.append('endDate', endDtate);
        console.log('params: '+ params);
        return this.http.get(BASE_URL + 'airline/getflightschedules?' + params);
    }

    deleteSchedule(id: number) {
        return this.http.delete(BASE_URL + 'airline/deleteschedule/' + id);
    }
}
