import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError, Observable } from 'rxjs';
import {map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http:HttpClient) { }

  getAll(path : string, searchHeaders? : Map<any, any>, searchParams? : Map<any, any>) : Observable<any[]>{
    let params = new HttpParams();
    let headers = new HttpHeaders();
    if (searchHeaders) {
      searchHeaders.forEach((value: string, key: string) => {
        console.log(key, value);
        headers = headers.append(key, value);
      });
    }
    if (searchParams) {
      searchParams.forEach((value: string, key: string) => {
        console.log(key, value);
        params = params.append(key, value);
      });
    }
    return this.http.get(`${environment.apiurl}${path}`, {headers : headers, params : params})
    .pipe(map(response => response as any[], catchError(e => throwError(new Error('Something went wrong')))));
  }

  getOne(id : number, path : string) : Observable<any>{
    return this.http.get(`${environment.apiurl}${path}${id}`).pipe(map(response => response as any, catchError(e => throwError(new Error('Something went wrong')))));
  }

  create(path : string, resource : Object = {}, options?) : Observable<any>{
    return this.http.post(`${environment.apiurl}${path}`, JSON.stringify(resource), options).pipe(map(response => response as any, catchError(e => throwError(new Error('Something went wrong, can not create')))));
  }
}
