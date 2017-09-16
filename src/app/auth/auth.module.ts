import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MdInputModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent, 
    HomeComponent]
  
})
export class AuthModule { }
