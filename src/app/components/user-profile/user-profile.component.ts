import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit,OnChanges {
  userDetails : any
  @Input() userId: Object;

  constructor(private httpClient:HttpClient) { }

  editUserDetails() {
    this.httpClient.post('http://172.21.26.6:8080/user/details/' + this.userId,this.userDetails);
  }

  ngOnInit() {
    this.httpClient.get('http://172.21.26.6:8080/user/details/' + this.userId).subscribe(data=>{
      this.userDetails = data
    })
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
