import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http:HttpClient) { }
  getMovies(category:string):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/${category}/popular?api_key=592d5558fe91383c9979c4a7c357bfee`)
 }
}
