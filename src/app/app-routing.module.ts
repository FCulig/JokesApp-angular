import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JokeComponent } from './joke/joke.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  { path: 'jokes', component: JokeComponent },
  { path: 'users', component: UserComponent},
  { path: 'jokes/date/:someParam', pathMatch: 'full', component: JokeComponent},
  { path: 'jokes/from/:someParam', pathMatch: 'full', component: JokeComponent},
  { path: 'userdetails/:someParam', pathMatch: 'full', component: UserDetailsComponent},
  { path: 'login', pathMatch: 'full', component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }