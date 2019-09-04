import { Component, OnInit } from '@angular/core';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';


@Component({
  selector: 'app-top-jokes',
  templateUrl: './top-jokes.component.html',
  styleUrls: ['./top-jokes.component.css']
})
export class TopJokesComponent implements OnInit {

  topJokes: Joke[];

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getTopJokes();
  }

  getTopJokes(): void{
    this.jokeService.topJokes(5).subscribe(jokes=> this.topJokes=jokes);
  }

}
