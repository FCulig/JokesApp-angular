import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.authService.isUserLoggedIn());
    
    if (this.authService.isUserLoggedIn()) {
      console.log("Guard redirect")
      return true;
    }

    console.log("Guard ne redirect")
    this.router.navigate(['login']);
    return false;

  }
}