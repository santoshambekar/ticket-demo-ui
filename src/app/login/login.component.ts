import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  constructor(private bookingService: BookingService,
    private router: Router) { }
  ngOnInit(): void {
  }

  signIn(){
    this.bookingService.login(this.login).subscribe( (resp: any) =>{
      console.log(resp);
      if (!resp.status) {
        alert(resp.message);
        return;
      }
      localStorage.setItem("isLoggedIn", "true");
      this.router.navigate(['/create-booking']);
    },
   error => console.log(error));
  }

  goToBookingList(){
    this.router.navigate(['/bookings']);
  }
  
  onSubmit(){
    console.log(this.login);
    this.signIn();
  }

}
