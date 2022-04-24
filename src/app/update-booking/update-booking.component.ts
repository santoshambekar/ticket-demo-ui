import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking, GenericObject } from '../booking';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  id: number;
  booking:Booking = new Booking();
  trainNumbers: GenericObject[];
  trainCategories: GenericObject[];

  constructor(private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bookingService.getBookingById(this.id).subscribe((resp: any) => {
      this.booking = resp.data;
    }, error => console.log(error));

    this.loadTrainData();
  }

  onSubmit(){
    this.bookingService.createBooking(this.booking).subscribe( data =>{
      this.goToBookingList();
    }
    , error => console.log(error));
  }

  goToBookingList(){
    this.router.navigate(['/bookings']);
  }

  loadTrainData() {
    this.trainNumbers = this.bookingService.getTrainNumbers();
    this.trainCategories = this.bookingService.getTrainCategories();
  }
}
