import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { UserService } from '../user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TopJokesComponent } from '../top-jokes/top-jokes.component';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.scss']
})
@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [
  ],
  bootstrap: []
})
export class JokeItemComponent implements OnInit {

  jokes: Joke[];
  favoritedJokes: Joke[];
  likedJokes: Joke[];
  dislikedJokes: Joke[];

  selectedJoke: Joke;

  editJokeForm = new FormGroup({
    joke: new FormControl('', Validators.required)
  });

  parameterDate = null;
  parameterUser = null;

  constructor(private jokeService: JokeService, private userService: UserService,
    private activateRoute: ActivatedRoute, private modalService: NgbModal,
    private topJokes: TopJokesComponent) {
    activateRoute.params.subscribe(params => {
      this.setupComponent(params['someParam']);
    });
  }

  getJokesWithParams() {
    this.activateRoute.params.subscribe(params => {
      this.setupComponent(params['someParam']);
    });
  }

  setupComponent(param: string) {
    if (param != null) {
      let converted = Number(param);

      if (Number.isNaN(converted)) {
        this.parameterDate = param;
        this.jokeService.getFromDate(param).subscribe(jokes => {
          this.jokes = [];
          this.jokes = jokes;
          this.updateReactions();
          this.getFavoritedJokes();
          this.getJokes();
        });
      } else {
        this.parameterUser = converted;
        this.jokeService.getJokesFromUser(converted).subscribe(jokes => {
          this.jokes = [];
          this.jokes = jokes;
          this.updateReactions();
          this.getFavoritedJokes();
          this.getJokes();
        });
      }
    }
  }

  ngOnInit() {
    this.getFavoritedJokes();
    this.getLikedJokes();
    this.getDislikedJokes();
    if (this.parameterDate == null && this.parameterUser == null) {
      this.getJokes();
    }
  }

  addJoke(jk: Joke) {
    this.getJokes();
    this.jokes.push(jk);
  }

  getJokes(): void {
    this.jokeService.getJokes().subscribe(jokes => {
      this.jokes = jokes;
      this.updateReactions();
    });
  }

  getFavoritedJokes() {
    this.jokeService.getUsersFavoriteJokes(sessionStorage.getItem('id')).subscribe(val => this.favoritedJokes = val);
  }

  getLikedJokes() {
    this.userService.getLikedJokes(sessionStorage.getItem('id')).subscribe(val => {
      this.likedJokes = val;
    });
  }

  getDislikedJokes() {
    this.userService.getDislikedJokes(sessionStorage.getItem('id')).subscribe(val => {
      this.dislikedJokes = val;
    });
  }

  updateReaction(joke: Joke) {
    this.jokes.forEach(val => {
      if (joke === val) {
        this.getLikesDislikesForJoke(val);
      }
    })
  }

  updateReactions() {
    this.jokes.forEach(val => {
      this.getLikesDislikesForJoke(val);
    });
  }

  getLikesDislikesForJoke(val: Joke) {
    this.jokeService.getUsersWhoLikedJoke(val.id).subscribe(v => {
      val.likes = v.length;
    });

    this.jokeService.getUsersWhoDislikedJokes(val.id).subscribe(v => {
      val.dislikes = v.length;
    });
  }

  like(jokeId: number): void {
    this.jokeService.likeJoke(jokeId, sessionStorage.getItem('id')).subscribe(val => {
      this.getJokes();
      this.activateRoute.params.subscribe(params => {
        this.setupComponent(params['someParam']);
      })
    });
  }

  dislike(jokeId: number): void {
    this.jokeService.dislikeJoke(jokeId, sessionStorage.getItem('id')).subscribe(val => {
      this.getJokes();
      this.activateRoute.params.subscribe(params => {
        this.setupComponent(params['someParam']);
      })
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

  isJokeLiked(jokeId: number): boolean {
    let isLiked = false;

    if (this.likedJokes != null) {
      this.likedJokes.forEach(function (value) {
        if (value.id == jokeId) {
          isLiked = true;
        }
      });
    }

    return isLiked;
  }

  isJokeDisliked(jokeId: number): boolean {
    let isDisliked = false;

    if (this.dislikedJokes != null) {
      this.dislikedJokes.forEach(function (value) {
        if (value.id == jokeId) {
          isDisliked = true;
        }
      });
    }

    return isDisliked;
  }

  favorite(jokeId: number) {
    this.jokeService.favoriteJoke(sessionStorage.getItem('id'), jokeId).subscribe(val => {
      this.getFavoritedJokes();
      this.getJokes();
    });
  }

  unfavorite(jokeId: number) {
    this.jokeService.unfavoriteJoke(sessionStorage.getItem('id'), jokeId).subscribe(val => {
      this.getFavoritedJokes();
      this.getJokes();
    });
  }

  open(content, jk) {
    this.selectedJoke = jk;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result;
  }

  onSubmit() {
    this.jokeService.editJoke(this.editJokeForm.value.joke, this.selectedJoke.id).subscribe(joke => {
      this.getJokes();
      this.topJokes.getTopJokes();
    });
    this.editJokeForm.reset();
    this.modalService.dismissAll();
    this.selectedJoke = null;
  }

  getNumberOfLikes(jokeId: number) {
    /*this.jokeService.getUsersWhoLikedJoke(jokeId).subscribe(val=>{
      return val.length;
    })*/
  }

}
