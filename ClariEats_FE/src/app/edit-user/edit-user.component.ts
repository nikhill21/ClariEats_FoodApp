import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route :ActivatedRoute, private router: Router, private user: UserService, private toast : ToastrService) { }
  selectedUser:any;
  updateUserRes:any;
  id:any
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.user.getUserById(this.id).subscribe(data=>{
      this.selectedUser = data
    })
  }

  editUser(form: NgForm){
   console.log(form.value);
   this.user.updateUser(this.id,form.value).subscribe(data=>{
    this.updateUserRes = data;
    console.log(this.updateUserRes)
    this.toast.success("Successfully edited")
    this.router.navigate(["/users"])
   })
  }

}
