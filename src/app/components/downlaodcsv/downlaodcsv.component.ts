import { Component, OnInit } from "@angular/core";
import { RideService } from "src/app/services/ride.service";
import { CsvConfigConsts } from "angular2-csv";

@Component({
  selector: "app-downlaodcsv",
  templateUrl: "./downlaodcsv.component.html",
  styleUrls: ["./downlaodcsv.component.css"]
})
export class DownlaodcsvComponent implements OnInit {
  constructor(private rideSer: RideService) {}
  items: any = [];
  options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalseparator: ".",
    showLabels: true,
    showTitle: true,
    headers: [
      "source",
      "destination",
      "id",
      "seatsAvailable",
      "costPerPerson",
      "rideDate",
      "regNo",
      "userId",
      "name"
    ]
  };

  ngOnInit() {
    this.rideSer.getRides().subscribe((data:any) => {
      for(let i=0;i<data.length;i++)
        this.items.push(data[i].ride);
    })
  }
}
