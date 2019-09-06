import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';

import { User } from '../user';
import { UserService } from '../user.service';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { JokeComponent } from '../joke/joke.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { JokeItemComponent } from '../joke-item/joke-item.component';


@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.scss']
})
export class AddJokeComponent implements OnInit {

  addJokeForm = new FormGroup({
    joke: new FormControl('', Validators.required)
  });

  constructor(private tbComp: TopBarComponent,private jokeComp: JokeComponent,
    private userService: UserService, private jokeService:JokeService, 
    private jokeItemList: JokeItemComponent, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.addJokeForm.value.joke);
    this.jokeService.addJoke(this.addJokeForm.value.joke ,Number(this.userService.selectedUser.id)).subscribe(joke => {
      /*this.jokeItemList.getJokes();
      console.log(this.jokeItemList.jokes);
      this.jokeItemList.addJoke(joke);*/
      location.reload();
    });

    this.jokeItemList.ngOnInit();
    this.jokeComp.toggleAddJoke();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }


}
