import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService : AuthenticationService, private route : Router){}


  canActivate(next : ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.isLogIn()){
      return true;
    }
    return this.route.navigate(['/login']);
  }
}
