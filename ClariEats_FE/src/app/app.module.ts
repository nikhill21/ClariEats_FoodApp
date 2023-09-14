import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddFoodProductComponent } from './add-food-product/add-food-product.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegComponent } from './reg/reg.component';
import { ViewBranchManagerComponent } from './view-branch-manager/view-branch-manager.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ManagerDashboardComponent,
    ViewMenuComponent,
    AddFoodProductComponent,
    ViewUserComponent,
    EditUserComponent,
    ViewOrdersComponent,
    CreateOrderComponent,
    StaffDashboardComponent,
    AdminDashboardComponent,
    RegComponent,
    ViewBranchManagerComponent,
    EditMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
