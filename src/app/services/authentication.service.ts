import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { UserLogin } from '../shared/models/userlogin';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { JwtstorageService } from './jwtstorage.service';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user : User;

  constructor(private authenticationService : ApiService, private jwtService : JwtstorageService) { }

  login(userLogin : UserLogin) : Observable<boolean>{
    const options = {
      headers : new HttpHeaders().set('Content-Type', 'application/json')     
    };
    return this.authenticationService.create('token', userLogin, options).pipe(
      map(response => {
        if(response){
          this.jwtService.saveToken(response);
          return true;
        }
        return false;
      })
    );
  }

  logout(){
    this.jwtService.destroyToken();
  }
  
  private deCodeToken() : User{
    const token = this.jwtService.getToken();
    if(!token){
      return null;
    }
    const deCodeToken = new JwtHelperService().decodeToken(token);
    this.user = deCodeToken;
    return this.user;
  }

  getUserFullName() : string{
    const reponse = this.deCodeToken();
    const fullName = reponse.firstName + ' ' + reponse.lastName;
    return fullName;
  }

  public isLogIn() : boolean{
    if(new JwtHelperService().isTokenExpired(this.jwtService.getToken())){
      return false;
    }
    return true;
  }
}
