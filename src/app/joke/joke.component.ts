import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { AddJokeComponent } from '../add-joke/add-joke.component';
import { User } from '../user';
import { EditjokeComponent } from '../editjoke/editjoke.component';
import { UserService } from '../user.service';
import { JokeItemComponent } from '../joke-item/joke-item.component';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  editJokeForm = new FormGroup({
    joke: new FormControl('', Validators.required)
  });

  selectedJoke: Joke;
  @Input() selectedUser: User;

  showAddJoke = false;


  constructor(private modalService: NgbModal, private jokeService: JokeService, private userService: UserService,
    private jokeItemList: JokeItemComponent) {
    
  }

  

  ngOnInit() {
    
  }
  open(content, jk) {
    this.selectedJoke = jk;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result;
  }

  onSubmit() {
    this.jokeService.editJoke(this.editJokeForm.value.joke, this.selectedJoke.id).subscribe(joke => { this.getJokes() });
    this.editJokeForm.reset();
    this.modalService.dismissAll();
    this.selectedJoke = null;
  }

  toggleAddJoke(): void {
    if (this.showAddJoke == false) {
      this.showAddJoke = true;
    } else {
      this.showAddJoke = false;
    }
  }

}