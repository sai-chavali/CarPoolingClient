import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { RideService } from 'src/app/services/ride.service'

@Component({
  selector: 'app-ridesearch',
  templateUrl: './ridesearch.component.html',
  styleUrls: ['./ridesearch.component.css']
})
export class RidesearchComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private router: Router,private rideservice:RideService) { }

  ngOnInit() {
  }
  getAllRides(){
    
    this.router.navigate(['ridelist'],{relativeTo:this.activatedRoute});
  }

}
