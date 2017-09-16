import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { MovieModule } from './movie/movie.module';
import { AuthService } from './services/auth.service';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdCardModule,
    MdButtonModule,
    HttpModule,
    AuthModule,
    AdminModule,
    MovieModule
  ],
  providers: [
    AuthService, 
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
