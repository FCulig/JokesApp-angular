import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUser = new FormGroup({
    username: new FormControl('', Validators.required)
  });

  constructor(private modalService: NgbModal, private userService: UserService,
    private userComponent: UserComponent) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.addUser(this.addUser.value.username).subscribe(val => {
      this.userComponent.getUsers();
    });
    this.modalService.dismissAll();
    this.addUser.reset();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
