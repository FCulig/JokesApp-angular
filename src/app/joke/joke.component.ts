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

  @Input() selectedUser: User;

  constructor(private modalService: NgbModal, private jokeService: JokeService, 
    private userService: UserService, private jokeItemList: JokeItemComponent) {

  }

  ngOnInit() {

  }

}