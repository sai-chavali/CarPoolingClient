import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from "../services";

import { AlertService, UserService } from '../services';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//     providedIn: 'root'
//   })

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    email : string;
    user_name : string;
    password : string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private httpClient: HttpClient) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            user_name: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }

        const email = this.registerForm.get("email").value;
        const password = this.registerForm.get("password").value;
        const userName = this.registerForm.get("userName").value;
        
        console.log("start ", email, " ", password);

        this.httpClient.post("http://localhost:8080/user/add", {
            "email" : this.registerForm.get("email").value,
            "password" : this.registerForm.get("password").value,
            "user_name" : this.registerForm.get("user_name").value,
        })
        .subscribe(data => {
          console.log("result came");
          console.log(data);
      //    this.router.navigate(['/home']);
        });
        console.log("end");

        

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
