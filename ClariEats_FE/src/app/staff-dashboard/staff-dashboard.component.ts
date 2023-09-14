import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  constructor(private route: Router) { }
  staff:any;
  ngOnInit(): void {
    this.staff = JSON.parse(localStorage.getItem("user")!);
  }
  takeOrder(){
    this.route.navigate(["/create-order"])
  }

  viewOrder(){
   this.route.navigate(["/view-orders"])
  }

  logout(){
    this.route.navigate(['/login'])
    localStorage.clear()
  }

}
