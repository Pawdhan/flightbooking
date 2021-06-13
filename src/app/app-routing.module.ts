import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddScheduleComponent } from './admin-add-schedule/admin-add-schedule.component';
import { AdminManageAirlinesComponent } from './admin-manage-airlines/admin-manage-airlines.component';
import { AdminManageSchedulesComponent } from './admin-manage-schedules/admin-manage-schedules.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserBookFlightComponent } from './user-book-flight/user-book-flight.component';
import { UserBookingHistoryComponent } from './user-booking-history/user-booking-history.component';
import { UserManageBookingsComponent } from './user-manage-bookings/user-manage-bookings.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'register',
    component: RegisterComponent

  },
  {
    path: 'manageairlines',
    component: AdminManageAirlinesComponent

  },
  {
    path: 'manageschedules',
    component: AdminManageSchedulesComponent

  },
  {
    path: 'addschedule',
    component: AdminAddScheduleComponent

  },
  {
    path: 'bookflight',
    component: UserBookFlightComponent

  },
  {
    path: 'bookinghistory',
    component: UserBookingHistoryComponent

  },
  {
    path: 'managebookings',
    component: UserManageBookingsComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
