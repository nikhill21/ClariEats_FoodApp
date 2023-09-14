import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  createUser: any;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private toast: ToastrService) { }
  ngOnInit(): void {
  }
  register(form: NgForm) {
    form.value.role = this.route.snapshot.params['role'];
    this.userService.registerUser(form.value).subscribe(res=>{
      console.log(res);
      // this.router.navigate(["/login"])
      // this.router.navigate(["/manager-dashboard"])
      this.router.navigate(["/admin-dashboard"])
      this.toast.success(`${this.route.snapshot.params['role']} registered successfully`)
    })
  }

}
