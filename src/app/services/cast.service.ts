import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Cast } from '../shared/models/cast';
import { Credits } from '../shared/models/credit';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private castService : ApiService) { }

  getAllCasts() : Observable<Cast[]>{
    return this.castService.getAll("cast");
  }

  getCastsByMovie(id : number) : Observable<Credits>{
    return this.castService.getOne(id, "/movies/credits/");
  }
}
