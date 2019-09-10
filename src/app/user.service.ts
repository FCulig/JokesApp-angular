import { Injectable } from '@angular/core';
import { User } from './user';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  selectedUser: User;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get("//localhost:8080/users");
  }

  getUserWithId(userId: number): Observable<any> {
    return this.http.get("//localhost:8080/users/" + userId);
  }

  editUser(userId: number, newUsername: string): Observable<any> {
    return this.http.post<User>("//localhost:8080/users/" + userId, {
      "username": newUsername
    });
  }

  setSelectedUser(usr: User) {
    this.selectedUser = usr;
  }

  addUser(username: string): Observable<any> {
    return this.http.post<User>("//localhost:8080/users", {
      "username": username
    });
  }

  getTotalFavoriteCount(userId: number): Observable<any> {
    return this.http.get("//localhost:8080/users/" + userId + "/favoritedjokecount");
  }

  getLikedJokes(userId: number): Observable<any>{
    return this.http.get("//localhost:8080/users/" + userId + "/liked");
  }

  getDislikedJokes(userId: number): Observable<any>{
    return this.http.get("//localhost:8080/users/" + userId + "/disliked");
  }
}
