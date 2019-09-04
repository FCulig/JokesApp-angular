import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { JokeComponent } from '../joke/joke.component'


@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent implements OnInit {

  selectUserOptions: User[];

  addJokeForm = new FormGroup({
    joke: new FormControl('', Validators.required),
    authorId: new FormControl('', Validators.required)
  });

  constructor(private jokeComp: JokeComponent,private userService: UserService, private jokeService:JokeService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => this.selectUserOptions = users);
  }

  onSubmit(){
    this.jokeService.addJoke(this.addJokeForm.value.joke ,this.addJokeForm.value.authorId).subscribe(joke => this.jokeComp.jokes.push(joke));
  }

}
