import { Component, OnInit, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { User } from '../user';
import { UserService } from '../user.service';
import { JokeComponent } from '../joke/joke.component';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { AuthenticationService } from '../authentication.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isAuth;
  username: string;
  userId: string;

  constructor(private jokeComponent: JokeComponent, private userService: UserService,
    private jokeItemList: JokeItemComponent, private loginService: AuthenticationComponent,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.userId = sessionStorage.getItem('id');
  }

  isAuthenticated() {
    //return this.authenticationService.loggedInUser;
    return true;
  }

  setAuthentication(state: boolean) {
    this.isAuth = state;
  }

}