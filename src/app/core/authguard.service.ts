import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { } from "angular2-jwt";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {


    if (localStorage.getItem('currentUser')) {

      var currentuser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(currentuser);


      if (currentuser.token != null || currentuser.token != undefined) {
        return true;
      }


    }

    this.router.navigate(['login']);
    return false;
  }

}
