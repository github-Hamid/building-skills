import { user, User } from './../../core/state/properties.state';
import { login } from './../../core/actions/properties.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { DataManagerService } from './../../core/services/data-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';
  constructor(
    private dataManager: DataManagerService,
    private router: Router,
    private store: Store,
    private userStore: Store<{ loginError: User }>
  ) {}

  ngOnInit(): void {
    this.userStore.select('loginError').subscribe((data) => {
      this.error = data.errorMessage;
    });
  }

  submitForm() {
    if (this.email.length != 0 && this.password.length != 0)
      this.store.dispatch(
        login({ email: this.email, password: this.password })
      );
    else this.error = 'Email and Password are required!';
  }
}
