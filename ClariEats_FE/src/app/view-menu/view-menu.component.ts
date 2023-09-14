import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodproductService } from '../Services/foodproduct.service';
import { MenuService } from '../Services/menu.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  constructor(private menu: MenuService,private foodproduct: FoodproductService, private route: Router, private toast: ToastrService) { }
  menuRes:any
  foodProducts:any;
  deleteProdRes:any
  deleteMenuRes: any
  manager = JSON.parse(localStorage.getItem("user")!);
  ngOnInit(): void {
    this.menu.getMenuByManagerId(this.manager.id).subscribe(data=>{
      this.menuRes = data;
      this.foodProducts = this.menuRes.data.foodProducts
      console.log(this.foodProducts);
    })
  }
  addToMenu(){
   this.route.navigate(["/add-foodproduct"])
  }

  deleteProduct(productId:any){
    this.foodproduct.deleteFoodProduct(productId).subscribe(data=>{
      this.deleteProdRes = data;
      this.menu.getMenuByManagerId(this.manager.id).subscribe(data=>{
        this.menuRes = data;
        this.toast.success(`Deleted`)
        this.foodProducts = this.menuRes.data.foodProducts
        console.log(this.foodProducts);
      })
    })
  }
  
  deleteMenu(){
    console.log(this.menuRes);
    this.menu.deleteMenu(this.menuRes.data.id).subscribe(data=>{
      console.log(this.menuRes.id,data);
      this.deleteMenuRes = data;
      this.toast.success("Menu deleted!")
      this.route.navigate(["/manager-dashboard"])
    })
  }

  editMenu(id:any){
    
    this.route.navigate(['edit-menu'])
  }
}
