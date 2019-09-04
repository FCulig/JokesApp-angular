import { Injectable } from '@angular/core';
import { Joke } from './joke';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JokeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getJokes(): Observable<any>{
    return this.http.get('//localhost:8080/jokes');
  }

  addJoke(joke: string, id: number): Observable<Joke>{
    //return this.http.post<Joke>('//localhost:8080/jokes', joke);
    return this.http.post<Joke>('//localhost:8080/jokes', {
      "author": {
        "id": id
      },
      "joke": joke
    });
  }

  editJoke(newJoke: string, jokeId: number): Observable<Joke>{
    return this.http.post<Joke>('//localhost:8080/jokes/'+jokeId, {"joke":newJoke});
  }

  likeJoke(jokeId: number): Observable<Joke>{
    return this.http.post<Joke>('//localhost:8080/jokes/'+jokeId+'/like',null);
  }

  dislikeJoke(jokeId: number): Observable<Joke>{
    return this.http.post<Joke>('//localhost:8080/jokes/'+jokeId+'/dislike',null);
  }

  topJokes(n: number): Observable<any>{
    return this.http.get('//localhost:8080/jokes/best?n='+n);
  }

}
