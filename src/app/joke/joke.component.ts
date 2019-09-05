import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { AddJokeComponent } from '../add-joke/add-joke.component';
import { User } from '../user';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  jokes: Joke[];

  selectedJoke: Joke;
  @Input() selectedUser: User;

  showAddJoke = false;

  parameterDate = null;
  parameterUser = null;

  constructor(private jokeService: JokeService, private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(params => {
      this.setupComponent(params['someParam']);
    })
  }

  setupComponent(param: string) {
    if (param != null) {
      let converted = Number(param);

      if (Number.isNaN(converted)) {
        this.parameterDate = param;
        this.jokeService.getFromDate(param).subscribe(jokes => {
          this.jokes = [];
          this.jokes = jokes;
        });
      } else {
        this.parameterUser = converted;
        this.jokeService.getJokesFromUser(converted).subscribe(jokes => {
          this.jokes = [];
          this.jokes = jokes;
        });
      }

    }
  }

  ngOnInit() {
    if (this.parameterDate == null) {
      this.getJokes();
    }
  }

  onSelect(joke: Joke): void {
    this.selectedJoke = joke;
  }

  getJokes(): void {
    this.jokeService.getJokes().subscribe(jokes => this.jokes = jokes);
  }

  toggleAddJoke(): void {
    if (this.showAddJoke == false) {
      this.showAddJoke = true;
    } else {
      this.showAddJoke = false;
    }
  }

  like(jokeId: number): void {
    this.jokeService.likeJoke(jokeId).subscribe(val => {
      this.getJokes();
    });
  }

  dislike(jokeId: number): void {
    this.jokeService.dislikeJoke(jokeId).subscribe(val => {
      this.getJokes();
    });
  }

  getUsername(){
    return this.jokes[0].author.username;
  }

  deleteJoke(jk: Joke){
    this.jokeService.deleteJoke(jk.id).subscribe(val =>{
      this.getJokes();
    })
  }

}