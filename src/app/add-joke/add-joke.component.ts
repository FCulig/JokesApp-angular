import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { JokeComponent } from '../joke/joke.component';
import { TopBarComponent } from '../top-bar/top-bar.component';


@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.scss']
})
export class AddJokeComponent implements OnInit {

  addJokeForm = new FormGroup({
    joke: new FormControl('', Validators.required)
  });

  constructor(private tbComp: TopBarComponent,private jokeComp: JokeComponent,private userService: UserService, private jokeService:JokeService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log();
    this.jokeService.addJoke(this.addJokeForm.value.joke ,Number(this.userService.selectedUser.id)).subscribe(joke => this.jokeComp.jokes.push(joke));
    this.jokeComp.toggleAddJoke();
  }

}
