import { Router } from '@angular/router';
import { DataManagerService } from './../../core/services/data-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email : string = "";
password : string = "";
error : string = "";
  constructor(private dataManager : DataManagerService, private router: Router)
   {

    }

  ngOnInit(): void {

  }

  submitForm()
  {
     this.dataManager.login(this.email, this.password)

.subscribe({
  next : (data)=>{
         localStorage.setItem("token", data.jwttoken);
        this.router.navigateByUrl("properties")
  },
  error : (err)=>{
            this.error = "Password or email is wrong!";
  }
})

  }

}