import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  createMenu(managerId:any){
    return this.http.post(`http://localhost:8080/menu/${managerId}`,{})
  }
  
  getMenuByManagerId(managerId:any){
    return this.http.get(`http://localhost:8080/menu/manager/${managerId}`)
  }

  deleteMenu(menuId:number){
    return this.http.delete(`http://localhost:8080/menu/${menuId}`)
  }

}
