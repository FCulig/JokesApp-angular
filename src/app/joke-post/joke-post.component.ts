import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-joke-post',
  templateUrl: './joke-post.component.html',
  styleUrls: ['./joke-post.component.scss']
})

@NgModule({
  imports: [
    FormsModule
  ]
})
export class JokePostComponent implements OnInit {

  @Input() joke: Joke;
  @Input() isLiked: boolean;
  @Input() isDisliked: boolean;
  @Input() isFavorited: boolean;

  constructor(private userService: UserService, private jokeService: JokeService) { }

  ngOnInit() {
    this.userService.isJokeLiked(sessionStorage.getItem('id'), this.joke.id).subscribe(val => {
      this.isLiked = val;
    });

    this.userService.isJokeDisliked(sessionStorage.getItem('id'), this.joke.id).subscribe(val => {
      this.isDisliked = val;
    });

    this.userService.isJokeFavorited(sessionStorage.getItem('id'), this.joke.id).subscribe(val => {
      this.isFavorited = val;
    })
  }

  like() {
    this.jokeService.likeJoke(this.joke.id, sessionStorage.getItem('id')).subscribe(val => {
      this.joke = val;
      this.isLiked = true;
      this.isDisliked = false;
    });
  }

  dislike() {
    this.jokeService.dislikeJoke(this.joke.id, sessionStorage.getItem('id')).subscribe(val => {
      this.joke = val;
      this.isLiked = false;
      this.isDisliked = true;
    });
  }

  favorite() {
    this.jokeService.favoriteJoke(sessionStorage.getItem('id'), this.joke.id).subscribe(val => {
      this.isFavorited = true;
    })
  }

  unfavorite() {
    this.jokeService.unfavoriteJoke(sessionStorage.getItem('id'), this.joke.id).subscribe(val => {
      this.isFavorited = false;
    })
  }
}
