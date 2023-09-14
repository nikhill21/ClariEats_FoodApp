import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../Services/menu.service';
import {ToastrService} from 'ngx-toastr'


@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(private menu: MenuService, private route: Router, private toast: ToastrService) { }
  res: any;

  ngOnInit(): void {
  }
  manager = JSON.parse(localStorage.getItem("user")!);
  createMenu(){
    this.menu.createMenu(this.manager.id).subscribe(data=>{
      this.res = data;
      if(this.res.error){
        this.toast.info(this.res.message)
        console.log(this.res.message);
      }else if(!this.res.error){
        this.toast.success(this.res.message)
        console.log(this.res.message);        
      }
    })
  }
  viewMenu(){
    this.route.navigate(["/menu"])
  }
  viewStaff(){
    this.route.navigate(["/users"])
  }
  registerUser(){
    this.route.navigate(["/registration/Staff"])
    // this.route.navigate(["/registration/Staff"])
    
  }

  logout(){
    this.route.navigate(['/login'])
    localStorage.clear()
  }
}
