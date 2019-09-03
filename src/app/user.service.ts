import { Injectable } from '@angular/core';
import { User } from './user';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get("//localhost:8080/users");
  }
}
