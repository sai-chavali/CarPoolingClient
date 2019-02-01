import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }
  goToRideSearch(){
    this.router.navigate(['bookride',],{relativeTo:this.activatedRoute});
  }

  goToWallet(){
    this.router.navigate(['wallet'],{relativeTo:this.activatedRoute});
  }
  goToRideForm(){
    this.router.navigate(['rideform'],{relativeTo:this.activatedRoute});
  }
  logout(){
    this.router.navigate(['login']);
  }
  rating(){
    this.router.navigate(['rating'],{relativeTo:this.activatedRoute});
  }
}
