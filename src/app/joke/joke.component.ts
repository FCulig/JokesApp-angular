import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { AddJokeComponent } from '../add-joke/add-joke.component';
import { User } from '../user';
import { EditjokeComponent } from '../editjoke/editjoke.component';
import { UserService } from '../user.service';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { AuthenticationService } from '../authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  @Input() selectedUser: User;

  constructor() {
    
  }

  ngOnInit() {
  }

}