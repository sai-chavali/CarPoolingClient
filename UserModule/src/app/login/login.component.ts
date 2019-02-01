import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";


import { AlertService, AuthenticationService } from "../services";
import { HttpClient } from "@angular/common/http";

@Component({ templateUrl: "login.component.html" })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/userhome";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get("email").value;
    const pass = this.loginForm.get("password").value;
    console.log("start ", email, " ", pass);

    this.httpClient
      .post("http://localhost:8080/user/login", {
        email: email,
        password: pass
      })
      .subscribe(data => {
        console.log("result came");
        console.log(data);
        this.router.navigate(['/userhome']);
      });

    console.log("end");

    this.loading = true;
    this.authenticationService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("navigation");
          this.router.navigate([this.returnUrl]);
          this.router.navigate(['/userhome']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
