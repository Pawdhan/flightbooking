import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBookFlightComponent } from './user-book-flight/user-book-flight.component';
import { UserManageBookingsComponent } from './user-manage-bookings/user-manage-bookings.component';
import { UserBookingHistoryComponent } from './user-booking-history/user-booking-history.component';
import { AdminManageSchedulesComponent } from './admin-manage-schedules/admin-manage-schedules.component';
import { AdminManageAirlinesComponent } from './admin-manage-airlines/admin-manage-airlines.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { FlightBookingService } from './flight-booking-service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [
    AppComponent,
    UserBookFlightComponent,
    UserManageBookingsComponent,
    UserBookingHistoryComponent,
    AdminManageSchedulesComponent,
    AdminManageAirlinesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, NgbModule, MDBBootstrapModule.forRoot(),
    NavbarModule, WavesModule, ButtonsModule
    ],
  providers: [FlightBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
