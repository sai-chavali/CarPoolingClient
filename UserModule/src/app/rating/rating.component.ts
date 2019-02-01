import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  title = 'CarPooling'; 
  starList: boolean[] = [true,true,true,true,true];      
  rating:number;
  moneyVisible: boolean
  money:number;
  w_id:number;
  constructor(private httpClient: HttpClient) { }
  setStar(data:any){
        this.rating=data+1;                               
        for(var i=0;i<=4;i++){  
          if(i<=data){  
            this.starList[i]=false;  
          }  
          else{  
            this.starList[i]=true;  
          }  
        }
      console.log("start");
      this.httpClient.post(
        'http://172.21.26.178:8080/ratinguser', {
          "rating": this.rating,
	        "uId": this.rating,
	        "feedback": "None"
        }
      ).subscribe(
        data => console.log("Posted SuccessFully in Datbase")
      );
      console.log("end");
  }

  ngOnInit() {
   
  }

}
