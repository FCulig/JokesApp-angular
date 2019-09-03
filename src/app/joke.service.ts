import { Injectable } from '@angular/core';
import { Joke } from './joke';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJokes(): Observable<any>{
    return this.http.get('//localhost:8080/jokes');
  }

  editJoke(id, joke){
    return this.http.post('//localhost:8080/jokes/'+id, new HttpHeaders({"joke":joke}));
  }
}
