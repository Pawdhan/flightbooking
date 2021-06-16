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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightBookingService } from './flight-booking-service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TicketBookingService } from './ticket-booking-service';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './register/register.component'
import { Globals } from './Globals';
import { AdminAddScheduleComponent } from './admin-add-schedule/admin-add-schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    UserBookFlightComponent,
    UserManageBookingsComponent,
    UserBookingHistoryComponent,
    AdminManageSchedulesComponent,
    AdminManageAirlinesComponent,
    LoginComponent,
    RegisterComponent,
    AdminAddScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, NgbModule, MDBBootstrapModule.forRoot(),
    NavbarModule, WavesModule, ButtonsModule, ReactiveFormsModule, BrowserAnimationsModule, MatSelectModule, MatTableModule,
    MatCardModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule
    ],
  providers: [FlightBookingService, TicketBookingService, Globals, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
