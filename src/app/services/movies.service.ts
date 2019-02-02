import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie';
import { Credits } from '../shared/models/credit';
import { map } from 'rxjs/operators';
import { HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtstorageService } from './jwtstorage.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private apiService : ApiService, private jwtService : JwtstorageService) {}

  getAllMovies() : Observable<Movie[]>{
    return this.apiService.getAll("movies");
  }

  getMoviesByPage(page : number){
    let map = new Map();
    map.set("page", page);
    return this.apiService.getAll("movies", map);
  }

  getMovieById(id : number) : Observable<Movie>{
    return this.apiService.getOne(id, "movies/details/");
  }

  getPopularMovies() : Observable<Movie[]>{
    return this.apiService.getAll("movies/popular");
  }

  getNowPlayingMovies() : Observable<Movie[]>{
    return this.apiService.getAll("movies/nowplaying");
  }

  getUpcomingMovies() : Observable<Movie[]>{
    return this.apiService.getAll("movies/upcoming");
  }

  getMovieCreditsByMovie(id : number) : Observable<Credits>{
    return this.apiService.getOne(id, "movies/credits/");
  }

  getTopMovies() : Observable<Movie[]>{
    return this.apiService.getAll("movies/top");
  }

  getMoviesByGenre(genreId : number) : Observable<Movie[]>{
    let headers = new Map();
    //let params = new Map();
    headers.set('Authorization', 'Bearer' + ' ' + this.jwtService.getToken());
    //params.set('Id', genreId);
    return this.apiService.getAll(`${'movies/genre/'}${genreId}`, headers);
  }

  getMoviesByCast(castId : number) : Observable<Movie[]>{
    return this.apiService.getAll(`${'movies/cast/'}${castId}`);
  }
}
