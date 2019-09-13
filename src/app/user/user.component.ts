import { Component, OnInit, Input, NgModule } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
@NgModule({
  imports: [TopBarComponent],
  exports: [],
  declarations: [UserComponent],
  providers: [],
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

}
