import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  admin = JSON.parse(localStorage.getItem("user")!);

  registerManager(){
   this.route.navigate(["/registration/Manager"])
  }

  registerStaff(){
    this.route.navigate(['/registration/Staff'])

  }

  viewManager(){
    this.route.navigate(["/view-branchManager"])
  }

  logout(){
    this.route.navigate(['/login'])
    localStorage.clear()
  }

  viewStaff(){
    this.route.navigate(["/users"])
  }

}
