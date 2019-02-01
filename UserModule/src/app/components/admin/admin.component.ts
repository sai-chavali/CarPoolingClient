import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { RideService } from 'src/app/services/ride.service';
import { ELEMENT_MARKER } from '@angular/core/src/render3/interfaces/i18n';


export interface PeriodicElement {
  regNo: string;
  vehicleID: number;
  userID: number;
  noOfSeats: number;
  name: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ELEMENT_DATA:PeriodicElement[] = [];
  dataSource:any;
  displayedColumns: string[] = ['vehicleID', 'regNo', 'userID', 'noOfSeats', 'name'];

  constructor(private rideSer:RideService) {}
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.rideSer.getRides().subscribe((data:any) => {
      for(let i=0;i<data.length;i++){
        this.ELEMENT_DATA.push(data[i].vehicle);  
      }
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    })
  }
}
