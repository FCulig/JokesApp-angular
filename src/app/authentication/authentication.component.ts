import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    
  }

}
