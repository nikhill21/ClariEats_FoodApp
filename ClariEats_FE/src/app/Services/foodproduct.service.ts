import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodproductService {

  constructor(private http: HttpClient) { }

  addFoodProduct(foodProduct:any, menuId:number){
   return this.http.post(`http://localhost:8080/foodproduct/${menuId}`,foodProduct)
  }

  deleteFoodProduct(foodProductId:number){
    return this.http.delete(`http://localhost:8080/foodproduct/${foodProductId}`)
  }

  getAllFoodProducts(){
    return this.http.get("http://localhost:8080/foodproduct")
  }
}
