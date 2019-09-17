import { Injectable } from '@angular/core';
import { User } from './user';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  selectedUser: User;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get("//localhost:8080/users");
  }

  getUserWithId(userId: number): Observable<any> {
    return this.http.get("//localhost:8080/users/" + userId);
  }

  getUserWithUsername(username: string) {
    /*var request = "//localhost:8080/users/search?username=" + username;
    console.log(request);
    return this.http.get(request);*/

  }

  editUser(userId: string, newUsername: string): Observable<any> {
    return this.http.post<User>("//localhost:8080/users/" + userId, {
      "username": newUsername
    });
  }

  getTotalFavoriteCount(userId: number): Observable<any> {
    return this.http.get("//localhost:8080/users/" + userId + "/favoritedjokecount");
  }

  getLikedJokes(userId: string): Observable<any> {
    return this.http.get("//localhost:8080/users/" + userId + "/liked");
  }

  getDislikedJokes(userId: string): Observable<any> {
    return this.http.get("//localhost:8080/users/" + userId + "/disliked");
  }

  isJokeLiked(userId: string, jokeId: number): Observable<any> {
    return this.http.get("//localhost:8080/users/" + userId + "/isliked/" + jokeId);
  }

  isJokeDisliked(userId: string, jokeId: number): Observable<any> {
    return this.http.get("//localhost:8080/users/" + userId + "/isdisliked/" + jokeId);
  }

  isJokeFavorited(userId: string, jokeId: number): Observable<any> {
    return this.http.get("//localhost:8080/users/" + userId + "/isfavorite/" + jokeId);
  }
}
