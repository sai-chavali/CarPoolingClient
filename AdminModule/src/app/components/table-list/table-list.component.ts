import { Component, OnInit } from '@angular/core';
import { RideService } from 'src/app/services/ride.service';
import { BookingService } from 'src/app/services/booking.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  rideFields: String[] = ['Name of Offerer','Source', 'Destination', 'Cost per Person', 'No of seats ','Ride Date'];
  rides: any = [];
  bookingFields: String[] = ['Name of the user','Seats Booked','Rider Name','Ride Date'];
  bookings: any = [];
  names:String[] = ['Sai','kiran','naveen','abhinav','a'];


  editRide(index:number){
    // this.http.
  }
  constructor(private rideSer: RideService, private bookingSer:BookingService,private http:HttpClient) { }

  ngOnInit() {
    this.rideSer.getRides().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        data[i].ride.driverName = this.names[i];
        this.rides.push(data[i].ride);
      }
    })
    this.bookingSer.getAllBookings().subscribe((data:any) => {
      this.bookings = data;
    })
  }
  
  deleteRide(index:number){
    this.rides.splice(index,index+1);
    this.http.delete('http://localhost:8000/admin/api/delete/' + this.rides[index].id).subscribe(data => {
      console.log("POST Request is successful ", data);
    },
    error => {
      console.log("Error", error);
    }
  );
  }

}
