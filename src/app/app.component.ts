import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {User} from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movie Shop';
  userInfo;
  constructor(private router: Router, private authService: AuthService){
    
  }

  ngOnInit(){
    this.userInfo = this.authService.getUserInfo();
    this.authService.onUserLoginChange.subscribe((res: User) => {
      this.userInfo = res;
    });
  }

  
  onLogin(){
    this.router.navigate(['/auth']);
  }
  onLogout(){
    this.authService.logout();
  }
}
