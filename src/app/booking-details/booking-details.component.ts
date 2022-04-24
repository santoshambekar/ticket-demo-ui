import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  id: number
  booking:Booking
  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.booking  = new Booking();
    this.bookingService.getBookingById(this.id).subscribe( (res:any) => {
      if (res.status) {
        this.booking = res.data;
        this.booking.category = this.bookingService.getTrainCategory(this.booking.category);
      }
    });
  }
}
