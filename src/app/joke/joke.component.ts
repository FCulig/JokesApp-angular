import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  jokes: Joke[];

  selectedJoke: Joke;

  showAddJoke = false;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getJokes();
  }

  onSelect(joke: Joke): void{
    this.selectedJoke = joke;
  }

  getJokes(): void{
    this.jokeService.getJokes().subscribe(jokes => this.jokes = jokes);
  }

  toggleAddJoke(): void{
    if(this.showAddJoke == false){
      this.showAddJoke = true;
    }else{
      this.showAddJoke = false;
    }
  }

}
