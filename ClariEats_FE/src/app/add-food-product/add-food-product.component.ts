import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodproductService } from '../Services/foodproduct.service';
import { MenuService } from '../Services/menu.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-add-food-product',
  templateUrl: './add-food-product.component.html',
  styleUrls: ['./add-food-product.component.css']
})
export class AddFoodProductComponent implements OnInit {

  constructor(private foodproduct: FoodproductService, private menu: MenuService, private route : Router, private toast: ToastrService) { }

  ngOnInit(): void {
  }
  manager = JSON.parse(localStorage.getItem("user")!);
  menuRes:any
  menuIdRes:any
  foodProdRes:any
  addFoodProduct(form: NgForm){
    console.log(form.value);
    form.value.availability = true
    //to get menuID
    this.menu.getMenuByManagerId(this.manager.id).subscribe(data=>{
      this.menuRes = data;
      this.menuIdRes = this.menuRes.data.id 
      console.log(this.menuIdRes);
      
      this.foodproduct.addFoodProduct(form.value, this.menuIdRes).subscribe(data=>{
        this.foodProdRes = data;
        console.log(this.foodProdRes.message);
        this.toast.success(`Added ${this.foodProdRes.data.name}`)
        this.route.navigate(["/menu"])
     })     
    })
  }
  
}
