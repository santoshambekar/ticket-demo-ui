import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking'
import { BookingService } from '../booking.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookings: Booking[];

  constructor(private bookingService: BookingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBookings();
  }

  private getBookings(){
    this.bookingService.getBookingsList().subscribe((resp: any) => {
      this.bookings = resp.data;
      if(this.bookings.length){
        this.bookings.forEach(element => {
          element.category = this.bookingService.getTrainCategory(element.category);
        });
      }
      this.bookings=[...this.bookings];
    });
  }

  bookingDetails(id: number){
    this.router.navigate(['booking-details', id]);
  }

  updateBooking(id: number){
    this.router.navigate(['update-booking', id]);
  }

  deleteBooking(id: number){
    this.bookingService.deleteBooking(id).subscribe( data => {
      console.log(data);
      this.getBookings();
    })
  }
}
