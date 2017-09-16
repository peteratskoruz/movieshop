import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../services/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AddMovieComponent, HomeComponent],
  providers: [
    AuthGuard
  ]
})
export class AdminModule { }
