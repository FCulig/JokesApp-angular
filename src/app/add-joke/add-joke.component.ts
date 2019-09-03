import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent implements OnInit {

  selectUserOptions: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => this.selectUserOptions = users);
  }

}
