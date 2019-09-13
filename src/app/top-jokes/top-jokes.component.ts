import { Component, OnInit, NgModule } from '@angular/core';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-top-jokes',
  templateUrl: './top-jokes.component.html',
  styleUrls: ['./top-jokes.component.scss']
})
@NgModule({
  imports: [RouterModule],
  exports: [],
  declarations: [],
  providers: [],
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
