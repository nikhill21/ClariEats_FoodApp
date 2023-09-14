import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  registerManager(){
    this.route.navigate(["/registration/Manager"])
   }
 
   registerStaff(){
     this.route.navigate(['/registration/Staff'])
 
   }

   registerAdmin(){
    this.route.navigate(['/registration/Admin'])
   }

   login(){
    this.route.navigate(['login'])
    localStorage.clear()
   }

  

}
