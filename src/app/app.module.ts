import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { EditjokeComponent } from './editjoke/editjoke.component';
import { AddJokeComponent } from './add-joke/add-joke.component';
import { TopJokesComponent } from './top-jokes/top-jokes.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserDetailsComponent } from './user-details/user-details.component';
import { JokeItemComponent } from './joke-item/joke-item.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({ 
  declarations: [
    AppComponent,
    JokeComponent,
    UserComponent,
    TopBarComponent,
    EditjokeComponent,
    AddJokeComponent,
    TopJokesComponent,
    UserDetailsComponent,
    JokeItemComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [TopBarComponent, JokeComponent, JokeItemComponent, TopJokesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
