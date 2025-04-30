import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  signup(user:any): Observable<any> {
    return this.http.post('http://localhost:3000/signup',user);
  }
  signin(user:any):Observable<any>{
    return this.http.post('http://localhost:3000/signin',user); 
  }
  // signout():Observable<any>{
  //   return this.http.get('http://localhost:3000/signout');
  // }

}
