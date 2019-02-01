import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  users:any = [];
  showDetail:boolean = false;
  showuserId:number;

  showDetails(id:number){
    this.showuserId = id;
    this.showDetail = true;
  }

  constructor(private userSer:UserService) { }

  ngOnInit() {
    this.userSer.getUsers().subscribe((data:any) => {
      for(let i=0;i<data.length;i++){
        this.users.push(data[i]);
      }
    })
  }
}
