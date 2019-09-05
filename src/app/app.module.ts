import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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

@NgModule({ 
  declarations: [
    AppComponent,
    JokeComponent,
    UserComponent,
    TopBarComponent,
    EditjokeComponent,
    AddJokeComponent,
    TopJokesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [TopBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
