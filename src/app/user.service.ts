import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

private isUserLoggedIn;
private username  ;


  constructor() {
  this.isUserLoggedIn = false;
  this.username = '';
  }





   setUserLoggedIn () {
 this.isUserLoggedIn = true;
    }

   getUserLoggedIn() {
return this.isUserLoggedIn;
   }

 setUsername(user) {
 this.username = user;
    }

   getUsername() {
return this.username;
   }



}
