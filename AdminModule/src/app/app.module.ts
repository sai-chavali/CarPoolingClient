import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { MenuModule } from './components/menu/menu.module';
import { AppComponent } from './app.component';


import { AgmCoreModule } from '@agm/core';

import { AdminContainerComponent } from './containers/admin-container/admin-container.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MenuModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminContainerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
