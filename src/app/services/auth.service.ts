import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {User} from '../models/user';

@Injectable()
export class AuthService {
  public onUserLoginChange : Subject<User> = new Subject<User>();
  constructor(private http: Http) { }

  isLoggedIn(){
    return !!sessionStorage.getItem("userInfo");
    //return sessionStorage.getItem("userInfo") !== undefined || sessionStorage.getItem("userInfo") !== null;
  }

  login(userInfo){
    sessionStorage.clear();
    return this.http.post('/api/login', userInfo)
            .map(res => res.json())            
            .catch(err => {
              return Observable.throw(err);
            })
            .map(res => {
              console.log(res);
              this.onUserLoginChange.next(res.user);
              sessionStorage.setItem("userInfo", JSON.stringify(res.user));
              return res;
            });
            
      
  }

  getUserInfo(){
    if(sessionStorage.getItem("userInfo")){
      return JSON.parse(sessionStorage.getItem("userInfo"));
    }
    return undefined;
  }

  logout(){
    this.onUserLoginChange.next(null);
    sessionStorage.clear();
  }

}
