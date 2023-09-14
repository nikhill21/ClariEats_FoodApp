import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  available:any="Available"
  constructor() { }

  ngOnInit(): void {
  }

  addFoodProduct(form: NgForm){
    console.log(form.value);
    form.value.availability = true
    //to get menuID
    // this.menu.getMenuByManagerId(this.manager.id).subscribe(data=>{
    //   this.menuRes = data;
    //   this.menuIdRes = this.menuRes.data.id 
    //   console.log(this.menuIdRes);
      
    //   this.foodproduct.addFoodProduct(form.value, this.menuIdRes).subscribe(data=>{
    //     this.foodProdRes = data;
    //     console.log(this.foodProdRes.message);
    //     this.toast.success(`Added ${this.foodProdRes.data.name}`)
    //     this.route.navigate(["/menu"])
    //  })     
    // })
  }

}
