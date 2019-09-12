import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { JokeComponent } from '../joke/joke.component';
import { JokeItemComponent } from '../joke-item/joke-item.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isAuth = false;

  constructor(private jokeComponent: JokeComponent, private userService: UserService,
    private jokeItemList: JokeItemComponent, private loginService: AuthenticationComponent,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  
}
