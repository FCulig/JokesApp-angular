import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeComponent } from './joke/joke.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'jokes', component: JokeComponent },
  { path: 'users', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }