import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  constructor() {}

  isLoggedin() {
    return !!localStorage.getItem('token');
  }
}
