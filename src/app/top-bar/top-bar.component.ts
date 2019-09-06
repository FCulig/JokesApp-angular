import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  userSelect: User[];

  selectedUser: User;

  constructor(private jokeComponent: JokeComponent, private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => this.userSelect = users);
  }

  onSelect(u: User){
    this.selectedUser = u;
    this.userService.setSelectedUser(u);
    this.jokeComponent.ngOnInit();
  }
}
