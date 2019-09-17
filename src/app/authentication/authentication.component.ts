import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [
  ],
  bootstrap: []
})
export class AuthenticationComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  registerForm = new FormGroup({
    usernameReg: new FormControl('', Validators.required),
    passwordReg: new FormControl('', Validators.required),
    repeatedPasswordReg: new FormControl('', Validators.required)
  })

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  invalidLogin = false;

  onLogin() {
    (this.authenticationService.authenticate(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      data => {
        this.router.navigate(['/jokes']);
        this.invalidLogin = false;
      }
    )
    );
  }

  onRegister() {
    console.log()
    if (this.registerForm.value.passwordReg == this.registerForm.value.repeatedPasswordReg) {
      this.authenticationService.register(this.registerForm.value.usernameReg, this.registerForm.value.passwordReg).subscribe(val => {
      });
      alert("Registration successful");
    } else {
      alert("Passwords don't match");
    }
  }



}
