import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdCardModule,
    MovieRoutingModule,
    MdButtonModule
  ],
  declarations: [MovieListComponent, MovieDetailsComponent, HomeComponent]
})
export class MovieModule { }
