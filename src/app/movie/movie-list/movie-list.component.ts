import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../models/movie';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Array<Movie>;
  searchInput: FormControl = new FormControl();
  private _movies: Array<Movie>;
  constructor(private service: MovieService) { }


  ngOnInit() {
    this.service.getMovies()
      .subscribe(res => {
        this._movies = res;
        this.movies = [...this._movies];
      });
    
    this.searchInput.valueChanges
          .debounceTime(500)
          .distinctUntilChanged()
          .subscribe(val => {
            const filteredMovies = this._movies.filter(movie => {
              return movie.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
              movie.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });

            this.movies = filteredMovies;
          });
    
    
  }

  onViewDeatils(){
    
  }

}
