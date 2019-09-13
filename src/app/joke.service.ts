import { Injectable } from '@angular/core';
import { Joke } from './joke';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class JokeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getJokes(): Observable<any> {
    return this.http.get('//localhost:8080/jokes');
  }

  addJoke(joke: string, id: number): Observable<Joke> {
    //return this.http.post<Joke>('//localhost:8080/jokes', joke);
    return this.http.post<Joke>('//localhost:8080/jokes', {
      "author": {
        "id": id
      },
      "joke": joke
    });
  }

  editJoke(newJoke: string, jokeId: number): Observable<Joke> {
    return this.http.post<Joke>('//localhost:8080/jokes/' + jokeId, { "joke": newJoke });
  }

  likeJoke(jokeId: number, userId: string): Observable<Joke> {
    return this.http.post<Joke>('//localhost:8080/users/' + userId + '/like/' + jokeId, null);
  }

  dislikeJoke(jokeId: number, userId: string): Observable<Joke> {
    return this.http.post<Joke>('//localhost:8080/users/' + userId + '/dislike/' + jokeId, null);
  }

  topJokes(n: number): Observable<any> {
    return this.http.get('//localhost:8080/jokes/best?n=' + n);
  }

  getFromDate(date: string): Observable<any> {
    return this.http.get('//localhost:8080/jokes?date=' + date);
  }

  getJokesFromUser(userId: number): Observable<any> {
    return this.http.get('//localhost:8080/users/' + userId + '/jokes');
  }

  deleteJoke(jokeId: number): Observable<any> {
    console.log('//localhost:8080/jokes/' + jokeId);
    return this.http.delete('//localhost:8080/jokes/' + jokeId, this.httpOptions);
  }

  getUsersFavoriteJokes(userId: string): Observable<any> {
    return this.http.get('//localhost:8080/users/' + userId + '/favorites');
  }

  checkIfJokeIsFavorite(userId: string, jokeId: number): Observable<any> {
    return this.http.get('//localhost:8080/users/' + userId + '/isfavorite/' + jokeId);
  }

  favoriteJoke(userId: string, jokeId: number): Observable<any> {
    return this.http.post('//localhost:8080/users/' + userId + '/favorite/' + jokeId, null);
  }

  unfavoriteJoke(userId: string, jokeId: number): Observable<any> {
    return this.http.post('//localhost:8080/users/' + userId + '/unfavorite/' + jokeId, null);
  }

  getUsersWhoLikedJoke(jokeId: number): Observable<any>{
    return this.http.get('//localhost:8080/jokes/' + jokeId + '/wholiked');
  }

  getUsersWhoDislikedJokes(jokeId: number): Observable<any>{
    return this.http.get('//localhost:8080/jokes/' + jokeId + '/whodisliked');
  }

}
