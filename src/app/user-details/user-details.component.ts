import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  activeUser: User;
  numberJokes: number;
  totalFavorites: number;

  editUsernameForm = new FormGroup({
    username: new FormControl('', Validators.required)
  });

  constructor(private modalService: NgbModal, private userService: UserService,
    private activateRoute: ActivatedRoute, private jokeList: JokeItemComponent,
    private jokeService: JokeService) {
    activateRoute.params.subscribe(params => {
      this.setupComponent(params['someParam']);
    });
  }

  setupComponent(param: string) {
    if (param != null) {
      let converted = Number(param);

      if (!Number.isNaN(converted)) {
        this.userService.getUserWithId(converted).subscribe(val => {
          this.activeUser = val;
          this.jokeService.getJokesFromUser(this.activeUser.id).subscribe(val => {
            this.numberJokes = val.length;
          });
          this.userService.getTotalFavoriteCount(this.activeUser.id).subscribe(val => {
            this.totalFavorites = val;
          })
        })
      }
    }
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result;
  }

  onSubmit() {
    this.userService.editUser(this.activeUser.id, this.editUsernameForm.value.username).subscribe(user => {
      this.activeUser = user;
      this.jokeList.getJokes();
    });
    this.editUsernameForm.reset();
    this.modalService.dismissAll();
  }

}
