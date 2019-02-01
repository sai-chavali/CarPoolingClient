import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app.routing";
import { MenuModule } from "./components/menu/menu.module";
import { AppComponent } from "./app.component";

import { AgmCoreModule } from "@agm/core";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

import { AdminContainerComponent } from "./containers/admin-container/admin-container.component";

import { AlertComponent } from "./directives";
import { AuthGuard } from "./guards";

import { AlertService, AuthenticationService, UserService } from "./services";
import { HomeComponent } from "./home";
import { WalletComponent } from './wallet/wallet.component';
import { RidedetailsComponent } from './ridedetails/ridedetails.component';
import { RideslistComponent } from './rideslist/rideslist.component';
import { RidesearchComponent } from './ridesearch/ridesearch.component';
import { BrowserModule } from '@angular/platform-browser';

import {  MatIconModule,  MatTabsModule, MatAutocompleteModule, 
         MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';


import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';


import { UserhomeComponent } from './components/userhome/userhome.component';
import { RideFormComponent } from './components/ride-form/ride-form.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MenuModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule, HttpClientModule,
        MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatOptionModule, MatDatepickerModule, 
        MatNativeDateModule, MatCardModule,
        BrowserAnimationsModule, NoopAnimationsModule, MatTabsModule, MatAutocompleteModule, MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY"
    })
  ],
  declarations: [
    AppComponent,
    AdminContainerComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    AppComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    WalletComponent,
    RidedetailsComponent,
    UserhomeComponent,
    RidesearchComponent,
    RideslistComponent,
    RideFormComponent,
    RatingComponent
  ],
  providers: [AuthGuard, AlertService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
