import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';
import { first } from 'rxjs/operators';

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

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  invalidLogin = false;

  onSubmit() {
    (this.authenticationService.authenticate(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      data => {
        this.router.navigate(['/jokes']);
        this.invalidLogin = false;
      }
    )
    );
  }



}
