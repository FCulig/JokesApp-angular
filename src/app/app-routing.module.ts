import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JokeComponent } from './joke/joke.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'jokes', component: JokeComponent,canActivate:[AuthGuard] },
  { path: 'users', component: UserComponent,canActivate:[AuthGuard] },
  { path: 'jokes/date/:someParam', pathMatch: 'full', component: JokeComponent,canActivate:[AuthGuard] },
  { path: 'jokes/from/:someParam', pathMatch: 'full', component: JokeComponent,canActivate:[AuthGuard] },
  { path: 'userdetails/:someParam', pathMatch: 'full', component: UserDetailsComponent,canActivate:[AuthGuard] },
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'login', pathMatch: 'full', component: AuthenticationComponent },

  { path: 'logout', pathMatch: 'full', component: LogoutComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }