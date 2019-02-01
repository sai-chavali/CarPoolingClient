import { Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { MapsComponent } from '../../components/maps/maps.component';

export const AdminContainerRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UsersListComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'maps',           component: MapsComponent },
];
