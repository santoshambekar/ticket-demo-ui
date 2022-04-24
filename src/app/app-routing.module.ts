import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'bookings', component: BookingListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-booking', component: CreateBookingComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-booking/:id', component: UpdateBookingComponent},
  {path: 'booking-details/:id', component: BookingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
