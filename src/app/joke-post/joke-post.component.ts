import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-post',
  templateUrl: './joke-post.component.html',
  styleUrls: ['./joke-post.component.scss']
})
export class JokePostComponent implements OnInit {

  //@Input() joke: Joke;

  constructor() { }

  ngOnInit() {
    /*this.jokeService.getUsersWhoDislikedJokes(this.joke.id).subscribe(val => {
      this.joke.dislikes = val.length;
      if(val.length > 0){
        val.array.forEach(element => {
          if(element.id == sessionStorage.getItem('id')){
            this.joke.isDisliked = true;
          }
        });
      }else{
        this.joke.isDisliked = false;
      }
    });

    this.jokeService.getUsersWhoLikedJoke(this.joke.id).subscribe(val => {
      this.joke.likes = val.length;
      if(val>0){
        val.array.forEach(element => {
          if(element.id == sessionStorage.getItem('id')){
            this.joke.isLiked = true;
          }
        });
      }else{
        this.joke.isLiked = false;
      }
    })*/
  }

  /*like(jokeId: number): void {
    this.jokeService.likeJoke(jokeId, sessionStorage.getItem('id')).subscribe(val => {
    });
  }

  dislike(jokeId: number): void {
    this.jokeService.dislikeJoke(jokeId, sessionStorage.getItem('id')).subscribe(val => {
    });
  }

  deleteJoke(jk: Joke) {
    this.jokeService.deleteJoke(jk.id).subscribe(val => {
    })
  }*/

}
