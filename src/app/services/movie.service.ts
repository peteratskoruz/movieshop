import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMovies(){
    return this.http.get('/api/movies')
            .map(res => res.json());
  }

}
