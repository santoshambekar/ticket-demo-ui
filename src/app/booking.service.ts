import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Booking, GenericObject, Login} from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseURL = "http://localhost:8080/api/v1/bookings";

  private loginURL = "http://localhost:8080/api/v1/login";

  constructor(private httpClient: HttpClient) { }

  login(userData: Login): Observable<Object>{
    return this.httpClient.post(`${this.loginURL}`, userData);
  }

  getTrainNumbers() : GenericObject[] {
    return [
      {
        name : "Kakatiya Express",
        value : "1230"
      },
      {
        name : "Nagaresol Express",
        value : "1231"
      },
      {
        name : "Devagiri Express",
        value : "1233"
      }
    ];
  }

  getTrainNumber(value: string) : string {
    let trainNumbers = this.getTrainNumbers();
    for (let i=0; i<trainNumbers.length; i++) {
      if (trainNumbers[i].value == value) {
        return trainNumbers[i].name;
      }
    }
    return "";
  }

  getTrainCategories() : GenericObject[] {
    return [
      {
        name : "AC-Compartment",
        value : "ACC"
      },
      {
        name : "Sleeper",
        value : "SL"
      },
      {
        name : "General",
        value : "GEN"
      }
    ];
  }

  getTrainCategory(value: string) : string {
    let categories = this.getTrainCategories();
    for (let i=0; i<categories.length; i++) {
      if (categories[i].value == value) {
        return categories[i].name;
      }
    }
    return "";
  }
  
  getBookingsList(): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(`${this.baseURL}`);
  }

  createBooking(booking: Booking): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`, booking);
  }

  getBookingById(id: number): Observable<Booking>{
    return this.httpClient.get<Booking>(`${this.baseURL}/${id}`);
  }

  deleteBooking(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
