import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../services';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private httpClient: HttpClient
  ) { }

    forgotPasswordForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


    ngOnInit() {
      this.forgotPasswordForm = this.formBuilder.group({
         email: ['', Validators.required]
      }); // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.forgotPasswordForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.forgotPasswordForm.invalid) {
            return;
        }

        const email = this.forgotPasswordForm.get("email").value;
       
        console.log("For sending email")
        this.httpClient
        .post("http://172.21.26.178:8080/passwordrecovery", {
         
          "toMail": this.forgotPasswordForm.get("email").value,
          "subject": "PassWordRecovery Mail ",
          "text": "Please Enter the Following Link to reset your Password\n\n\n ",
          "link": "  \n http://localhost:4200/changePassword"
        
        })
        .subscribe(data => {
          console.log("result came");
          console.log(data);
      //    this.router.navigate(['/home']);
        });

        this.httpClient.post('https://localhost:8080/user/add', { 
            
            "email": this.forgotPasswordForm.get('email').value,
           
        });
    }

  
}
