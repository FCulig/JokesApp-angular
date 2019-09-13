import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  loggedInUser: User;

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<any>('http://localhost:8080/login', { headers }).pipe(
      map(
        userData => {
          this.httpClient.get<any>('http://localhost:8080/users/search?username=' + username, { headers }).subscribe(val => {
            sessionStorage.setItem('id', val.id);
          })
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )

    );
  }

  register(username, password): Observable<any> {
    var body = {
      "username": username,
      "password": password
    };
    console.log(body)
    return this.httpClient.post<User>('http://localhost:8080/users', body);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}