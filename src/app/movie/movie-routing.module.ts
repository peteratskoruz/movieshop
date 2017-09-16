import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'movie',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MovieListComponent
      },
      {
        path: 'details/:movieId',
        component: MovieDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
