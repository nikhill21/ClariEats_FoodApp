import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodProductComponent } from './add-food-product/add-food-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminGuard } from './Guards/admin.guard';
import { ManagerGuard } from './Guards/manager.guard';
import { StaffGuard } from './Guards/staff.guard';
import { LoginComponent } from './login/login.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { RegComponent } from './reg/reg.component';
import { ViewBranchManagerComponent } from './view-branch-manager/view-branch-manager.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "registration/:role", component: RegistrationComponent},
  {path: "manager-dashboard", component: ManagerDashboardComponent},
  {path: "menu", component: ViewMenuComponent},
  {path: "add-foodproduct", component: AddFoodProductComponent},
  {path: "users", component: ViewUserComponent},
  {path: "edit-user/:id", component: EditUserComponent},
  {path: "view-orders", component: ViewOrdersComponent},
  {path: "create-order", component: CreateOrderComponent},
  {path: "staff-dashboard", component: StaffDashboardComponent},
  {path: "admin-dashboard", component:AdminDashboardComponent},
  {path:"reg",component:RegComponent},
  {path:"view-branchManager",component:ViewBranchManagerComponent},
  {path:"edit-menu",component:EditMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
