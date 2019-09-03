import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { EditjokeComponent } from './editjoke/editjoke.component';
import { AddJokeComponent } from './add-joke/add-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    UserComponent,
    TopBarComponent,
    EditjokeComponent,
    AddJokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
