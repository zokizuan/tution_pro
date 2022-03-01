import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RideManagementRoutingModule } from './rideManagement-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Page404Component } from './page404/page404.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SafePipe } from 'src/app/safe.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingComponent,
    SidebarComponent,
    Page404Component,
    DashboardLayoutComponent,
    NavbarComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RideManagementRoutingModule,
    SharedModule,
  ],
  exports: [
    // DashboardComponent,  
  ]
})
export class RideManagementModule { }
