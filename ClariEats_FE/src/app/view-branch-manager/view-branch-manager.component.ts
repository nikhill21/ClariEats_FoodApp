import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-view-branch-manager',
  templateUrl: './view-branch-manager.component.html',
  styleUrls: ['./view-branch-manager.component.css']
})
export class ViewBranchManagerComponent implements OnInit {

  ManagerRes:any
  deleteUserRes:any;
  constructor(private user:UserService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.user.getAllManagers().subscribe((res)=>{
      this.ManagerRes=res
    })
  }

  deleteManager(mid:any){
    {
      this.user.deleteUser(mid).subscribe(data=>{
        this.deleteUserRes = data;
        console.log(data);
        this.toast.success("Deleted")
        this.user.getAllManagers().subscribe(data=>{
          this.ManagerRes = data;
        })
      })
    }
  }

}
