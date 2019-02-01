import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { IVehicle } from 'src/app/models/vehicle.model';

@Component({
  selector: 'app-ride-form',
  templateUrl: './ride-form.component.html',
  styleUrls: ['./ride-form.component.css']
})

export class RideFormComponent implements OnInit {

  // min and max dates for datepicker
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  // form control
  rideSource = new FormControl('');
  rideDestination = new FormControl('');
  costPerPerson = new FormControl('');
  rideDate = new FormControl('');
  vehicleObj = new FormControl('');

  userId: number;
  formControl = new FormControl();
  formGroup = new FormGroup({
    locationControl: this.formControl, rideSource: this.rideSource, costPerPerson: this.costPerPerson,
    rideDestination: this.rideDestination, rideDate: this.rideDate, vehicleObj: this.vehicleObj
  });
  vehicleList$: Observable<IVehicle[]>;
  locationList: string[] = ['Himayathnagar', 'Gachibowli', 'Nagole', 'Nanakramguda'];   // get this info from google maps api
  filteredLocations: Observable<string[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.userId = 1;        // get this value once user logs in
    this.vehicleList$ = this.httpClient.get<IVehicle[]>(
      'http://172.21.26.6:8080/user/vehicle/all/' + this.userId.toString()
    );

    this.filteredLocations = this.formControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  displayFn(location?: string): string | undefined {
    return location ? location : undefined;
  }


  onSubmit(form: NgForm) {
    const rideSource = this.rideSource.value;
    const rideDestination = this.rideDestination.value;
    const costPerPerson = this.costPerPerson.value;
    const vehicle = this.vehicleObj.value;
    const rideDate = this.rideDate.value;

    const vehicleId = vehicle.vehicleId;
    const vehicleSeats = vehicle.seatsAvailable;
    // json obj for ride to post
    const ride = {
      'source': rideSource,
      'destination': rideDestination,
      'driverId': 2,
      'rideDate': rideDate.toJSON().slice(0, 10) + ' ' + rideDate.toJSON().slice(11, 19),
      'id': 6,
      'createdDate': new Date().toJSON().slice(0, 10) + ' ' + new Date().toJSON().slice(11, 19),
      'vehicleId': vehicleId,
      'costPerPerson': costPerPerson,
      'seatsAvailable': vehicleSeats
    };
    // call the ride api to store the ride
    this.httpClient.post('http://172.21.26.6:8080/admin/api/add', ride).subscribe(data => console.log('posted'));
    console.log(ride);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.locationList.filter(option => option.toLowerCase().includes(filterValue));
  }
}
