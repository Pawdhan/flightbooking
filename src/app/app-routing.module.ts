import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddScheduleComponent } from './admin-add-schedule/admin-add-schedule.component';
import { AdminManageAirlinesComponent } from './admin-manage-airlines/admin-manage-airlines.component';
import { AdminManageSchedulesComponent } from './admin-manage-schedules/admin-manage-schedules.component';
import { AuthGuard } from './auth-guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserBookFlightComponent } from './user-book-flight/user-book-flight.component';
import { UserBookingHistoryComponent } from './user-booking-history/user-booking-history.component';
import { UserManageBookingsComponent } from './user-manage-bookings/user-manage-bookings.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: {roles: 'USER'}

  },
  {
    path: 'manageairlines',
    component: AdminManageAirlinesComponent,
    canActivate: [AuthGuard],
    data: {roles: 'ADMIN'}
    
  },
  {
    path: 'manageschedules',
    component: AdminManageSchedulesComponent,
    canActivate: [AuthGuard],
    data: {roles: 'ADMIN'}

  },
  {
    path: 'addschedule',
    component: AdminAddScheduleComponent,
    canActivate: [AuthGuard],
    data: {roles: 'ADMIN'}

  },
  {
    path: 'bookflight',
    component: UserBookFlightComponent,
    canActivate: [AuthGuard],
    data: {roles: 'USER'}

  },
  {
    path: 'bookinghistory',
    component: UserBookingHistoryComponent,
    canActivate: [AuthGuard],
    data: {roles: 'USER'}

  },
  {
    path: 'managebookings',
    component: UserManageBookingsComponent,
    canActivate: [AuthGuard],
    data: {roles: 'USER'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
