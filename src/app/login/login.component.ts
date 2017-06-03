import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery'
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {


username: string;
password: string;

  constructor(private router: Router) { }

  ngAfterViewInit(){

  }

  ngOnInit() {
  }

login(){
  if(this.username == "admin" && this.password == "admin"){
    localStorage.setItem('currentUser', JSON.stringify({
      username: this.username,
      token:  "this is my test token",
    }));

    this.router.navigate(['dashboard']);
  }

  

}

}
