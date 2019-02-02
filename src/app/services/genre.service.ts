import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Genre } from '../shared/models/genre';
import { Movie } from '../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private apiService : ApiService) { }

  getAllGerne() : Observable<Genre[]>{
    return this.apiService.getAll("genres");
  }

  getGerneById(id : number) : Observable<Movie[]>{
    return this.apiService.getOne(id, "movies/genre/");
  }
}
