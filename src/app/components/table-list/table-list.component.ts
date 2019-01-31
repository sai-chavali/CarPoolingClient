import { Component, OnInit } from '@angular/core';
import { RideService } from 'src/app/services/ride.service'
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  rideFields:String[] = ['Source','Destination','Cost per Person'];
  rides:any = [];

  constructor(private rideSer:RideService) { }

  ngOnInit() {
    this.rideSer.getRides().subscribe((data:any)=>{
      for(let i=0;i<data.length;i++)
        this.rides.push(data[i].ride);
    })
  }

}
