import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-rideslist',
  templateUrl: './rideslist.component.html',
  styleUrls: ['./rideslist.component.css']
})
export class RideslistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }
  onBooking(rideId){
    this.router.navigate(['book'],{relativeTo:this.activatedRoute});
  }

}
