import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  getAllBookings(){
    return this.httpClient.get("http://172.21.26.6:8080/ride/bookings/all");
  }
}
