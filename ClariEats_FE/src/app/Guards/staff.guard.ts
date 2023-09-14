import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import {ToastrService} from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {
  constructor(private auth : AuthService, private toast: ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.auth.isLoggedInStaff()){
        return true;
      }else{
        this.toast.warning("Please login")
        return false;
      }
  }
  
}
