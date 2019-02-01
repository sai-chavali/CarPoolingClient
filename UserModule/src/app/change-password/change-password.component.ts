import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private httpClient: HttpClient
  ) { }

    // const password = this.changePasswordForm.get("password").value;
    changePasswordForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   }); // reset login status
   

   // get return url from route parameters or default to '/'
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.changePasswordForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {
        return;
    }

    const email = this.changePasswordForm.get("email").value;
    const password = this.changePasswordForm.get("password").value;
    
    this.httpClient
    .post("http://localhost:8080/user/changePassword", {
      email: this.changePasswordForm.get("email").value,
      password: this.changePasswordForm.get("password").value
    
    })
    .subscribe(data => {
      console.log("result came");
      console.log(data);
  //    this.router.navigate(['/home']);
    });
  }
}
