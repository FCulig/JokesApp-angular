import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.scss']
})
export class JokeItemComponent implements OnInit {

  jokes: Joke[];
  favoritedJokes: Joke[];


  parameterDate = null;
  parameterUser = null;

  constructor(private jokeService: JokeService, private userService: UserService,
    private activateRoute: ActivatedRoute) {
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
    if (this.userService.selectedUser != null) {
      this.getFavoritedJokes();
    }
    if (this.parameterDate == null && this.parameterUser == null) {
      this.getJokes();
    }
  }

  addJoke(jk: Joke){
    this.getJokes();
    console.log(this.jokes);
    this.jokes.push(jk);
  }

  getJokes(): void {
    this.jokeService.getJokes().subscribe(jokes => this.jokes = jokes);
  }

  getFavoritedJokes() {
    this.jokeService.getUsersFavoriteJokes(this.userService.selectedUser.id).subscribe(val => this.favoritedJokes = val);
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

  deleteJoke(jk: Joke) {
    this.jokeService.deleteJoke(jk.id).subscribe(val => {
      this.getJokes();
    })
  }

  isJokeFavorite(jokeId: number): boolean {
    let isFav = false;

    if (this.favoritedJokes != null) {
      this.favoritedJokes.forEach(function (value) {
        if (value.id == jokeId) {
          isFav = true;
        }
      });
    }

    return isFav;
  }

  favorite(jokeId: number) {
    this.jokeService.favoriteJoke(this.userService.selectedUser.id, jokeId).subscribe(val => {
      this.getFavoritedJokes();
      this.getJokes();
    });
  }

  unfavorite(jokeId: number) {
    this.jokeService.unfavoriteJoke(this.userService.selectedUser.id, jokeId).subscribe(val => {
      this.getFavoritedJokes();
      this.getJokes();
    });
  }

}
