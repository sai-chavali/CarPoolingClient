import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { AuthGuard } from "./guards";
import { RegisterComponent } from "./register";
import { AdminContainerComponent } from "./containers/admin-container/admin-container.component";
import { AppComponent } from "./app.component";
import { WalletComponent } from "./wallet/wallet.component";

import { RidesearchComponent } from "./ridesearch/ridesearch.component";
import { RidedetailsComponent } from "./ridedetails/ridedetails.component";
import { RideslistComponent } from "./rideslist/rideslist.component";
import { UserhomeComponent } from "./components/userhome/userhome.component";
import { RideService } from "./services/ride.service";
import { RideFormComponent } from "./components/ride-form/ride-form.component";
import {RatingComponent} from "./rating/rating.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminContainerComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./containers/admin-container/admin-container.module#AdminContainerModule"
      }
    ]
  },

  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  { path: "changePassword", component: ChangePasswordComponent },
  { path: "register", component: RegisterComponent },

  // otherwise redirect to home
  { path: "home", component: HomeComponent },

  {
    path: "userhome",
    component: UserhomeComponent,
    children: [
      { path: "rating", component: RatingComponent },
      { path: "wallet", component: WalletComponent },
      { path: "rideform", component: RideFormComponent },
      { path: "bookride", component: RidesearchComponent },
      { path: "bookride/ridelist", component: RideslistComponent },
      { path: "bookride/ridelist/book", component: RidedetailsComponent }
    ]
  }
  //{ path: , component:WalletComponent}
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
