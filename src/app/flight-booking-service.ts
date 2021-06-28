import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import Airline from './entity/Airline';
import { Admin, User } from './entity/User';
import { map } from 'rxjs/operators';
import { AirlineSchedule } from './entity/AirlineSchedule';
import { Globals } from './Globals';
const BASE_URL = "http://localhost:8282/admin/";
@Injectable()//Bean
export  class FlightBookingService {

    constructor(private http: HttpClient, private global: Globals) { }
    
    adminLogin(admin: Admin) {
        return this.http.post(BASE_URL + 'authenticate', admin, {
            headers: {
                "content-type": "application/json"            }
        }).pipe(
            map(
              userData => {
               const user = JSON.parse(JSON.stringify(userData))
               let tokenStr= 'Bearer '+user.token;
               sessionStorage.setItem('token', tokenStr);
               return userData;
              }
            )
       
           );;
    }
    
    loginUser(email: String, password: String) {
        return this.http.get(BASE_URL + 'flight/usersignin/' + email + "/" + password, {
            headers: {
                "Authorization": sessionStorage.getItem('token')!      
            }
        });
    }
    
    registerUser(user: User) {
        return this.http.post(BASE_URL + 'flight/usersignup', user, {
            headers: {
                "content-type": "application/json",
                "Authorization": sessionStorage.getItem('token')!
            }
        });
    }
    
    getAirlines() {
        return this.http.get(BASE_URL + 'airline/getairlines', {
            headers: {
                "Authorization": sessionStorage.getItem('token')!            }
        });
    }

    getListOfAirlines() {
        return this.http.get(BASE_URL + 'airline/getlistofairlines', {
            headers: {
                "Authorization": sessionStorage.getItem('token')!            }
        });
    }

    addAirline(airline: Airline) {
        return this.http.post(BASE_URL + 'airline/register', airline, {
            headers: {
                "content-type": "application/json",
                "Authorization": sessionStorage.getItem('token')!
            }
        });
    }

    addAirlineSchedule(airlineSchedule: AirlineSchedule) {
        return this.http.post(BASE_URL + 'airline/inventory/add', airlineSchedule, {
            headers: {
                "content-type": "application/json",
                "Authorization": sessionStorage.getItem('token')!
            }
        });
    }

    getAllAirlineSchedules() {
        return this.http.get(BASE_URL + 'airline/getallairlineschedules', {
            headers: {
                "Authorization": sessionStorage.getItem('token')!            }
        });
    }

    searchBySchedule(airline: string, flightNumber: number, instrument: string) {
        let params = new HttpParams();
        params=params.append('airline', airline);
        params=params.append('flightnumber', flightNumber);
        params=params.append('instrument', instrument);
        console.log('params: '+ params);
        return this.http.get(BASE_URL + 'airline/getschedulesbyfilter?' + params, {
            headers: {
                "Authorization": sessionStorage.getItem('token')!            }
        });
    }

    getFlightByFlightNumber(flightNumber: number) {
        return this.http.get(BASE_URL + 'airline/getairlinebyflightnumber/' + flightNumber, {
            headers: {
                "Authorization": sessionStorage.getItem('token')!            }
        });

    }

    getflightschedules(oneWay: boolean, fromPlace: string, toPlace: string, startDate: string, endDtate: string) {
        let params = new HttpParams();
        params=params.append('oneWay', oneWay);
        params=params.append('fromPlace', fromPlace);
        params=params.append('toPlace', toPlace);
        params=params.append('startDate', startDate);
        params=params.append('endDate', endDtate);
        console.log('params: '+ params);
        return this.http.get(BASE_URL + 'airline/getflightschedules?' + params, {
            headers: {
                "Authorization": sessionStorage.getItem('token')!            }
        });
    }

    deleteSchedule(id: number) {
        return this.http.delete(BASE_URL + 'airline/deleteschedule/' + id, {
            headers: {
                "Authorization": sessionStorage.getItem('token')!            }
        });
    }
}
