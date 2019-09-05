import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeComponent } from './joke/joke.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'jokes', component: JokeComponent },
  { path: 'users', component: UserComponent},
  { path: '', pathMatch: 'full', redirectTo: '/jokes'},
  { path: 'jokes/date/:someParam', pathMatch: 'full', component: JokeComponent},
  { path: 'jokes/from/:someParam', pathMatch: 'full', component: JokeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }