import { AuthorizeService } from './services/authorize.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthorizeService, private router: Router) {}

  canActivate() {
    if (this.auth.isLoggedin()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}

@Injectable({
  providedIn: 'root',
})
export class loginGuard implements CanActivate {
  constructor(private auth: AuthorizeService, private router: Router) {}

  canActivate() {
    if (this.auth.isLoggedin()) {
      this.router.navigate(['properties']);
      return false;
    }
    return true;
  }
}
