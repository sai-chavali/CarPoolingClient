import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from '../../filter.pipe';
import { AdminContainerRoutes } from './admin-container.routing';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { MapsComponent } from '../../components/maps/maps.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { DownlaodcsvComponent } from '../../components/downlaodcsv/downlaodcsv.component';
import { ChartsModule } from 'ng2-charts';
import { Angular2CsvModule } from 'angular2-csv';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatIconModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminContainerRoutes),
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatInputModule,
    Angular2CsvModule,
    ChartsModule,
    MatTooltipModule,
  ],
  declarations: [
    FilterPipe,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    MapsComponent,
    DownlaodcsvComponent,
    PieChartComponent, 
    UsersListComponent
  ]
})

export class AdminContainerModule {}
