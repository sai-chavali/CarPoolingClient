import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels = ['Himayatnagar - Accolite Office', 'Nizampet - Gachibowli', 'Gachibowli - Accolite Office', 'Gachibowli-Secunderabad'];
  public pieChartData = [12, 15, 18, 9];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
