import { Component, OnInit } from '@angular/core';
import { FoodorderService } from '../Services/foodorder.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  foodOrderRes:any;
  foodOrderByIdRes:any;
  orderToUpdate:any;
  updateOrderRes:any;
  isReady = false;
  deliverBtn = false;  
  constructor(private foodOrder: FoodorderService) { }
  staff = JSON.parse(localStorage.getItem("user")!);
  ngOnInit(): void {
   this.foodOrder.getAllFoodOrdersByStaff(this.staff.id).subscribe(data=>{
     this.foodOrderRes = data;
     console.log(data);
   })
  }
  updateStatus(foodOrderId:any){
    this.foodOrder.getFoodOrderByItsId(foodOrderId).subscribe(data=>{
      this.foodOrderByIdRes = data;
      this.orderToUpdate = this.foodOrderByIdRes.data;
      this.orderToUpdate.status = "ready";
      this.foodOrder.updateStatus(this.orderToUpdate).subscribe(data=>{
        this.updateOrderRes = data;
        console.log(data);
        if(!this.updateOrderRes.error){
          this.isReady = true;
          this.deliverBtn = true
        }
        this.foodOrder.getAllFoodOrdersByStaff(this.staff.id).subscribe(data=>{
          this.foodOrderRes = data;
          console.log(data);
        })
      })
    })
  }

//   updateOrder(foodOrderId:any){
//     this.foodOrder.getFoodOrderByItsId(foodOrderId).subscribe(data=>{
//       this.foodOrderByIdRes = data;
//       this.orderToUpdate = this.foodOrderByIdRes.data;
//       this.orderToUpdate.status = "ready";
//   })

// }

}
