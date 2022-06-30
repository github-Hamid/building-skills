import { Injectable } from '@angular/core';
import { user } from '../state/properties.state';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor() { }

  isLoggedin()
  {
    return !!localStorage.getItem("token") && user.isAuthenticated;
  }

}
