import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit, OnChanges {
  userDetails: any;
  @Input() userId: Object;

  constructor(private httpClient: HttpClient) {}
  save: boolean = false;

  switchEditSave() {
    this.save = !this.save;
  }
  saveUserDetails() {
    this.httpClient
      .post(
        "http://localhost:8080/user/details/" + this.userId,
        this.userDetails
      )
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
    this.switchEditSave();
  }

  deleteUser() {}

  ngOnInit() {
    this.httpClient
      .get("http://localhost:8080/user/details/" + this.userId)
      .subscribe(data => {
        this.userDetails = data;
        // this.save = false;
        // this.saveUserDetails();
      });
  }

  ngOnChanges() {
    this.ngOnInit();
  }
}
